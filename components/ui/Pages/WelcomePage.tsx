import { View, Image } from "react-native"
import { FiboButton } from "../Buttons/buttons"
import { router } from "expo-router"

export function WelcomePage () {
  const img = require('@/assets/images/adaptive-icon.png')
  const width = 250
  const content = {
    btn1: 'Hello',
    btn2: 'login'
  }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {/*<LoginForm
        //here just incase we want to use a regular login option
        onSubmit={(email, password) => {
            }}
            />/**/}
      <View>
        {<Image source={img} style={{width: 300, height: 300, marginBottom: 100, padding: 'auto'}}/>/**/}
      </View>
      <FiboButton
        Color='#fff'
        BorderRadius={10}
        Width={width}
        Content={content.btn1}
      />
      <FiboButton
        Color='#0ff'
        BorderRadius={10}
        Width={width}
        Content={content.btn2}
        funcPress={()=> {router.push('./authentication/login')}} 
      />
    </View>
  )
}