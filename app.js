'use strict';

const db = new microDB('Users');

db.init();

const User = new Schema({
  _id: Date.now(),
  name: 'Daniel',
  age: 35
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