import {SET_MODAL_VISIBLE, SET_SEARCH_TYPE} from './constants';

export const setSearchType = type => ({
  type: SET_SEARCH_TYPE,
  payload: {type},
});

export const setModalVisible = modalVisible => ({
  type: SET_MODAL_VISIBLE,
  payload: {modalVisible},
});
