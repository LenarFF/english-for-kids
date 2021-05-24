export function indexdb(name: string, surname: string, email: string) {

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

  const addStickyNote = (db: IDBDatabase, name: string, surname: string, email: string) => {
    // Запустим транзакцию базы данных и получите хранилище объектов Notes
    let tx: IDBTransaction = db.transaction(['notes'], 'readwrite');
    let store = tx.objectStore('notes');
    // Добаляем заметку в хранилище объектов
    let note = {name: name, surname: surname, email};
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
    addStickyNote(db, name, surname, email);
  }

}

