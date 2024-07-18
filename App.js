import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './pages/Index';
import Question from './pages/Question';

const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Index' component={Index} options={{title:"index"}}/>
          <Stack.Screen name='Question' component={Question} options={{headerShown:true,title:"QUIZPLAY"}}/>
                

        </Stack.Navigator>
        </NavigationContainer>
      
      </>
  );
}
export default App;