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
           <Button className="glyphicon glyphicon-pencil" bsSize="xsmall" onClick={(e) => { this.props.onEdit(catId); e.stopPropagation(); }}></Button>
           <Button className="glyphicon glyphicon-plus pull-right" bsSize="xsmall"onClick={(e) => { this.props.onAddChild(catId); e.stopPropagation(); }}></Button>
           <Button className="glyphicon glyphicon-trash pull-right" bsSize="xsmall" onClick={(e) => { this.props.onDelete(catId); e.stopPropagation(); }}></Button>
        </Form>
      </li>
    );
  }
}

export default CategoriesTreeItem;