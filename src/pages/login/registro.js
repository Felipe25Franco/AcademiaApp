import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/stylesLogin';


export function Registro() {
    const navigation = useNavigation();
    const handleClickConcluir = () => {
        navigation.navigate('Login');
    };
    return (
        <ImageBackground
            source={require("../../assets/fundo1.jpg")}
            style={styles.image}
        >
            <View style={styles.container}>
                <View style={styles.overlay}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite um Nome de Usuario"
                    />
                    <Text style={styles.label}>e-mail:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite um E-mail"
                    />
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                    />
                    <Text style={styles.label}>Confirmar Senha:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Confirme sua senha"
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'blue' }]}
                            onPress={handleClickConcluir}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
