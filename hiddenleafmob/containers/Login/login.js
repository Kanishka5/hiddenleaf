import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, Button} from 'react-native';
import actions from '../../actionTypes';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const handlesubmit = () => {
    dispatch({
      type: actions.SIGNIN_USER,
      token: '55555',
    });
  };

  return (
    <View>
      <Text>Welcome to Hidden Leaf Login</Text>
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
