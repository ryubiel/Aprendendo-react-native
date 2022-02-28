import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.bv}>Bem vindo</Text>
      <Text style={styles.primeiro}>Ao meu primeiro programa mobile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAFFD0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bv:{
    color: '#ca3cff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  primeiro: {
    color: '#b4a0e5',
    fontSize: 25,
    fontStyle: 'italic',
    textShadowColor:'#000000',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius: 5,
  }
});
