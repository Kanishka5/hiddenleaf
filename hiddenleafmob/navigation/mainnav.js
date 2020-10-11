import React, {useEffect} from 'react';
import {AsyncStorage, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/Home/home';
import Login from '../containers/Login/login';
import Register from '../containers/Register/register';

const Stack = createStackNavigator();

const MainNav = () => {
  const {isLoggedIn} = useSelector((state) => state.user);
  const {isLoading} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = '';
      try {
        userToken = await AsyncStorage.getItem('siginToken');
        console.log('local storage fetched token: ' + userToken);
      } catch (e) {
        userToken = '';
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);

  if (isLoading === true)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn === false ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Register} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default MainNav;
