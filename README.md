# MicroDb

## A minimalistic library to use localStorage as DataBase i tried to come up with. I use the localStorage API on a regular basis when developing apps. So nothing special, but here it is...

### Get Started:

Start with creating a new **"DataBase"** and come up with a name for it as an argumenent

```javascript
const DB = new microDB('Users');
```
### Initialize DB

```javascript
DB.init();
```
After you have run the initializing commad, it is time to post some data to it.

### Create Schema

If you are having a more complex DataStructure, i would highly recommend createing a Schema. An id will automatically be created and added to your data.

```javascript
const User = new Schema({
  name: 'User',
  age : 22
})
```
Next thing, use the .push() method to store your data in microDB

```javascript
DB.push(User)
```


