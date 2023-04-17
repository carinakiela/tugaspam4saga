import { TouchableOpacity, SafeAreaView, View, StyleSheet, Text } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import Counter from './redux_saga/counter';
import ViewData from './redux_saga/view';
import { store } from './redux_saga/store';

const Penerbangan = ({ navigation }) => {
  return (
    <Provider store={ store }>
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.top}>
            <TouchableOpacity
              style={styles.button}
              onPress={ () => navigation.goBack()}
            >
            <AntDesign name="arrowleft" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.heading}>Hiling.id</Text>
            <FontAwesome5 name="user" size={24} color="white" />
          </View>
          <Text style={styles.heading2}>Hasil Pencarian Penerbangan</Text>
      <Counter />
      </View>
      <SafeAreaView>
        <ViewData />
      </SafeAreaView>
      <Text style={styles.copyright}>Copyright Carin Akiela Amanda-120140009</Text>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E4E2',
  },
  header:{
    width:'100%',
    backgroundColor: '#5CA454',
    padding:20,
    
  },
  heading: {
    color: '#ffff',
    fontSize: 30,
    fontWeight : "bold",
    
  },
  heading2: {
    color: '#ffff',
    textAlign: 'center',
    top : 20,
  },
  top: {
    top : 20,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:10,
  },
  copyright: {
    color : '#797979',
    fontWeight: 'bold',
    marginBottom: 20,
    padding:20,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Penerbangan;
