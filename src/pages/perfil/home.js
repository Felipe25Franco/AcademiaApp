import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../css/perfil/stylesHome';

export function Home() {
    return (
        <ImageBackground
            source={require("../../assets/fundoHome.jpg")}
            style={styles.image}
        >
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image
                        source={require("../../assets/silhuetaMasculina.png")}
                        style={styles.corpoSilhueta}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.labelInfo}>Nome: John Doe</Text>
                        <Text style={styles.labelInfo}>Idade: 27 anos</Text>
                        <Text style={styles.labelInfo}>Sexo: Masculino</Text>
                        <Text style={styles.labelInfo}>Altura: 177 cm</Text>
                        <Text style={styles.labelInfo}>Peso: 80.5 kg</Text>
                        <Text style={styles.labelInfo}>Idade: 30 anos</Text>
                        
                    </View>
                </View>
                <TouchableOpacity style={styles.maisInfoButton}>
                    <Text style={styles.maisInfoButtonText}>Mais Informações</Text>
                </TouchableOpacity>
                <View style={styles.botoesContainer}>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Botão 9</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomSpace}></View>
            <View style={styles.iconButtonContainer}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => console.log('Search button pressed')}
                >
                    <Icon name="search-outline" size={30} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => console.log('Mail button pressed')}
                >
                    <Icon name="mail-outline" size={30} color="#333" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => console.log('Home button pressed')}
                >
                    <Icon name="home-outline" size={30} color="#333" />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}
