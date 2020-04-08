import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Questions from './components/Questions';



class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#add8e6',
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          fontSize: 25,
          marginBottom: 25,
          color: '#6a0dad'
        },
        question: {
          color: '#6a0dad',
          marginBottom: 25,
          fontSize: 18
        },
        answer: {
          marginBottom: 50,
          color: 'green'
        }
      }),      
      questions: [
        {
          question: 'Which gaming company does Megaman belong to ?',
          answerTrue: 'Capcom',
          answerFalse: 'Ubisoft'
        },
        {
          question: 'What color is Pikachu',
          answerTrue: 'Yellow Duh',
          answerFalse: 'I think Blue?'
        },
        {
          question: 'What does Mario wear?',
          answerTrue: 'a Hat',
          answerFalse: 'A dress'
        },
        {
          question: 'What is NES from',
          answerTrue: 'Earthbound',
          answerFalse: 'Steven Universe'
        },
        {
          question: 'What is Garnet from?',
          answerTrue: 'Steven Universe',
          answerFalse: 'Ok KO!'
        },
        {
          question: 'What Year was Pokémon made?',
          answerTrue: '1998',
          answerFalse: '2001'
        }
      ]
    }
  }
  render() {
    return(
      <View style={this.state.styles.container}>
        <Questions state={this.state} />
      </View>
    );
  }
}

export default Application;