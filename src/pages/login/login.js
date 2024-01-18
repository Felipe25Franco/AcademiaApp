import React from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../css/stylesLogin';

export function Login({ navigation }) {
    function login() {
        navigation.navigate('Home');
    }
    function registrar() {
        navigation.navigate('Registro');
    }
    function esquecisenha() {
        navigation.navigate('RedefinirSenha');
    }
    return (
        <View >
            <ImageBackground
                source={require("../../assets/fundo1.jpg")}
                style={styles.image}>
                <Text style={styles.appName}>ACTIVA</Text>
                <View style={styles.container}>
                    <View style={styles.overlay}>
                        <Text style={styles.label}>CPF:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu email"
                            type="number"
                        />
                        <Text style={styles.label}>Senha:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua senha"
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: 'blue' }]}
                                onPress={login}
                            >
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: 'green' }]}
                                onPress={registrar}
                            >
                                <Text style={styles.buttonText}>Registrar</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            onPress={esquecisenha}
                        >
                            <Text style={styles.label}>Esqueceu a Senha?</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </ImageBackground>
        </View>
    );
}