'use strict';

function Schema(data){
  this.data = data;
}

function microDB(DB_NAME){
  this.DB_NAME = DB_NAME;

  // initialize DB

  // Check if database exists and set DB_EXISTS to true or false

  let DB_EXISTS = localStorage.getItem(DB_NAME) ? true : false;

  this.init = function(){
    // exists is true or false depending if DB exists in localStorage already
    let exists = localStorage.getItem(DB_NAME) ? true : false;
    // initialize DB if not in localStorage already
    if(!exists){
      localStorage.setItem(this.DB_NAME, JSON.stringify([]));
      DB_EXISTS = true;
      return;
    }
  };

  

  // stringify and store data

  function store(item){
    localStorage.setItem(DB_NAME, JSON.stringify(item));
  }


  // load and parse data

  function load(item = DB_NAME){
    return JSON.parse(localStorage.getItem(item));
  }

  // post data to DB

  this.post = function(item){
    if(DB_EXISTS){
      const DB_DATA = load();
      DB_DATA.push(item.data);
      store(DB_DATA);
      return;
    }
    console.error('No microDB found')
  };

  // receive data from DB

  this.getAll = function(){
    if(DB_EXISTS){
      return load();
    }
    console.error('No microDB found')
  };

  // delete DB

  this.removeAll = function(){
    localStorage.removeItem(DB_NAME);
    this.init();
    console.info('All data successfully removed')
  }

}
