import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {Color} from '../../styles/Color';
import {goToAddAddressPage} from '../../utils/Locations';
import {Banner, Button} from '../../uikit';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Flex from '../../styles/Flex';

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
            <Button
              label="Bayar"
              iconName="contactless-payment"
              type="menu"
              size={25}
              colorText={Color.WHITE}
            />
            <Button
              label="Top up"
              iconName="format-vertical-align-top"
              type="menu"
              size={25}
              colorText={Color.WHITE}
            />
            <Button
              label="Eksplor"
              iconName="format-align-left"
              type="menu"
              size={25}
              colorText={Color.WHITE}
            />
          </View>
        </View>
        <ScrollView
          style={styles.containerContent}
          showsVerticalScrollIndicator={false}>
          <View style={[Flex.rowCenterBetween, styles.containerHistory]}>
            <Text style={styles.textHistory}>Riwayat Pesanan</Text>
            <View style={{backgroundColor: Color.PRIMARY, borderRadius: 100}}>
              <Icon name="arrow-right" size={25} color={Color.WHITE} />
            </View>
          </View>
          <Text style={styles.titleContent}>Konten buat Kamu</Text>
          <Banner />
        </ScrollView>
      </View>
      <View style={styles.bottomMenu}>
        <Button
          label="GoRide"
          iconName="motorbike"
          color={Color.PRIMARY}
          type="menu"
          size={30}
          colorText={Color.GREY2}
          onPress={() => goToAddAddressPage(props.navigation)}
        />
        <Button
          label="GoCar"
          iconName="car"
          color={Color.PRIMARY}
          type="menu"
          size={30}
          colorText={Color.GREY2}
        />
        <Button
          label="GoFood"
          iconName="food"
          color={Color.RED}
          type="menu"
          size={30}
          colorText={Color.GREY2}
        />
        <Button
          label="GoMart"
          iconName="cart-outline"
          color={Color.RED}
          type="menu"
          size={30}
          colorText={Color.GREY2}
        />
      </View>
    </View>
  );
}

export default Home;
