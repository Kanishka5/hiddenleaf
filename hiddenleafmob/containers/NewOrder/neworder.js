import React, {useState} from 'react';
import {View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './style';

const NewOrder = ({navigation}) => {
  const [orderId, setOrderId] = useState(null);
  const onSuccess = (e) => {
    setOrderId(e.data);
    console.log(e.data);
    // navigation.goBack();
  };

  return (
    <View>
      <Text>Add new order.</Text>
      <Text style={styles.heading}>Point to qrcode to scan it</Text>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={2000}
        topContent={<Text>Scan the Orer barcode</Text>}
      />
      {orderId !== null ? (
        <Text style={styles.orders}>Scanned order no. {orderId}</Text>
      ) : (
        <></>
      )}
    </View>
  );
};

export default NewOrder;
