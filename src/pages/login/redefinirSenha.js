import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../css/stylesLogin';



export function RedefinirSenha() {
    const [mostrarPrimeiroConteudo, setMostrarPrimeiroConteudo] = useState(true);
    const navigation = useNavigation();
    const handleClickProximo = () => {
        setMostrarPrimeiroConteudo(!mostrarPrimeiroConteudo);
    };
    const handleClickConcluir = () => {
        navigation.navigate('Login');
    };
    return (
        <ImageBackground
            source={require("../../assets/fundo1.jpg")}
            style={styles.image}>
            <View style={styles.container}>
                <View style={styles.overlay}>
                    {mostrarPrimeiroConteudo ? (
                        <View>
                            <Text style={styles.label}>E-mail:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite seu e-mail cadastrado"
                                onChangeText={(text) => setNome(text)}
                            />
                        </View>
                    ) : (
                        <View>
                            <Text style={styles.label}>Coloque o codigo enviado para seu e-mail abaixo:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Codigo"
                            />
                        </View>
                    )}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: 'blue' }]}
                            onPress={mostrarPrimeiroConteudo ? handleClickProximo : handleClickConcluir}>
                            <Text style={styles.buttonText}>
                                {mostrarPrimeiroConteudo ? 'Enviar' : 'Concluir'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}