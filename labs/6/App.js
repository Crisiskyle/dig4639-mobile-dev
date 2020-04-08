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
          alignItems: '',
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
          fontSize: 25
        },
        answer: {
          marginBottom: 50,
          color: 'green'
        }
      }),      
      questions: [
        {
          question: 'Which gaming company does Megaman belong to ?',
          wrongChoice: 'Ubisoft',
          correctChoice: 'Capcom'
          
        },
        {
          question: 'What color is Pikachu',
          correctChoice: 'Yellow Duh',
          wrongChoice: 'I think Blue?'
        },
        {
          question: 'What does Mario wear?',
          correctChoice: 'a Hat',
          wrongChoice: 'A dress'
        },
        {
          question: 'What is NES from',
          wrongChoice: 'Steven Universe',
          correctChoice: 'Earthbound'
          
        },
        {
          question: 'What is Garnet from?',
          wrongChoice: 'Ok KO!',
          correctChoice: 'Steven Universe',
          
        },
        {
          question: 'What Year was Pokémon made?',
          correctChoice: '1998',
          wrongChoice: '2001'
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