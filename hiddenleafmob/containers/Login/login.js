import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Text, View, Button, Keyboard} from 'react-native';
import actions from '../../actionTypes';
import {TextInput} from 'react-native-gesture-handler';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handlesubmit = () => {
    dispatch({
      type: actions.SIGNIN_USER,
      token: '55555',
    });
  };

  return (
    <View>
      <Text style={{marginBottom: 50}}>Welcome to Hidden Leaf Login</Text>
      <Text>Username</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={(text) => setUsername(text)}
        placeholder="Enter your username"
        autoCapitalize="none"
        returnKeyType="next"
        onSubmitEditing={() =>
          this._passwordinput && this._passwordinput.focus()
        }
        value={username}
      />
      <Text>Password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        ref={(ref) => {
          this._passwordinput = ref;
        }}
        placeholder="Enter Password"
        onSubmitEditing={Keyboard.dismiss}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <Button title="signin" onPress={handlesubmit} />
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};

export default Login;
