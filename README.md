# MicroDB

### A minimalistic library to use localStorage as DataBase i tried to come up with. I use the localStorage API on a regular basis when developing apps. So nothing special, but here it is...

#### Get Started:

Start with creating a new **"DataBase"** and come up with a name for it as an argumenent

```javascript
const DB = new microDB('Users');
```
#### Initialize DB

```javascript
DB.init();
```
After you have run the initializing command, it is time to post some data to it.

Use the **.post()** method to store your data in microDB

```javascript
DB.post(User)
```
It is possible to access your stored data with one of the following methods:
**.getAll()** returns all data within this instance of microDB

```javascript
DB.getAll();
```
**getItemBy** needs two arguments, the property and it´s name of the item you are searching for

```javascript
DB.getItemBy(property,value);
```
To show a quick example:

```javascript
const User = DB.getItemBy('name', 'John');
// returns { name: 'John', age: 22 }
```



