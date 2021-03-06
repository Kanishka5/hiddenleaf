import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './style';
import actions from '../../actionTypes';

const NewOrder = ({navigation}) => {
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  const onSuccess = (e) => {
    setOrderId(e.data);
    dispatch({
      type: actions.ADD_ORDER,
      payload: e.data,
    });
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
