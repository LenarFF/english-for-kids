import { CarType, ItemsType, WinnerType } from './types';

const baseURL = 'http://127.0.0.1:3000';

const garage = `${baseURL}/garage`;
const engine = `${baseURL}/engine`;
const winners = `${baseURL}/winners`;

export const getCars = async (page = 1, limit = 7): Promise<{ items: CarType[], count: string | null }> => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const data = await response.json();
  const count = response.headers.get('X-Total-Count');
  return {
    items: data,
    count,
  };
};

export const getCar = async (id: number): Promise<CarType> => (await fetch(`${garage}/${id}`)).json();

export const createCar = async (body: { name: string, color: string }): Promise<void> => (
  await fetch(garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const deleteCar = async (id: number)
: Promise<void> => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();

export const updateCar = async (id: number, body: { name?: string, color: string })
: Promise<Response> => fetch(`${garage}/${id}`, {
  method: 'PATCH',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const startEngine = async (id: number)
: Promise<{ velocity: number, distance: number }> => (await fetch(`${engine}?id=${id}&status=started`)).json();

export const stopEngine = async (id: number)
: Promise<void> => (await fetch(`${engine}?id=${id}&status=stopped`)).json();

export const driveEngine = async (id: number): Promise<{ success: boolean }> => {
  const response = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return response.status !== 200 ? { success: false } : { ...(await response.json()) };
};

export const createWinner = async (body: { id:number, wins: number, time: number }): Promise<void> => (
  await fetch(winners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const getWinner = async (id: number): Promise<WinnerType> => (await fetch(`${winners}/${id}`)).json();

export const getWinnerStatus = async (id: number): Promise<number> => (await fetch(`${winners}/${id}`)).status;

export const updateWinner = async (id: number, body: { id: number, wins: number, time: number }): Promise<void> => (
  await fetch(`$${winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
).json();

export const saveWinner = async ({ id, time }: { id: number, time: number }): Promise<void> => {
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

export const deleteWinner = async (id: number)
: Promise<void> => (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export const getWinners = async ({
  sort, order, page = 1, limit = 10,
}: {
  sort : string, order: string, page?: number, limit?: number
}): Promise<{
  items: ItemsType[];
  count: string | null;
}> => {
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
