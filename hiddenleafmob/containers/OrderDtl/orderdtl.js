import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Orderdtl = ({navigation}) => {
  const [boxid, setBoxid] = useState(null);
  const {currorder} = useSelector((state) => state.order);
  const onSuccess = (e) => {
    console.log(e.data);
    setBoxid(e.data);
  };

  return (
    <View>
      <Text>Welcome to Hidden Leaf Curr order</Text>
      <Text style={{marginBottom: 100}}>Orderid: {currorder}</Text>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={2000}
        topContent={<Text>Scan the Order barcode</Text>}
      />
      <Text style={{marginTop: 500}}>
        Scan the delivery box to open the box.
      </Text>
      {boxid ? <Text>Delivery box id: {boxid}</Text> : <></>}
    </View>
  );
};

export default Orderdtl;
