class Person 
{
  constructor(name) {
    this.name = name;
  }
  
  handleNameChange = (newName) => {
    this.name = newName;
  }
}


class Person 
{
  constructor(name) {
    this.name = name;
    
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  
  handleNameChange(newName) => {
    this.name = newName;
  }
}
