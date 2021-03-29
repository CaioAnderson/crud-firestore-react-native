import React, { useState } from 'react';
import {
    View, Text, StyleSheet, TextInput,
    TouchableOpacity, ActivityIndicator
} from 'react-native';

import { EditarUser } from '../service/UserService';


export default function EditScreen({ navigation ,route: { params } }) {

    const { id, name } = params;

    const [nome, setNome] = useState(name);
    const [loading, setLoading] = useState(false);

    function Edit(id, nomeUpdate) {
        setLoading(true);
        const response = EditarUser(id, nomeUpdate);

        if (response) {
            setLoading(false);
            navigation.replace('Main')
        } else {
            setLoading(false);
            alert('Falha ao editar usuário')
        }
    }

    return (
        <View style={styles.container}>

            {loading ? (
                <ActivityIndicator size='large' color='#000' />
            ) : (
                <View style={styles.containerForm}>
                    <Text style={styles.textHederInput}>Digite o nome de usuário: </Text>
                    <TextInput
                        style={styles.input}
                        value={nome}
                        onChangeText={setNome}
                    />

                    <TouchableOpacity style={styles.button}
                        onPress={() => Edit(id, nome)}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                </View>
            )}



        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 60
    },
    containerForm: {
        width: '100%',
    },
    textHederInput: {
        fontSize: 14,
        marginBottom: 8,
        marginLeft: 8
    },
    input: {
        textAlign: 'center',
        padding: 24,
        marginBottom: 80,
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 70
    },
    button: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        elevation: 0.5
    }
})