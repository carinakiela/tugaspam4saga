import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {connect} from 'react-redux';

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.tujuanasal}>{item.asal}   -   {item.tujuan}</Text>
    <View style={styles.waktupesawat}>
      <MaterialIcons name="flight" size={24} color="#5CA454" />
      <Text style={styles.maskapai}>{item.maskapai}</Text>
      <Text style={styles.texttanggal}>{item.waktu}</Text>
    </View>    
  </View>
);

class Counter extends React.Component{
    render(){
        return (
          <FlatList
            data={this.props.counter}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        );
    }
}

const mapStateToProps = (state) => {
  console.log('State:');
  console.log(state);

  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahData: () => dispatch({
      type: 'TAMBAH',
      value: 1,
    }),
    hapusData: () => dispatch({
      type: 'HAPUS',
      value: 1,
    }),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:10,
  },
  waktupesawat:{
    marginTop: 20,
    marginBottom:10,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  maskapai:{
    marginLeft:-80,
    fontSize:20,
    fontWeight: "bold",
  },
  texttanggal:{
    color:'blue',
  },
});