import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        marginTop: 30,
    },

    topContainer: {       
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        marginTop: 30,
    },

    corpoSilhueta: {
        top: -30,       
        width: 200,
        height: 400,
        resizeMode: 'contain',
    },

    infoContainer: {
        top: 35,
        left: -40,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        width: 200,
        height: 300,
        marginLeft: 20,
    },

    labelInfo: {
        padding: 7,
        borderBottomWidth: 1.5,
        borderTopColor: 'white',
    },

    maisInfoButton: {
        top: -115,
        left: -105,
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },

    maisInfoButtonText: {
        color: 'white',
        fontSize: 14,
    },

    botoesContainer: {
        top: -50,
        left: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 20,
        borderTopWidth: 1.5,
        borderTopColor: 'white',
        paddingTop: 20,
    },

    botao: {
        width: '30%',
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },

    botaoTexto: {
        color: 'white',
        fontSize: 16,
    },

    bottomSpace: {
        height: 50,
    },

    iconButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderWidth: 1,
        width: '100%',
        backgroundColor: 'white',
    },

    iconButton: {
        padding: 10,
    },
});

export default styles;
