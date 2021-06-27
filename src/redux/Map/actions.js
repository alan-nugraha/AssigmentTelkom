import {
  SEARCH_MAP,
  SET_MAP_TYPE,
  SET_MARKER,
  SET_REGION,
  SET_SEARCH_INPUT,
  SET_SELECTED_DESTINATION,
  SET_SELECTED_PICKUP,
} from './constants';

export const setRegion = region => ({
  type: SET_REGION,
  payload: {region},
});

export const setMarker = marker => ({
  type: SET_MARKER,
  payload: {marker},
});

export const searchMap = resultSearchMap => ({
  type: SEARCH_MAP,
  payload: {resultSearchMap},
});

export const setSelectedPickup = selectedPickup => ({
  type: SET_SELECTED_PICKUP,
  payload: {selectedPickup},
});

export const setSelectedDestination = selectedDestination => ({
  type: SET_SELECTED_DESTINATION,
  payload: {selectedDestination},
});

export const setSearchInput = searchInput => ({
  type: SET_SEARCH_INPUT,
  payload: {searchInput},
});

export const setMapType = mapType => ({
  type: SET_MAP_TYPE,
  payload: {mapType},
});
