import React from 'react';
import ReactDOM from 'react-dom'
import CategoriesTree from '../components/CategoriesTree';
import { Modal, Panel, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class CategoriesPanel extends React.Component {
  
  render() {
    let treeProps = {
      categories: this.props.categories,
      onSelect: this.props.onCategorySelect,
      onDelete: this.props.onCategoryDelete,
      onEdit: this.props.onCategoryEdit,
      onAddChild: this.props.onCategoryAddChild
    }

    let onCategoryAddClick = () => {
      this.props.onCategoryAdd(this.addNameInput.value); 
      this.addNameInput.value = '';
    }

    let onCategoryRenameClick = () => {
      if(this.props.editCategoryId)
        this.props.onCategoryRename(this.props.editCategoryId, this.editNameInput.value); 
      this.editNameInput.value = '';
    }

    let onCategoryCancelClick = () => {   
      this.props.onCategoryCancelEdit(this.props.editCategoryId, this.editNameInput.value); 
    }

    let header = 
      <FormGroup>
        <InputGroup>
          <FormControl type="text" placeholder="Enter Category Title" ref={(FormControl) => { this.addNameInput = ReactDOM.findDOMNode(FormControl); }} />
          <InputGroup.Button>
            <Button onClick={ onCategoryAddClick }>Add</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>;
    
    let modalDialog = 
      <Modal show={ !!this.props.editCategoryId }>
        <Modal.Header>
          <Modal.Title>Rename Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl type="text" placeholder="Enter Category Title" defaultValue={ this.props.editCategoryName } ref={(FormControl) => { this.editNameInput = ReactDOM.findDOMNode(FormControl); }} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ onCategoryCancelClick }>Cancel</Button>
          <Button bsStyle="primary" onClick={ onCategoryRenameClick }>Rename</Button>
        </Modal.Footer>
      </Modal>;
    
    return (
      <div>
        <Panel header={header} bsClass="categories_panel panel">
          <CategoriesTree {...treeProps} />
        </Panel>        
        {modalDialog}
      </div>
    );
  }
}

export default CategoriesPanel;