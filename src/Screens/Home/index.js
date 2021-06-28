import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../../styles/Color';
import {goToAddAddressPage} from '../../utils/Locations';
import {Banner} from '../../uikit';

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
        <ScrollView
          style={styles.containerContent}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.titleContent}>Konten buat Kamu</Text>
          <Banner />
        </ScrollView>
      </View>
      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.containerServiceBottom}
          onPress={() => goToAddAddressPage(props.navigation)}>
          <View
            style={{...styles.containerIcon, backgroundColor: Color.PRIMARY}}>
            <Icon name="motorbike" size={30} color={'white'} />
          </View>
          <Text style={styles.titleMenuService}>GoRide</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerServiceBottom}>
          <View
            style={{...styles.containerIcon, backgroundColor: Color.PRIMARY}}>
            <Icon name="car" size={30} color={'white'} />
          </View>
          <Text style={styles.titleMenuService}>GoCar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerServiceBottom}>
          <View style={{...styles.containerIcon, backgroundColor: Color.RED}}>
            <Icon name="food" size={30} color={'white'} />
          </View>
          <Text style={styles.titleMenuService}>GoFood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerServiceBottom}>
          <View style={{...styles.containerIcon, backgroundColor: Color.RED}}>
            <Icon name="cart-outline" size={30} color={'white'} />
          </View>
          <Text style={styles.titleMenuService}>GoMart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home;
