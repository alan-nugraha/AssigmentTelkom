import {SET_MODAL_VISIBLE, SET_SEARCH_TYPE} from './constants';

const initialState = {
  type: 'destination',
  modalVisible: true,
};

const searchTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TYPE:
      return {
        ...state,
        type: action.payload.type,
      };
    case SET_MODAL_VISIBLE:
      return {
        ...state,
        modalVisible: action.payload.modalVisible,
      };
    default:
      return state;
  }
};

export default searchTypeReducer;
