

// добавление объекта

export function indexDBAdd(name: string, surname: string, email: string, points: number) {

  let db: any;

let openRequest = indexedDB.open('test', 1);

openRequest.onerror = function () {
    console.log('open db request --- onerror');
    console.log('Ошибка при открытии БД. Код ошибки: ');
};

openRequest.onsuccess = function (event: any) {
    console.log('open db --- onsuccess');
    db = event.target.result;

    addGame();
};

openRequest.onupgradeneeded = function (event: any) {
    console.log('open db --- onupgradeneeded');
    db = event.target.result;
    if (!db.objectStoreNames.contains('games')) {
        db.createObjectStore('games', {keyPath: 'points', autoIncrement: true});
    };
};

// ---------------------------------------------------
function addGame() {
    let transaction = db.transaction('games', 'readwrite');
    let games = transaction.objectStore('games');

    let game = {
        name: name,
        surname: surname,
        email: email,
        points: (points > 0) ? points : 0
          };

    let request = games.add(game);
    console.dir(request);

    request.onsuccess = function () {
        console.log('Партия записана в БД');
    };

    request.onerror = function (event: any) {
        console.log('Ошибка при записи в БД', event.target.error);
    };
};

}


// курсор


export function getDB() {


}