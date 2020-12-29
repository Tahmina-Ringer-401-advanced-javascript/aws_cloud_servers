'use strict';

class BabyAnimal {
  constructor(name){
    this.id = 0;
    this.name = name;
    this.db = [];
  }

  get(id){
    if(id){
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    obj.id = ++this.id;
    this.db.push(obj);
    return obj;
  }

  update(id, obj) {
    // if (!id) { return null; }
    // // find th object that need to be updated and update that object
    // this.db = this.db.map(record => {
    //   if(record.id !== id)return;
    //   obj.keys.forEach(key => {
    //     record[key] = obj[key];
    //   });
    //   return record;
    // });
    // return this.db.find(record => record.id === id);

const dbObj = this.db.find(record => record.id === id);
dbObj = {... dbObj, ...};

  }

  delete(id) {
    if(!id) { return null; }
    //TODO: figure out how to delete the object
    return null;
  }
}

module.exports = BabyAnimal;