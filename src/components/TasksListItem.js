import React from 'react';

import { Form, Checkbox, Button } from 'react-bootstrap';

class ToDoListItem extends React.Component {

  render() {
    if(!this.props.task)
      return null;

    let taskText = this.props.task.text;
    let taskDone = this.props.task.done;

    return (
      <li className='list-group-item'>
        <Form inline>
           <Checkbox inline checked={taskDone} onChange={this.props.onChange}>{taskText}</Checkbox>
           <Button className="glyphicon glyphicon-pencil pull-right" bsSize="xsmall"></Button>
           {' '}
        </Form>
      </li>
    );
  }
}

export default ToDoListItem;



