import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={this.props.deleteTask}
            editTask={this.props.editTask}
          />
        ))}
      </ul>
    );
  }
}

export default TaskList;
