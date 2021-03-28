import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { bgc, blue } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import _ButtonLarge from '../../components/ButtonLarge';
import * as Color from '../../styles/color';
import _Address from '../../components/Address';
import { useNavigation } from '@react-navigation/native';
import _Text from '../../components/Text';
import { useSelector } from 'react-redux';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';

const Address = (props) => {
  const { route } = props;
  const bgc = _screenTheme.Address.theme;
  //
  const navigation = useNavigation();
  //
  let { params } = route;
  //
  const stated = useSelector((state) => state);
  const { addressList } = stated;
  //
  const [state, setState] = useState({
    isSelected: undefined,
    addressData: undefined,
  });
  const onSelectAddress = (id, adrs) => {
    setState({ ...state, isSelected: id, addressData: { ...adrs } });
  };

  const deliveryPay = () => {
    if (state.addressData) {
      if (state.addressData.state === 'Lagos') {
        return 3000;
      } else if (state.addressData.state === 'Kano') {
        return 8000;
      }
      return 1000;
    }
    return 0;
  };

  const totalPayable = () => {
    return params.totalPayable + deliveryPay();
  };
  const orderData = {
    ...params,
    totalPayable: totalPayable(),
    addressData: { ...state.addressData },
    delivery: deliveryPay(),
  };

  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <_CartNavBar
        screenTitle={'ADDRESS'}
        backgroundColor={bgc}
        leftIconName={'chevron-thin-left'}
        leftIconType={'entypo'}
        currentStep={2}
        totalStep={3}
      />
      <View
        style={{
          marginVertical: RFValue(20),
          paddingHorizontal: RFValue(20),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <_Text text={"Your Saved Address'"} color={'#999'} fontSize={15} />
        <TouchableOpacity onPress={() => navigation.navigate('AddAddress')}>
          <_Text text={'Add New Address'} color={bgc} fontSize={15} />
        </TouchableOpacity>
      </View>
      <Content
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        horizontal={false}
      >
        {addressList.map(
          (adrs, index) =>
            adrs.id && (
              <TouchableOpacity onPress={() => onSelectAddress(adrs.id, adrs)}>
                <_Address
                  state={adrs.state}
                  fullAddress={adrs.fullAddress}
                  // selected={}
                  // isDefault={false}
                  mainRoadName={adrs.mainRoadName}
                  mobileNumber={adrs.mobileNumber}
                  town={adrs.town}
                  isSelected={state.isSelected === adrs.id}
                />
              </TouchableOpacity>
            ),
        )}

        {/*<_AddressInvoice*/}
        {/*  invoiceData={orderData}*/}
        {/*  cartTotalPayable={params.cartTotalPayable}*/}
        {/*/>*/}
      </Content>
      <_ButtonLarge
        text={'PLACE ORDER'}
        bodyStyle={{ backgroundColor: bgc }}
        onPress={() => {
          state.isSelected
            ? navigation.navigate('Payment', { ...orderData })
            : _Alert();
        }}
      />
    </Container>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

const _Alert = () => {
  return new Alert(
    alert("Hey!, You haven't selected any address for delivery"),
  );
};
