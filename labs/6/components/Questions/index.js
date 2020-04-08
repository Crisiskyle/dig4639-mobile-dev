import React from "react";
import {View, Text, Button} from "react-native";

class Question extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.state = props.state;
        this.state.question = 0;
        this.state.correct = 0;
        console.log(this.state.questions.length);
    }
    addQuestion() {
        console.log('AFTER THIS_____________________');
        console.log(this)
        this.setState({question: this.state.question + 1})
        return true;
    }
    correctChoice() {
        this.setState({correct: this.state.correct + 1})
        this.addQuestion()
    }
    render() {
        if (this.state.question === 0) {
    

            return(
                <>
                    <View>
                        <Text style={this.state.styles.title}>Quiz!</Text>
                    </View>
                    <Button
                        onPress={this.addQuestion.bind(this)}
                        title="Ready to take this Survey Quiz?"
                        color="#6a0dad"
                        />

                </>
            );
        } else if (this.state.question > this.state.questions.length) {
         

            return(
                <>
                    <View>
                        <Text style={this.state.styles.title}>Here are your results.</Text>
                    </View>
                    <View>
                        <Text style={this.state.styles.title}>{(this.state.correct / this.state.questions.length) * 100}%</Text>
                    </View>
                    <View>
                        <Text>You have gotten {this.state.correct} out of {this.state.questions.length} correct.</Text>
                    </View>
                </>
            );
        } else {
           

            return(
                <>

<View>
                        <Text style={this.state.styles.question}>{this.state.questions[this.state.question - 1].question}</Text>
                    </View>


                  <View>
                        <Button
                            onPress={this.addQuestion.bind(this)}
                            title={this.state.questions[this.state.question - 1].wrongChoice}
                            accessibilityLabel="Choose"
                            style={this.state.styles.answer}
                            />
                    </View>
                   
                    <View>
                        <Button
                            onPress={this.correctChoice.bind(this)}
                            title={this.state.questions[this.state.question - 1].correctChoice}
                            accessibilityLabel="Choose"
                            style={this.state.styles.answer}
                            />
                    </View>
                  
                </>
            );
        }
        
    }
}

export default Question;