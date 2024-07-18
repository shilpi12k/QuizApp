import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


const Question = ({ route, navigation }) => {
  // console.log('route',route.params);
  const { type } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const React = [
    {
      question: 'Which of the following is a way to handle data in React.js ? ',
      options: ['State & Props', 'Services & Components', 'State & Services', 'State & Component'],
      answer: 'State & Props'
    },
    {
      question: 'Which of the following valid component return type of React ?',
      options: ['2', '5', '1', '3'],
      answer: '1'
    },
    {
      question: 'What is the default port number in which the application run ?',
      options: ['3000', '8080', '5000', '3030'],
      answer: '3000'
    },
    {
      question: 'In React.js which one of the following is used to create a class for Inheritance ?',
      options: ['Create', 'Inherits', 'Extends', 'Delete'],
      answer: 'Extends'
    },
    {
      question: 'Which of the following command is used to create react-js-app ?',
      options: ['npx create-react-app appname', 'npm install create-react-app', 'npx install create - react - app - g', 'install - l create - react - app'],
      answer: 'npx create-react-app appname'
    }
  ];

  const PHP = [
    {
      question: 'Full form of PHP is______',
      options: ['Hypertext Preprocessor', ' Pretext Hypertext Preprocessor', 'Processor Hypertext Processor', 'None of the Above'],
      answer: 'Hypertext Preprocessor'
    },
    {
      question: 'The default file extension in PHP are ____',
      options: ['.php', '.css', '.js', '.html'],
      answer: '.php'
    },
    {
      question: 'Which of the following is the correct way to declare the constant in PHP?',
      options: ['const', 'define', 'var', 'let'],
      answer: 'define'
    },
    {
      question: 'How does the name of the variable in PHP starts?',
      options: ['Sign !', 'Sign $', 'Sign &', 'Sign #'],
      answer: 'Sign $'
    },
    {
      question: 'Which of the following is the syntax of comment in PHP?',
      options: ['/* */', '#', '//', 'All of the above'],
      answer: 'All of the above'
    },
    {
      question: 'If you want to add write the PHP code which of the below code editor is used',
      options: ['Notepad++', 'Sublime', 'Visual code', 'All of the above'],
      answer: 'All of the above'
    }
  ];

  const html = [
    {
      question: 'What does HTML stands for?',
      options: ['Hypertext Machine language.', 'Hypertext and links markup language.', 'Hypertext Markup Language.', 'Hightext machine language.'],
      answer: 'Hypertext Markup Language.'
    },
    {
      question: 'How is document type initialized in HTML5.?',
      options: ['</DOCTYPE HTML>', '</DOCTYPE>', '<!DOCTYPE HTML>', '</DOCTYPE html>'],
      answer: '<!DOCTYPE HTML>'
    },
    {
      question: 'Which of the following HTML Elements is used for making any text bold ?',
      options: ['<p>', '<i>', '<li>', '<b>'],
      answer: '<b>'
    },
    {
      question: 'Which of the following characters indicate closing of a tag? ',
      options: ['.', '/', '//', '!'],
      answer: '/'
    },
    {
      question: 'Which of the following HTML element is used for creating an unordered list?',
      options: ['<ui>', '<i>', '<em>', '<ul>'],
      answer: '<ul>'
    }
  ]

  const python = [
    {
      question: 'Which of these is not a core data type?',
      options: ['Lists', 'Dictionary', 'Tuples', 'Class'],
      answer: 'Class'
    },
    {
      question: 'What data type is the object below ? L = [1, 23, ‘hello’, 1]',
      options: ['List', 'Dictionary', 'Tuples', 'Array'],
      answer: 'List'
    },
    {
      question: 'Which of the following function convert a string to a float in python?',
      options: ['int(x [,base])', 'long(x [,base] )', 'float(x)', 'str(x)'],
      answer: 'float(x)'
    }
  ]
  const questions = type === 'type1' ? React : type === 'type2' ? PHP : type === 'type3' ? html : python;



  const handleAnswer = (selectedAnswer) => {
    const answer = questions[currentQuestion]?.answer;

    if (answer === selectedAnswer) {
      setScore((prevScore) => prevScore + 4);
      setPlayAnimation(true);
      setTimeout(() => {
        setPlayAnimation(false);
        handleNextQuestion();
      }, 1000);
      setIsPlaying(false); 
    } else {
      handleNextQuestion();
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setIsPlaying(true)
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }
  return (
    <View style={styles.container}>


      <View style={{ margin: 20 }}>


        {showScore ?
          <View >
            <View style={{ alignItems: 'center', marginTop: 50 }}>
              <Text style={{ fontSize: 30, textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>ThankYou for attempting the QUIZ </Text>       
                <Text style={styles.score}>Your Score :  <Text> {score} </Text> </Text>
                <Text style={[styles.score, { marginTop: 10 }]}>Coin Earned :  <Text> {score} </Text> </Text>
              <View>
                <TouchableOpacity onPress={handleRestart} style={{ marginTop: 60, padding: 4, backgroundColor: '#fff', borderRadius: 4 }}>
                  <Text style={{ fontSize: 30 }}>Restart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> :

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#fff' }}>{currentQuestion + 1}</Text>
                <Text style={{ color: '#fff' }}>/ {questions.length}</Text>

              </View>
              <View style={{ borderColor: 'black', backgroundColor: 'black', padding: 5, flexDirection: 'row', borderRadius: 20,position:'absolute',right:9 }}>

                <Image style={{ width: 25, height: 24, marginRight: 2 }} source={require('../assets/img/download.png')} />
                <Text style={{ color: '#fff' }}>{score}</Text>
                
              </View>
              {playAnimation && (
                <LottieView
                  style={{ width: 100, height: 100,alignContent:'center'}}
                  source={require('../assets/animation/Animation - 1721291992242.json')}
                  autoPlay
                  loop={false}
                />
              )}
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 ,position:'absolute',top:30,left:129}}>
              <CountdownCircleTimer
                isPlaying={isPlaying}
                duration={10}
                colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                colorsTime={[10, 6, 3, 0]}
                onComplete={() => {
                  if (currentQuestion + 1 < questions.length) {
                    setCurrentQuestion(currentQuestion + 1);
                    return { shouldRepeat: true };
                  } else {
                    setShowScore(true);
                    return { shouldRepeat: true };
                  }
                }}
                // updateInterval={1}
                size={50}

              >
                {({ remainingTime, color }) => (
                  <Text style={{ color, fontSize: 20 }}>
                    {remainingTime}
                  </Text>
                )}
              </CountdownCircleTimer>
            </View>

            <View style={{ marginTop: 29 ,position:'absolute',top:99}}>
              <Text style={{ color: '#fff',textAlign:'center' }}>{questions[currentQuestion]?.question}</Text>
             
              {questions[currentQuestion]?.options.map((item) => {
                return (
                  <View>
                    <TouchableOpacity onPress={() => { handleAnswer(item) }}>
                      <View style={styles.answer} >
                        <Text style={{ textAlign: 'center', padding: 7, color: '#fff' }}>{item}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )

              })}
            </View>
           

            <View style={{ position: 'absolute', top: 400 }}>
              <TouchableOpacity onPress={() => { handleAnswer() }} >
                <View style={styles.answer}>
                  <Text style={{ padding: 9, textAlign: 'center' }}>Next Question</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

        }
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',

    backgroundColor: '#1A3636'
  },
  answer: {
    borderColor: '#2c4c3b',
    borderWidth: 2,
    margin: 3,
    borderRadius: 10,
    backgroundColor: '#2c4c3b'
  },
  score: {
    color: '#fff',
    marginTop: 30,
    fontSize: 20,
  }
})

export default Question