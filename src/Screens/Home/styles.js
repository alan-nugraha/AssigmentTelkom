import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerMenu: {
    padding: '5%',
  },
  menu: {
    backgroundColor: '#0081a0',
    padding: '3%',
    borderRadius: 15,
    flexDirection: 'row',
  },
  leftMenuContainer: {
    backgroundColor: '#b7dce5',
    borderRadius: 10,
    padding: '3%',
  },
  infoBalance: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoHistory: {
    fontSize: 13,
    marginTop: 5,
    color: '#3e916f',
  },
  rightMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'center',
  },
  textChooseService: {
    color: 'white',
  },
  containerContent: {
    marginTop: 15,
    marginBottom: 20,
  },
  titleContent: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomMenu: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    padding: '3%',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  containerServiceBottom: {
    alignItems: 'center',
  },
  containerIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleMenuService: {
    color: '#848484',
  },
});
