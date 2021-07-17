import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container} >
                
                <LinearGradient
                    colors={['yellow', 'orange','red']}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}>
                

                    <Text style = {styles.text}>ReadStory</Text>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 730,
        width: 400,
      },
})