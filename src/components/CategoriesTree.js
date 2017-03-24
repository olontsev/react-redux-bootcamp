import React from 'react';
import CategoriesTreeItem from '../components/CategoriesTreeItem';

class CategoriesTree extends React.Component {

  render() {
    var children = [];
    this.props.categories.forEach((category) => {
        children.push(<CategoriesTreeItem key={category.id} category={category} {...this.props} />);
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

export default CategoriesTree;