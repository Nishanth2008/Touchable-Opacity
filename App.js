import * as React from 'react';
import { Text, View, Button } from 'react-native';


class SoundButton extends React.Component {
   playSound = async () => {
  }

  render() {
    return (
     <TouchableOpacity>
     <Text> Press Me </Text>
     </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


