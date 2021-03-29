import React, { useState } from 'react';
import {
    Text, TouchableOpacity, StyleSheet, View,
    Modal, TouchableHighlight
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { DeleteUser } from '../service/UserService';

export default function Button({ onPress, children, id, name }) {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    function OnPressSwitch() {
        if (onPress === 'adicionar') {
            navigation.navigate('Add');
        } else if (onPress === 'update') {
            navigation.navigate('Edit', { id, name });
        } else {
            setModalVisible(true);
            const response = DeleteUser(id);
            if(response){
                setModalVisible(false);
            }else{
                alert('Erro ao tentar deletar');
            }
            setModalVisible(false)
        }
    }

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={OnPressSwitch}>
                <Text> {children} </Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Tem certeza que deseja deletar ?</Text>

                        <View
                            style={{
                                flexDirection: 'row', justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            <TouchableHighlight
                                style={styles.buttonModal}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.textStyle}>Não</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={styles.buttonModal}
                                onPress={OnPressSwitch}>
                                <Text style={styles.textStyle}>Sim</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
};

const styles = StyleSheet.create({
    button: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        marginVertical: 5,
        backgroundColor: '#fff',
        marginLeft: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
      },
      modalView: {
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
      buttonModal: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 100,
        borderRadius: 30,
        backgroundColor: '#6BA5F2',
        marginHorizontal: 20
      }
})