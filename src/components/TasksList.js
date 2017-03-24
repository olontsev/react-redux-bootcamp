import React from 'react';
import TasksListItem from '../components/TasksListItem';

class ToDoList extends React.Component {

  render() {
    var tasks = [
      { id:1, text: "Task 1", done: true },
      { id:2, text: "Task 2", done: true },
      { id:3, text: "Task 3", done: false },
      { id:5, text: "Task 5" }
    ];
    var children = [];

    tasks.forEach(function (task) {
        children.push(<TasksListItem key={task.id} task={task} />);
    });

    return (
      <div className='tasklist'>
        <ul className='list-group'>
          {children}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
