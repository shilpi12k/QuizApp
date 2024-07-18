
import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const Index = ({navigation}) => {
    return (

        <View style={{ backgroundColor: '#1A3636',height:'100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginTop: 40 }}>
                <Text style={{ fontSize: 25, color: "yellow",fontWeight:'bold' }}>QUIZPLAY</Text>
               
            </View>

            
            <View>
                <View style={{padding:7,backgroundColor:'#2c4c3b',margin:10,borderRadius:5}}>
                    <Text style={{fontSize:18,color:'#fff',fontWeight:'bold'}}>Join Game</Text>
                    <Text style={{textAlign:'center',padding:15,backgroundColor:'#E2DFD2',margin:15,borderRadius:5}}>Enter Game Code</Text>
                    
                </View>
                <View style={{margin:15}}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Trending Quiz</Text>
                </View>

            <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Question',{type:'type1'})}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 120, height: 120 }} source={require('../assets/img/quiz.png')} />
                        <Text style={{color:'#fff'}}>React</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>navigation.navigate('Question',{type:'type2'})}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 120, height: 120 }} source={require('../assets/img/quiz.png')} />
                    <Text style={{color:'#fff'}}>PHP</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>navigation.navigate('Question',{type:'type3'})}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ width: 120, height: 120 }} source={require('../assets/img/quiz.png')} />
                        <Text style={{color:'#fff'}}>HTML</Text>
                    </View>
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>navigation.navigate('Question',{type:'type4'})}>
                <View style={{ alignItems: 'center' }}>
                    <Image style={{ width: 120, height: 120 }} source={require('../assets/img/quiz.png')} />
                    <Text style={{color:'#fff'}}>Python</Text>
                </View>
                </TouchableOpacity>
            </View>
            </View>
        </View>



    )
}

export default Index