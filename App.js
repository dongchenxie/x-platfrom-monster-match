import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView,Button} from 'react-native';
import Monster from './src/componments/monster'

export default function App() {
  const [monstersParts,setmonstersParts] = useState([1,2,3])
  const [message,setMessage] = useState("Press Start Game to Play")
  //num repersents which monster, position repersents with position
  const getRamdom=()=>{
    
    return 1+Math.floor(Math.random()*3)
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text>{message}</Text>
      <Monster position={1} part={monstersParts[0]}/>
      <Monster position={2} part={monstersParts[1]}/>
      <Monster position={3} part={monstersParts[2]}/>
      <Button title="start game" onPress={()=>{
        var tempMonstersParts=[getRamdom(),getRamdom(),getRamdom()]
        
        if(tempMonstersParts[0]==tempMonstersParts[1]&&tempMonstersParts[1]==tempMonstersParts[2]){
          setMessage("You won! The Monster Matched!")
        }else{
          setMessage("This is not a Match!")
        }
        setmonstersParts(tempMonstersParts)
      }}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
