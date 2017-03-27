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
      this.props.onCategoryAdd(this.editNameInput.value); 
      this.editNameInput.value = '';
    }

    let header = <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Enter Category Title" ref={(FormControl) => { this.addNameInput = ReactDOM.findDOMNode(FormControl); }} />
            <InputGroup.Button>
              <Button onClick={ onCategoryAddClick }>Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>;
    
    let modalDialog = null;
    if(this.props.editCategoryId) {
      modalDialog = <Modal.Dialog>
                      <Panel>
                        <FormGroup>
                          <InputGroup>
                            <FormControl type="text" placeholder="Enter Category Title" ref={(FormControl) => { this.editNameInput = ReactDOM.findDOMNode(FormControl); }} />
                            <InputGroup.Button>
                              <Button onClick={() => { onCategoryRenameClick }}>Rename</Button>
                            </InputGroup.Button>
                          </InputGroup>
                        </FormGroup>
                      </Panel>
                    </Modal.Dialog>
    }

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