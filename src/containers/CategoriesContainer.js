import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../actions/CategoriesActions';
import CategoriesPanel from '../components/CategoriesPanel';

const transformCategoriesState = (categories, branchIds) => {   // @todo: добавить рекурсивный обход потомков
  let transformed = [];
  if(!branchIds)
    return transformed;
  branchIds.forEach((id) => {    
    if(categories.dataById[id]) {
      transformed.push({
        id,
        name: categories.dataById[id].name,
        selected: id == categories.selectedId,
        expanded: false,
        hasChild: false
      });
    }
  });
  return transformed;
}

const mapStateToProps = (state) => {
  let props = {
    categories: transformCategoriesState(state.categories, state.categories.rootIds),
    editCategoryId: 0,
    editCategoryName: ''
  };
  if(state.categories.editId && state.categories.dataById[state.categories.editId]) {
    state.editCategoryId = state.categories.editId;
    state.editCategoryName = state.categories.dataById[state.categories.editId].name;
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
    onCategoryRename: (id) => { dispatch(actions.renameCategory(id)) }
  }
}

const CategoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesPanel)

export default CategoriesContainer
