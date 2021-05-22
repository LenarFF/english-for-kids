export function indexdb() {

  let request: IDBOpenDBRequest = window.indexedDB.open("lenarFF", 6);
  let db: IDBDatabase;

  request.onupgradeneeded = function(event: any) {
    db = event.target.result  as IDBDatabase;

    // Создаём хранилище объектов для этой базы данных
    let notes  = db.createObjectStore('notes', {autoIncrement: true})
  };

  request.onerror = function(event: any) {
    if (event.target) {
    console.log('error indexDB' + (event.target.error.name  as IDBDatabase))
    }
  };

  request.onsuccess = function(event: Event) {
    console.log('success indexDB')
    if (event.target) {
    db = request.result  as IDBDatabase;
    }
  };



  const addStickyNote = (db: IDBDatabase, message: string) => {
    // Запустим транзакцию базы данных и получите хранилище объектов Notes
    let tx: IDBTransaction = db.transaction(['notes'], 'readwrite');
    let store = tx.objectStore('notes');
    // Добаляем заметку в хранилище объектов
    let note = {text: message, timestamp: Date.now()};
    store.add(note);
    // Ожидаем завершения транзакции базы данных
    tx.oncomplete = () => {
      console.log('stored note!')
    }
    tx.onerror = () => {
      alert('error storing note ');
    }
  }

  request.onsuccess = (event) => {
    db = (event.target as IDBOpenDBRequest).result;
    addStickyNote(db, 'Hello world first time!');
    addStickyNote(db, 'Hello world second time!');
    addStickyNote(db, 'Hello world third time!');
  }

}

