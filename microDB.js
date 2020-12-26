'use strict';


function microDB(DB_NAME) {
  this.DB_NAME = DB_NAME;

  // initialize DB

  // Check if database exists and set DB_EXISTS to true or false

  let DB_EXISTS = localStorage.getItem(DB_NAME) ? true : false;

  this.init = function () {
    // exists is true or false depending if DB exists in localStorage already
    let exists = localStorage.getItem(DB_NAME) ? true : false;
    // initialize DB if not in localStorage already
    if (!exists) {
      localStorage.setItem(this.DB_NAME, JSON.stringify([]));
      DB_EXISTS = true;
      return;
    }
  };

  // stringify and store data

  function store(item) {
    localStorage.setItem(DB_NAME, JSON.stringify(item));
  }


  // load and parse data

  function load(item = DB_NAME) {
    return JSON.parse(localStorage.getItem(item));
  }

  // post data to DB

  this.post = function (item) {
    if (DB_EXISTS) {
      item._id = Date.now();
      const DB_DATA = load();
      DB_DATA.push(item);
      store(DB_DATA);
      return;
    }
    console.error('No microDB found')
  };

  // get single item

  this.getItemBy = function (property, value) {
    let result;
    let data = load();
    data.forEach((set) =>{
      if(set[property] === value){
        result = set;
        return;
      }
    });
    return result === undefined ? console.error('No Item Found'): result
  }
  // receive data from DB

  this.getAll = function () {
    if (DB_EXISTS) {
      return load();
    }
    console.error('No microDB found')
  };

  // remove single item 

  this.remove = function(property, value){
    const Items = load();
    Items.forEach((item) => {
      if(item[property] === value){
        Items.splice(Items.indexOf(item), 1);
        return;
      }
    })
    store(Items);
  }
  // delete DB

  this.removeAll = function () {
    localStorage.removeItem(DB_NAME);
    this.init();
    console.info('All data successfully removed')
  }

}
