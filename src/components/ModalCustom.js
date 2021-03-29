import React, {useState} from 'react';
import { View, Modal, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default function ModalCustom() {

  const [modalVisible, setModalVisible] = useState(true);
  // console.log(modalVisible)

    

};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 30
    },
    modalView: {
      // justifyContent: 'space-between',
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 100,
      borderRadius: 30,
      backgroundColor: '#6BA5F2',
      marginHorizontal: 20
    }
  });