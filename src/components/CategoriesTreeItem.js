import React from 'react';
import { Form, Checkbox, Button } from 'react-bootstrap';

class CategoriesTreeItem extends React.Component {

  render() {
    if(!this.props.category)
      return null;

    let catId = this.props.category.id;
    let catName = this.props.category.name;
    let cssClass = 'list-group-item' + (this.props.category.selected ? ' active' : '');
    let catExpander = null; 
    if(this.props.category.subcategories)
        catExpander = <Button className="glyphicon glyphicon-chevron-down" bsSize="xsmall"></Button>;

    return (
      <li className={cssClass} key={catId} onClick={() => { this.props.onSelect(catId) }}>
        <Form inline>
           {catExpander}
           {' '} 
           {catName}
           {' '}
           <Button className="glyphicon glyphicon-pencil" bsSize="xsmall" onClick={() => { this.props.onEdit(catId) }}></Button>
           <Button className="glyphicon glyphicon-plus pull-right" bsSize="xsmall"onClick={() => { this.props.onAddChild(catId) }}></Button>
           <Button className="glyphicon glyphicon-trash pull-right" bsSize="xsmall" onClick={() => { this.props.onDelete(catId) }}></Button>
        </Form>
      </li>
    );
  }
}

export default CategoriesTreeItem;