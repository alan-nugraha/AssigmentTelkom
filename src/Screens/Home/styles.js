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
    position: 'absolute',
    bottom: 0,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  containerServiceBottom: {
    alignItems: 'center',
  },
  titleMenuService: {
    color: '#848484',
  },
  containerHistory: {
    padding: '5%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 20,
  },
  textHistory: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
