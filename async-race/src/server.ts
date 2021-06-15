

const baseURL = "http://127.0.0.1:3000";

const garage = `${baseURL}/garage`;
const engine = `${baseURL}/engine`;
const winners = `${baseURL}/winners`;

export const getCars = async (page = 1, limit = 100) => {
  const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
  const data = await response.json();
  const count = response.headers.get('X-Total-Count');
  return {
    items: data,
    count: count
  }
}

export const getCar = async (id:number) => {
  return (await fetch(`${garage}/${id}`)).json()
}

export const createCar = async (body: any) => (await fetch(garage, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
})).json();

export const deleteCar = async (id: number) => {
  return (await fetch(`${garage}/${id}`, { method: 'DELETE'})).json()
}

export const updateCar = async (id: number, body: any) => {
 return (await fetch(`${garage}/${id}`, {
   method: 'PATCH',
   body: JSON.stringify(body),
   headers: {
    'Content-Type': 'application/json'
   }
 }))
}

export const startEngine = async (id: number) => {
  return (await fetch(`${engine}?id=${id}&status=started`)).json()
}

export const stopEngine = async (id: number) => {
  return (await fetch(`${engine}?id=${id}&status=stopped`)).json()
}

export const driveEngine = async (id:number) => {
  const response = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return response.status !== 200 ? {success: false} : { ...(await response.json())}
}

