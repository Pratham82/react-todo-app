import "./App.css";
import TodoList from "./components/TodoList";
import React, { Component } from "react";
import TodoItems from "./components/TodoItems";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], currentItem: { text: "", key: "" } };
  }

  handleInput = (e) => {
    const itemNext = e.target.value;
    const currentItem = { text: itemNext, key: Date.now() };
    this.setState({
      currentItem,
    });
    console.log("Handle input");
    e.preventDefault();
  };

  addItem = (e) => {
    console.log("This is add item");
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      console.log(newItem);
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: "", key: "" },
      });
    }
    e.preventDefault();
  };

  inputElement = React.createRef();

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter((item) => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems,
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />

        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
