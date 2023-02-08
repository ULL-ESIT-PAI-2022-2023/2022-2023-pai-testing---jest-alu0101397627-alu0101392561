class ListClass { /// Class example
  constructor() { /// Constructor
    this.list = [];
  }
  
  insert(element) { /// method for insert elements
    this.list.push(element);
  }

  reset() { /// method for erase all elements
    this.list = [];
  }

  getList() { /// getter of the list
    return this.list;
  }

  print() { /// method for print the list
    for (let i = 0; i < this.list.length; ++i) {
      console.log(this.list[i]);
    }
  }
}; 

module.exports = ListClass; /// Exporting the class