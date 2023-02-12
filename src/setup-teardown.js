class ListClass { /// Class example
  constructor() { /// Constructor
    this.list_ = [];
  } 
  insert(element) { /// method for insert elements
    this.list_.push(element);
  }
  reset() { /// method for erase all elements
    this.list_ = [];
  }
  getList() { /// getter of the list
    return this.list_;
  }
  print() { /// method for print the list
    for (let i = 0; i < this.list_.length; ++i) {
      console.log(this.list_[i]);
    }
  }
}; 

module.exports = ListClass; /// Exporting the class