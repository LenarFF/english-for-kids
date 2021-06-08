function addGame(name: string, surname: string, email: string, points: number, db: any) {
  const transaction = db.transaction('games', 'readwrite');
  const games = transaction.objectStore('games');

  const game = {
    name,
    surname,
    email,
    points: points > 0 ? points : 0,
  };

  const request = games.add(game);

  request.onsuccess = () => {
  };

  request.onerror = () => {
    throw Error('Ошибка при записи в БД');
  };
}

export function indexDBAdd(name: string, surname: string, email: string, points: number): void {
  let db: any;

  const openRequest = indexedDB.open('LenarFF', 1);

  openRequest.onerror = () => {
    throw new Error('indexDB error');
  };

  openRequest.onsuccess = (event: any) => {
    db = event.target.result;

    addGame(name, surname, email, points, db);
  };

  openRequest.onupgradeneeded = (event: any) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains('games')) {
      db.createObjectStore('games', { keyPath: 'points', autoIncrement: true }, { unique: false });
    }
  };
}
