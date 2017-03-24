import React from 'react';
import CategoriesTree from '../components/CategoriesTree';
import { Modal, Panel, FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

class CategoriesPanel extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      catName: ''
    };
    console.log(props.editCategoryId);
    if(this.props.editCategoryId && this.props.categories.dataById[this.props.editCategoryId])
      this.state.catName = this.props.categories.dataById[this.props.editCategoryId].name;
  }

  render() {
    let treeProps = {
      categories: this.props.categories,
      onSelect: this.props.onCategorySelect,
      onDelete: this.props.onCategoryDelete,
      onEdit: this.props.onCategoryEdit,
      onAddChild: this.props.onCategoryAddChild
    }

    let header = <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Enter Category Title" value={this.state.newName} onChange={(e) => { this.setState({ newName: e.target.value }) }} />
            <InputGroup.Button>
              <Button onClick={() => { this.props.onCategoryAdd(this.state.newName); this.setState({ newName: '' }); }}>Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>;
    
    let modalDialog = null;
    if(this.props.editCategoryId) {
      modalDialog = <Modal.Dialog>
                      <Panel>
                        <FormGroup>
                          <InputGroup>
                            <FormControl type="text" placeholder="Enter Category Title" value={this.state.catName} onChange={(e) => { this.setState({ catName: e.target.value }) }} />
                            <InputGroup.Button>
                              <Button onClick={() => { this.props.onCategoryRename(this.state.catName); this.setState({ catName: '' }); }}>Rename</Button>
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