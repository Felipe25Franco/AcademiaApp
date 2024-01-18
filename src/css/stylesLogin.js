import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 810,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
  },

  appName: {  
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
  },

  container: {
    width: 335,
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    opacity: 0.7,
    padding: 15,
    marginBottom: 100,
  },
 
  overlay: {
    backgroundColor: 'rgba(211, 255, 255, 0.7)',
    padding: 20,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  label: {

    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  input: {
    width: 230,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 25,
  },

  button: {
    flex: 1, // Isso fará com que os botões ocupem o mesmo espaço horizontalmente
    height: '45%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5, // Espaço horizontal entre os botões
  },

  buttonText: {
    color: 'white', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
    
  },

});

export default styles;