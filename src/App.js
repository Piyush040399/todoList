import React, { Component } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      filter: 'all',
      searchQuery: '',
    };
  }

  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== id),
    });
  };

  editTask = (updatedTask) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    });
  };

  setFilter = (filter) => {
    this.setState({ filter });
  };

  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  getFilteredTasks = () => {
    const { tasks, filter, searchQuery } = this.state;
    return tasks
      .filter((task) => 
        (filter === 'all' || task.priority === filter) &&
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => 
        (a.priority === 'High' ? -1 : 1) - (b.priority === 'High' ? -1 : 1)
      );
  };

  render() {
    return (
      <div className="app-container w-md md:w-3/5 mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
        <AddTask addTask={this.addTask} />
        <Filter setFilter={this.setFilter} setSearchQuery={this.setSearchQuery} />
        <TaskList 
          tasks={this.getFilteredTasks()} 
          deleteTask={this.deleteTask} 
          editTask={this.editTask} 
        />
      </div>
    );
  }
}

export default App;
