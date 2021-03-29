import React, { useState } from 'react';
import { ListItem } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Button from './Button';


export default function ListCustom({ id, nomeUser }) {

    return (
        <ListItem key={id} bottomDivider>
            <ListItem.Content style={styles.item}>

                <ListItem.Title style={{ maxWidth: 100 }}>
                    {nomeUser}
                </ListItem.Title>

                <View style={{ flexDirection: 'row' }}>
                    <Button onPress='update' id={id}
                     name={nomeUser}>Update User</Button>
                     <Button onPress='delete' id={id}
                     name={nomeUser}>Delete User</Button>
                </View>

            </ListItem.Content>
        </ListItem>
    )
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        marginVertical: 5,
        backgroundColor: '#fff',
        marginLeft: 5
    }
})