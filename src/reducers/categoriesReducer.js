import * as types from '../constants/ActionTypes';

const initialState = {
  rootIds: [1, 2, 3], // id корневых элементов дерева
  selectedId: 0,
  editId: 0,
  lastId: 3,
  dataById: {
    1: {
      id: 1,
      name: 'Категория 1'
    },
    2: {
      id: 2,
      name: 'Категория 2'
    },
    3: {
      id: 3,
      name: 'Категория 3'
    }
  }
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.SELECT_CATEGORY:
      return {
        ...state,
        selectedId: action.id
      }

    case types.ADD_CATEGORY:
      const newId = state.lastId + 1;
      return {
        rootIds: state.rootIds.concat(newId),
        selectedId: newId,
        lastId: newId,
        dataById: {
          ...state.dataById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      }

    case types.ADD_CHILD_CATEGORY: // @todo доделать добавление с учетом иерархии      
      return state;

    case types.DELETE_CATEGORY:   // @todo доделать удаление с учетом иерархии
      return {
        ...state,
        rootIds: state.rootIds.filter(id => id !== action.id)
      }      

    case types.EDIT_CATEGORY:
      return {
        ...state,
        editId: action.id
      }

    case types.CANCEL_EDIT_CATEGORY:
      return {
        ...state,
        editId: 0
      }      

    case types.RENAME_CATEGORY:
      return {
        ...state,
        editId: 0,
        dataById: {
          ...state.dataById,
          [action.id]: {
            ...state.dataById[action.id],
            name: action.name
          }
        }
      }

    default:
      return state;
  }
}

export default categoriesReducer