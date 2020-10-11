import React from 'react';
import {Text, View, Button} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to Hidden Leaf Signup</Text>
      <Button
        title="back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Signup;
