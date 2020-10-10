import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, View, Button} from 'react-native';
import actions from '../../actionTypes';

const Login = () => {
  const dispatch = useDispatch();
  const handlesubmit = () => {
    dispatch({
      type: actions.SIGNIN_USER,
    });
  };

  return (
    <View>
      <Text>Welcome to Hidden Leaf Login</Text>
      <Button title="signin" onPress={handlesubmit} />
    </View>
  );
};

export default Login;
