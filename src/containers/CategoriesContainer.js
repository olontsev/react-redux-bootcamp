import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions/CategoriesActions';
import CategoriesPanel from '../components/CategoriesPanel';

const transformCategoriesState = (categories, branchIds) => {   // @todo: добавить рекурсивный обход потомков
  let transformed = [];
  if(!branchIds)
    branchIds = categories.get('rootIds');
  branchIds.forEach((id) => {    
    if(categories.get('dataById').get(id)) {
      transformed.push({
        id,
        name: categories.get('dataById').get(id).get('name'),
        selected: id == categories.get('selectedId'),
        expanded: false,
        hasChild: false
      });
    }
  });
  return transformed;
}

const mapStateToProps = (state) => {
  let props = {
    categories: transformCategoriesState(state.get('categories')),
    editCategoryId: 0,
    editCategoryName: ''
  };

  let editId = state.get('categories').get('editId');
  if(editId && state.get('categories').get('dataById').get(editId)) {
    props.editCategoryId = editId;
    props.editCategoryName = state.get('categories').get('dataById').get(editId).get('name');
  }
  return props;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCategorySelect: (id) => { dispatch(actions.selectCategory(id)) },    
    onCategoryAdd: (name) => { dispatch(actions.addCategory(name)) },
    onCategoryAddChild: (id) => { dispatch(actions.addChildCategory(id)) },
    onCategoryDelete: (id) => { dispatch(actions.deleteCategory(id)) },
    onCategoryEdit: (id) => { dispatch(actions.editCategory(id)) },
    onCategoryCancelEdit: () => { dispatch(actions.cancelEditCategory()) },
    onCategoryRename: (id, name) => { dispatch(actions.renameCategory(id, name)) }
  }
}

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPanel)

export default CategoriesContainer
