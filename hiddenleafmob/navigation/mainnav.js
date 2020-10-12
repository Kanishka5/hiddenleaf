import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// containers
import Home from '../containers/Home/home';
import Login from '../containers/Login/login';
import Register from '../containers/Register/register';
import Dashboard from '../containers/Dashboard/dashboard';
import Delivery from '../containers/Delivery/delivery';
import NewOrder from '../containers/NewOrder/neworder';
import Currorder from '../containers/OrderDtl/orderdtl';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNav = () => {
  const {isLoggedIn} = useSelector((state) => state.user);
  const {isLoading} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // fetch token from local storage & authenticate
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

  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={Currorder} />
      </Stack.Navigator>
    );
  };

  // wait while token is fetched
  if (isLoading === true)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  else {
    return (
      <NavigationContainer>
        {isLoggedIn === false ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Register} />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Deliveries" component={Delivery} />
            <Tab.Screen name="+" component={NewOrder} />
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Profile" component={Dashboard} />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    );
  }
};

export default MainNav;
