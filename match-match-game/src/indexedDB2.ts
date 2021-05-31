
export function indexDBAdd(name: string, surname: string, email: string, points: number) {
  let db: any;

  const openRequest = indexedDB.open('test', 1);

  openRequest.onerror = function () {
    console.log('open db request --- onerror');
  };

  function addGame() {
    const transaction = db.transaction('games', 'readwrite');
    const games = transaction.objectStore('games');

    const game = {
      name,
      surname,
      email,
      points: points > 0 ? points : 0,
    };

    const request = games.add(game);
    console.dir(request);

    request.onsuccess = function () {
      console.log('Партия записана в БД');
    };

    request.onerror = function (event: any) {
      console.log('Ошибка при записи в БД', event.target.error);
    };
  }

  openRequest.onsuccess = function (event: any) {
    console.log('open db --- onsuccess');
    db = event.target.result;

    addGame();
  };

  openRequest.onupgradeneeded = function (event: any) {
    console.log('open db --- onupgradeneeded');
    db = event.target.result;
    if (!db.objectStoreNames.contains('games')) {
      db.createObjectStore('games', { keyPath: 'points', autoIncrement: true });
    }
  };

}
