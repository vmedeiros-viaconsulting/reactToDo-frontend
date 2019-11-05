import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    //Update react state
    this.setState({
      [key]: value
    });
  }

  addItem(){
    //Create item with unique id
    const newItem={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //Copy of current list of items
    const list = [...this.state.list];

    //Add new item to list
    list.push(newItem);

    //Update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    })
  }
  render(){
    return (
      <div className="App">
        <div>
          Add an Item...
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            onClick={() => this.addItem()}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default App;
