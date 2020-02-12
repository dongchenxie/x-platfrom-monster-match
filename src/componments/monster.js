import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'

const resource={
    1:{
        1:require(`../assets/MonsterMatch/monster1_head.png`),
        2:require(`../assets/MonsterMatch/monster1_body.png`),
        3:require(`../assets/MonsterMatch/monster1_feet.png`),
    },
    2:{
        1:require(`../assets/MonsterMatch/monster2_head.png`),
        2:require(`../assets/MonsterMatch/monster2_body.png`),
        3:require(`../assets/MonsterMatch/monster2_feet.png`),
    },
    3:{
        1:require(`../assets/MonsterMatch/monster3_head.png`),
        2:require(`../assets/MonsterMatch/monster3_body.png`),
        3:require(`../assets/MonsterMatch/monster3_feet.png`),
    }
}
const arr= [require(`../assets/MonsterMatch/monster3_head.png`),`../assets/MonsterMatch/monster3_body.png`,`../assets/MonsterMatch/monster3_feet.png`]
const Monster = (props) => {  
    var url=resource[1]["head"]
    return (<View><Image style={styles.image} source={resource[props.part][props.position]}/></View>)
}
const styles =StyleSheet.create(
    {
        image:{
            width:300,
            height:200

        }
    })

export default Monster