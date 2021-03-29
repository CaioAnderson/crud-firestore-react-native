import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Modal, TouchableHighlight } from 'react-native';

import { db } from '../config/firebase';

import Button from '../components/Button';
import ListCustom from '../components/ListCustom';


export default function Main() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersDB = db.collection('users').onSnapshot(snapshot => (
            setUsers(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))

        return usersDB;

    }, [])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.containerList}>
                <Text style={styles.textHeaderList}>Lista de usuários</Text>
                {users.map(({ id, data: { nome } }) => (
                    <ListCustom key={id} id={id} nomeUser={nome} />
                ))}

            </ScrollView>

            <View style={styles.containerButtons}>
                <Button onPress='adicionar'>Adicionar</Button>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        marginTop: 80
    },
    containerButtons: {
        width: '100%',
        marginBottom: 30,
        marginTop: 30
    },
    textHeaderList: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    },
    containerList: {
        marginTop: 15,
        width: '100%',
    },
})