import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../actionTypes';
import messaging from '@react-native-firebase/messaging';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order);

  useEffect(() => {
    messaging().onMessage(async (remoteMessage) => {
      console.log(remoteMessage);
    });
  }, []);

  const handlelogout = () => {
    dispatch({type: actions.SIGNOUT_USER});
  };

  return (
    <View>
      <Text>Welcome to Hidden Leaf</Text>
      <Button title="signout" onPress={handlelogout} />
      <Text>Items to be delivered:</Text>
      {orders.orders.map((order, i) => {
        return (
          <Button
            key={i}
            title={order}
            onPress={() => {
              dispatch({
                type: actions.SET_CURRORDER,
                payload: order,
              });
              navigation.navigate('Detail');
            }}
          />
        );
      })}
    </View>
  );
};

export default Home;
