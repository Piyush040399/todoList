import React, { Component } from 'react';

class Filter extends Component {
  handleFilterChange = (e) => {
    this.props.setFilter(e.target.value);
  };

  handleSearchChange = (e) => {
    this.props.setSearchQuery(e.target.value);
  };

  render() {
    return (
      <div className="flex items-center justify-between mb-4">
        <select
          onChange={this.handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="text"
          placeholder="Search by title"
          onChange={this.handleSearchChange}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  }
}

export default Filter;
