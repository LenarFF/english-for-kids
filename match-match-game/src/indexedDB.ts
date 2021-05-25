export function indexdb(name: string, surname: string, email: string) {
  const request: IDBOpenDBRequest = window.indexedDB.open('lenarFF', 6);
  let db: IDBDatabase;

  request.onupgradeneeded = function (event: any) {
    db = event.target.result as IDBDatabase;

    // Создаём хранилище объектов для этой базы данных
    const notes = db.createObjectStore('notes', { autoIncrement: true });
  };

  request.onerror = function (event: any) {
    if (event.target) {
      console.log(`error indexDB${event.target.error.name as IDBDatabase}`);
    }
  };

  request.onsuccess = function (event: Event) {
    console.log('success indexDB');
    if (event.target) {
      db = request.result as IDBDatabase;
    }
  };

  const addStickyNote = (dBase: IDBDatabase, userName: string, userSurname: string, userEmail: string) => {
    // Запустим транзакцию базы данных и получите хранилище объектов Notes
    const tx: IDBTransaction = dBase.transaction(['notes'], 'readwrite');
    const store = tx.objectStore('notes');
    // Добаляем заметку в хранилище объектов
    const note = { userName, userSurname, userEmail };
    store.add(note);
    // Ожидаем завершения транзакции базы данных
    tx.oncomplete = () => {
      console.log('stored note!');
    };
    tx.onerror = () => {
      alert('error storing note ');
    };
  };

  request.onsuccess = (event) => {
    db = (event.target as IDBOpenDBRequest).result;
    addStickyNote(db, name, surname, email);
  };
}
