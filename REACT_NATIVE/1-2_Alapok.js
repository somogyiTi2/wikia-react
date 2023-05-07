import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
/* styba az alapértelmezett ugyan úgy a px */
/*lehet a színeket röviditedni red stb*/
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}> Style</Text>
      <Text style={{borderWidth: 1, borderColor:'red'}}>Hello</Text> 
      <Text style={{margin: 15, borderWidth: 2, borderColor:'#09f', padding: 16 }}>Here is Tibi</Text> 
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor:'rgb(19,99,99)',
  },
  dummyText:{
    margin: 16, borderWidth: 2, borderColor:'blue', padding: 16
  }
});
