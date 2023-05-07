import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enetredTextInput, setEnteredTextInput] = useState('');
  const [courseGoals, setCoalsGoals] = useState([]);

  /* styba az alapértelmezett ugyan úgy a px */
  /*lehet a színeket röviditedni red stb*/
  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredTextInput(enteredText);
  }
  function addGoalInputHandler() {
    // setCoalsGoals([...courseGoals,enetredTextInput]);
    setCoalsGoals((currentCourseGials) => [...currentCourseGials, enetredTextInput]);
  }

  return (
    <View style={styles.appConatner}>
      <View style={styles.inputContener}>
        <TextInput
          style={styles.textInput}
          placeholder='Your corse goal'
          onChangeText={goalInputHandler}//Az onChangeText beviszi a bevitelei szöveget a fügvénybe
        />
        <Button
          title='Add Goal'
          onPress={addGoalInputHandler} //onClick helyett 
        />
      </View>
      <View style={styles.goalsContainer}> 
      {/* <FlatList alwaysBounceVertical={false}>  */}
      {/* A FlatList csak azt tölti be (így nem terheli a RAM-ot) ami látható nagy szám */}
      <ScrollView>{/*Ettől lesz tekerhető*/} 
        {courseGoals.map((data, index) =>
          <View key={index} style={styles.goalsItem}>
            {/* azért a Viewbe kell tenni mert az IOS nem értelmezi máshogy */}
            <Text style={styles.goalText}  >{index} {data}</Text>
          </View>
        )}
      </ScrollView>
      {/* </FlatList> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appConatner: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  felxDes: {
    flex: 1, /*hány oszlop / sor a kövi sor dönti el*/
    flexDirection: 'row',/* column */
    justifyContent: 'flex-start', /*space-between milyen legyen az elosztás*/
    alignItems: 'flex-start',
  },
  inputContener: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingBottom: 30,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#898989'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#6F6F6F',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
  },
  goalsItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#cc0256',
    color: '#e9e9e9',
    fontWeight: 'bold',
  },
  goalText: { //azért kell külön mert a belöbb osztályok nem látják a felette lévő stylt
    color: 'white',
  }
});
