import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      priority: 'Medium',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: this.state.title,
      priority: this.state.priority,
    };
    this.props.addTask(newTask);
    this.setState({ title: '', priority: 'Medium' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mb-4">
        <div className="flex items-center mb-2">
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
            placeholder="Add a new task"
            required
            className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="priority"
            value={this.state.priority}
            onChange={this.handleInputChange}
            className="p-2 border-t border-b border-r border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
    );
  }
}

export default AddTask;
