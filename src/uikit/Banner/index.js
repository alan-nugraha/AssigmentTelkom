import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const Banner = () => {
  const bannerData = [
    {
      id: 0,
      image: require('../../assets/banner.jpg'),
      title: 'Kecipratan promonya, banyak hematnya',
      content:
        'Nikmati diskon gede-gedean di Tokopedia spesial buat pengguna setia Gojek. Klik buat dapetin promonya sekarang!',
    },
    {
      id: 1,
      image: require('../../assets/banner2.jpg'),
      title: 'Wajib teliti sebelum membeli',
      content:
        'Pernah tergiur sama akun game & streaming online yang dijual dengan harga murah? Klik di sini!',
    },
    {
      id: 2,
      image: require('../../assets/banner3.jpg'),
      title: 'Ambil vouchermu sekarang!',
      content:
        'Nikmati diskon untuk dianter GoRide/Gocar. Klik buat dapetin promonya dan mulai perjalanan aman kamu sekarang!',
    },
  ];

  return (
    <View style={styles.container}>
      {bannerData.map(item => (
        <View style={styles.mainContainer} key={item.id}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.containerContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    marginBottom: 200,
  },
  mainContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  containerContent: {
    padding: '3%',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 15,
  },
  content: {
    fontSize: 13,
  },
});
