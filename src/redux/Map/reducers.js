import {LOCATION} from '../../constants';
import {
  SEARCH_MAP,
  SET_MAP_TYPE,
  SET_MARKER,
  SET_REGION,
  SET_SEARCH_INPUT,
  SET_SELECTED_DESTINATION,
  SET_SELECTED_PICKUP,
} from './constants';

const initialState = {
  region: LOCATION.INITIAL_REGION,
  marker: LOCATION.INITIAL_MARKER,
  resultSearchMap: [],
  selectedPickup: null,
  selectedDestination: null,
  searchInput: {
    pickup: '',
    destination: '',
  },
  mapType: 'normal',
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGION:
      return {
        ...state,
        region: action.payload.region,
      };
    case SET_MARKER:
      return {
        ...state,
        marker: action.payload.marker,
      };
    case SEARCH_MAP:
      return {
        ...state,
        resultSearchMap: action.payload.resultSearchMap,
      };
    case SET_SELECTED_PICKUP:
      return {
        ...state,
        selectedPickup: action.payload.selectedPickup,
      };
    case SET_SELECTED_DESTINATION:
      return {
        ...state,
        selectedDestination: action.payload.selectedDestination,
      };
    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload.searchInput,
      };
    case SET_MAP_TYPE:
      return {
        ...state,
        mapType: action.payload.mapType,
      };
    default:
      return state;
  }
};

export default mapReducer;
