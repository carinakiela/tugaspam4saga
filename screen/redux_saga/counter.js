import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {connect} from 'react-redux';

class Counter extends React.Component{
    render(){
        return (
            <View style={ styles.card }>
                <TouchableOpacity onPress={ () => this.props.tambahData() }>
                  <Text style = { styles.search }>
                    Tambah
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this.props.hapusData() }>
                  <Text style = { styles.search }>
                    Hapus
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this.props.ubahData() }>
                  <Text style = { styles.search }>
                    Edit
                  </Text>
                </TouchableOpacity>
            </View>
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
  search: {
    color : '#000',
    width: 50,
    margin : 10,
    padding: 3,
    backgroundColor: "#FFF",
    fontSize: 12,
    borderRadius: 3,
    textAlign: "center",
    fontweight : "Bold"
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    margin: "auto",
    padding:5,
  },
});