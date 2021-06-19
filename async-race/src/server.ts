const baseURL = 'http://127.0.0.1:3000';

const garage = `${baseURL}/garage`;
const engine = `${baseURL}/engine`;
const winners = `${baseURL}/winners`;

export const getCars = async (page = 1, limit = 100) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const data = await response.json();
  const count = response.headers.get('X-Total-Count');
  return {
    items: data,
    count,
  };
};

export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: {name: string, color: string}) => (
  await fetch(garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const deleteCar = async (id: number) => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const updateCar = async (id: number, body: { name?: string, color: string}) => fetch(`${garage}/${id}`, {
  method: 'PATCH',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const startEngine = async (id: number) => (await fetch(`${engine}?id=${id}&status=started`)).json();

export const stopEngine = async (id: number) => (await fetch(`${engine}?id=${id}&status=stopped`)).json();

export const driveEngine = async (id: number) => {
  const response = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
};

export const createWinner = async (body: { id:number, wins: number, time: number}) => (
  await fetch(winners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const getWinner = async (id: number) => (await fetch(`${winners}/${id}`)).json();

export const getWinnerStatus = async (id: number) => (await fetch(`${winners}/${id}`)).status;

export const updateWinner = async (id: number, body: {id: number, wins: number, time: number}) => (
  await fetch(`$${winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const saveWinner = async ({ id = 0, time = 0 }) => {
  const winnerStatus = await getWinnerStatus(id);
  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};

export const deleteWinner = async (id: number) => (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export const getWinners = async ({
  sort = '', order = '', page = 1, limit = 10,
}) => {
  const response = await fetch(
    `${winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`,
  );

  const items = await response.json();

  return {
    items: await Promise.all(
      items.map(async (winner: { id: number }) => ({ ...winner, car: await getCar(winner.id) })),
    ),
    count: response.headers.get('X-Total-Count'),
  };
};
