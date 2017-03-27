import { Map, OrderedSet } from 'immutable';
import * as types from '../constants/ActionTypes';

const initialState = Map({
  rootIds: OrderedSet(['1', '2', '3']), // id корневых элементов дерева
  selectedId: '0',
  editId: '0',
  lastId: 3,
  dataById: Map({
    '1': Map({ id: '1', name: 'Категория 1' }),
    '2': Map({ id: '2', name: 'Категория 2' }),
    '3': Map({ id: '3', name: 'Категория 3' })
  })
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case types.SELECT_CATEGORY:
      return state.set('selectedId', action.id);

    case types.ADD_CATEGORY:
      const newId = state.get('lastId') + 1;
      const strId = newId + '';
      return state.merge( Map({
        rootIds: state.get('rootIds').concat(strId),
        selectedId: strId,
        lastId: newId,
        dataById: state.get('dataById').set(strId, Map({ id: strId, name: action.name }))
      }));

    case types.ADD_CHILD_CATEGORY: // @todo доделать добавление с учетом иерархии      
      return state;

    case types.DELETE_CATEGORY:   // @todo доделать удаление с учетом иерархии
      const ids = state.get('rootIds').filter(id => id !== action.id);
      return state.set('rootIds', ids);

    case types.EDIT_CATEGORY:
      return state.set('editId', action.id);

    case types.CANCEL_EDIT_CATEGORY:
      return state.set('editId', 0);

    case types.RENAME_CATEGORY:
      const data = state.get('dataById').get(action.id);
      if(!data)
        return state;
      const dataById = state.get('dataById').set(action.id, data.set('name', action.name));
      return state.merge( Map({
        dataById: dataById,
        editId: 0
      }));

    default:
      return state;
  }
}

export default categoriesReducer