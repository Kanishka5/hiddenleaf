import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import MainNav from './navigation/mainnav';

const App = () => {
  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then((token) => {
        console.log('FCM token: ' + token);
      });

    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }

    // Listen to whether the token changes
    return messaging().onTokenRefresh((token) => {
      console.log('FCM token: ' + token);
    });
  }, []);
  return <MainNav />;
};

export default App;
