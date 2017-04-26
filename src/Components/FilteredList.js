import React from 'react';
import List from './List';

class FilteredList extends React.Component {
  constructor() {
    super();

    let items = [
      "Apples",
      "Broccoli",
      "Chicken",
      "Duck",
      "Eggs",
      "Fish",
      "Granola",
      "Hash Browns"
    ];

    this.state = {
      initialItems: items,
      items: items
    }
  }

  filterList = (event) => {
    let updatedList = this.state.initialItems;
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }

  render() {
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default FilteredList;
