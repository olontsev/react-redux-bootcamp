import React from 'react';
import { Navbar, FormGroup, FormControl, Checkbox, Button, InputGroup, Glyphicon } from 'react-bootstrap';

class HeaderPanel extends React.Component {

  render() {
    return (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
          ToDo List
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullRight>
        <FormGroup>
          <Checkbox inline checked>Show Done &nbsp; </Checkbox>
          {' '}
          <InputGroup>
            <FormControl type="text" placeholder="Search" />
            <InputGroup.Addon>
              <Glyphicon glyph="remove" />
            </InputGroup.Addon>  
          </InputGroup>
        </FormGroup>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
    );
  }
}

export default HeaderPanel;
