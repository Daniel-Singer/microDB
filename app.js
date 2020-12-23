'use strict';

const db = new microDB('Users');

db.init();

const User = new Schema({
  name: 'Petra',
  age: 32
})

document.querySelector('#post-btn').addEventListener('click', (e) => {
  e.preventDefault();
  db.post(User);
});

document.querySelector('#delete-db').addEventListener('click', (e) => {
  e.preventDefault();
  db.removeAll();
})

db.getAll();

// property value

let item = db.getItemBy('name', 'Petra');
console.log(item)