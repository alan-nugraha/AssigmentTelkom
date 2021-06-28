import Axios from 'axios';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import Config from 'react-native-config';
import {useDispatch, useSelector} from 'react-redux';
import {IconInput, View} from '..';
import {searchMap, setSearchInput} from '../../redux/Map/actions';
import {setSearchType} from '../../redux/SearchType/actions';
import {Color} from '../../styles/Color';
import Flex from '../../styles/Flex';
import {useForm} from '../../utils';
import {getAddressLocation} from '../../utils/Locations';

const SearchInput = ({}) => {
  const dispatch = useDispatch();
  const {type} = useSelector(state => state.searchTypeReducer);
  const {marker, selectedDestination, selectedPickup, searchInput} =
    useSelector(state => state.mapReducer);

  useEffect(() => {
    searchLocation();
  }, [searchInput]);

  const searchLocation = () => {
    const inputValue = searchInput[type];

    if (inputValue) {
      Axios.get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${Config.GMAP_API_KEY}&input=${inputValue}&location=${marker?.latitude},${marker?.longitude}&radius=3000`,
      )
        .then(res => {
          dispatch(searchMap(res?.data?.predictions));
        })
        .catch(err => {
          console.log('error map', err);
        });
    }
  };

  const handleFocusInput = typeInput => {
    if (typeInput !== type) {
      dispatch(setSearchType(typeInput));
      if (typeInput === 'pickup') {
        if (!selectedDestination) {
          dispatch(
            setSearchInput({
              ...searchInput,
              [type]: '',
            }),
          );
          dispatch(searchMap([]));
        }
      } else {
        if (!selectedPickup) {
          dispatch(
            setSearchInput({
              ...searchInput,
              [type]: '',
            }),
          );
          dispatch(searchMap([]));
        }
      }
    }
  };

  return (
    <View style={[styles.container, Flex.rowCenter]}>
      <IconInput />
      <View style={styles.rightContainer} marginLeft={8}>
        <TextInput
          selectTextOnFocus
          onChangeText={val =>
            dispatch(
              setSearchInput({
                ...searchInput,
                pickup: val,
              }),
            )
          }
          onFocus={() => handleFocusInput('pickup')}
          placeholder="Lokasi kamu sekarang"
          style={styles.input}
          value={searchInput?.pickup}
        />
        <View style={styles.separator} />
        <TextInput
          selectTextOnFocus
          onChangeText={val =>
            dispatch(
              setSearchInput({
                ...searchInput,
                destination: val,
              }),
            )
          }
          onFocus={() => handleFocusInput('destination')}
          placeholder="Cari lokasi tujuan"
          style={styles.input}
          value={searchInput?.destination}
        />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.GREY,
    backgroundColor: Color.WHITE2,
    padding: 8,
  },
  rightContainer: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: Color.GREY,
    marginVertical: 8,
  },
  input: {
    // borderWidth: 1,
    height: 24,
    padding: 0,
  },
});
