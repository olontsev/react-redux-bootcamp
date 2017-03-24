import * as types from '../constants/ActionTypes';

export function selectCategory(id) {
  return {
    type: types.SELECT_CATEGORY,
    id: id
  };
}

export function addCategory(name) {
  return {
    type: types.ADD_CATEGORY,
    name: name
  };
}

export function addChildCategory(parentId, name) {
  return {
    type: types.ADD_CHILD_CATEGORY,
    parentId: parentId,
    name: name
  };
}

export function deleteCategory(id) {
  return {
    type: types.DELETE_CATEGORY,
    id: id
  };
}

export function editCategory(id) {
  return {
    type: types.EDIT_CATEGORY,
    id: id
  };
}

export function renameCategory(id, name) {
  return {
    type: types.RENAME_CATEGORY,
    id: id,
    name: name
  };
}