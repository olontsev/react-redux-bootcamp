import React from 'react';
import TasksList from '../components/TasksList';
import { Panel, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class TasksPanel extends React.Component {

  render() {
    let header = <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Enter Task Title"/>
            <InputGroup.Button>
              <Button>Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>;

    return (
       <Panel header={header} bsClass="tasks_panel panel">
          <TasksList />
       </Panel>        
    );
  }
}

export default TasksPanel;