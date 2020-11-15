import React from 'react';
import { Text, View,TextInput,StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';
import firebase from 'firebase';

export default class WriteStoryScreens extends React.Component {
  SubmitStory=async()=>{
    var WrittingMessage
    db.collection('book').doc(this.state.scannedBookId).get()
    .then(doc=>{
      var book=doc.data();
      if(book.bookAvailability){
        this.initiateBookIssue();
        WrittingMessage="BooK Issued"
      }
      else{
        this.initiateBookReturn();
        WrittingMessage="Book Return"
      }
    })
    this.setState({WrittingMessage:WrittingMessage})

  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

<TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TextInput
          style={styles.storyinput}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    inputBox: {
      marginTop: 50,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },
    storyInput: {
      marginTop: 50,
      width: '500',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 4,
      outline: 'none',
    },

  });  