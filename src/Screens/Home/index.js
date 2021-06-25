import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.leftMenuContainer}>
            <Text style={styles.infoBalance}>Rp361</Text>
            <Text style={styles.infoHistory}>Klik & cek riwayat</Text>
          </TouchableOpacity>
          <View style={styles.rightMenuContainer}>
            <Text style={styles.textChooseService}>Bayar</Text>
            <Text style={styles.textChooseService}>Top up</Text>
            <Text style={styles.textChooseService}>Eksplor</Text>
          </View>
        </View>
        <View style={styles.containerContent}>
          <Text style={styles.titleContent}>Konten buat Kamu</Text>
        </View>
        <View style={styles.bottomMenu}>
          <TouchableOpacity
            style={styles.containerServiceBottom}
            onPress={() => props.navigation.navigate('Maps')}>
            <View style={{...styles.containerIcon, backgroundColor: '#01ad12'}}>
              <Icon name="motorbike" size={30} color={'white'} />
            </View>
            <Text style={styles.titleMenuService}>GoRide</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerServiceBottom}>
            <View style={{...styles.containerIcon, backgroundColor: '#01ad12'}}>
              <Icon name="car" size={30} color={'white'} />
            </View>
            <Text style={styles.titleMenuService}>GoCar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerServiceBottom}>
            <View style={{...styles.containerIcon, backgroundColor: '#e52a39'}}>
              <Icon name="food" size={30} color={'white'} />
            </View>
            <Text style={styles.titleMenuService}>GoFood</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerServiceBottom}>
            <View style={{...styles.containerIcon, backgroundColor: '#e52a39'}}>
              <Icon name="cart-outline" size={30} color={'white'} />
            </View>
            <Text style={styles.titleMenuService}>GoMart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;
