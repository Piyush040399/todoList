import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: this.props.task.title,
      priority: this.props.task.priority,
    };
  }

  handleDelete = () => {
    this.props.deleteTask(this.props.task.id);
  };

  handleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = () => {
    const updatedTask = {
      id: this.props.task.id,
      title: this.state.title,
      priority: this.state.priority,
    };
    this.props.editTask(updatedTask);
    this.setState({ isEditing: false });
  };

  render() {
    const { task } = this.props;
    return (
      <li className="flex items-center justify-between p-2 mb-2 bg-gray-100 rounded-lg shadow-sm">
        {this.state.isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              className="w-full p-1 mr-2 border border-gray-300 rounded-lg"
            />
            <select
              name="priority"
              value={this.state.priority}
              onChange={this.handleInputChange}
              className="p-1 border border-gray-300 rounded-lg"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button
              onClick={this.handleSave}
              className="ml-2 bg-green-500 text-white p-1 rounded-lg hover:bg-green-600"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <span className="flex-1">{task.title}</span>
            <span
              className={`px-2 py-1 rounded-lg text-white ${
                task.priority === "High"
                  ? "bg-red-500"
                  : task.priority === "Medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              {task.priority}
            </span>
            <button
              onClick={this.handleEdit}
              className="ml-2 bg-blue-500 text-white p-1 px-2 rounded-lg hover:bg-blue-600"
            >
              <FontAwesomeIcon icon="pen" size="sm" />
            </button>
            <button
              onClick={this.handleDelete}
              className="ml-2 bg-red-500 text-white p-1 rounded-full px-2 hover:bg-red-600"
            >
              <FontAwesomeIcon icon="trash" size="sm" />
            </button>
          </>
        )}
      </li>
    );
  }
}

export default TaskItem;
