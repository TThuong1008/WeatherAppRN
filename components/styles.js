import { StyleSheet} from 'react-native'

export const stylesInput = StyleSheet.create({
        inputContainer: {
            marginTop: 50,
            position: 'absolute',
            top: 50,
            width: '80%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            flex: 1,
            padding: 10,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            marginBottom: 10,
            backgroundColor: 'white',
        },
        button: {
            marginLeft: 10,
            padding: 10,
            backgroundColor: '#007BFF',
            borderRadius: 100,
        },
});

export const stylesBody = StyleSheet.create({
    weatherContainer: {
        alignItems: 'center',
      },
      city: {
        fontSize: 37,
        fontWeight: 'bold',
      },
      temperature: {
        fontSize: 57,
        fontWeight: 'bold',
      },
      icon: {
        width: 150,
        height: 150,
      },
      description: {
        fontSize: 24,
        fontStyle: 'italic',
        color: 'white'
      },
});

export const stylesApp = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    error: {
        position: 'absolute',
        top: 150,
        color: 'red',
        fontSize: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 5,
      },
  });
  
