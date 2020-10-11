import React from 'react';
import {Text, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import actions from '../../actionTypes';

const Home = () => {
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch({type: actions.SIGNOUT_USER});
  };

  return (
    <View>
      <Text>Welcome to Hidden Leaf</Text>
      <Button title="signout" onPress={handlelogout} />
    </View>
  );
};

export default Home;
