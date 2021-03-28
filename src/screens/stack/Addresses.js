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
import { useSelector, useDispatch } from 'react-redux';
import { DeleteAddressAction } from '../../redux/addressList/actions';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';

const Addresses = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.Addresses.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  const navigation = useNavigation();
  //
  let { params } = route;
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { addressList } = stated;
  //
  const [state, setState] = useState({
    isSelected: undefined,
    addressData: undefined,
  });

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
        screenTitle={'saved addresses'}
        backgroundColor={bgc}
        leftIconName={'chevron-thin-left'}
        leftIconType={'entypo'}
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
              <View key={adrs.id}>
                <_Address
                  id={adrs.id}
                  state={adrs.state}
                  fullAddress={adrs.fullAddress}
                  // selected={}
                  // isDefault={false}
                  mainRoadName={adrs.mainRoadName}
                  mobileNumber={adrs.mobileNumber}
                  town={adrs.town}
                  // isSelected={state.isSelected === adrs.id}
                  editable={true}
                />
              </View>
            ),
        )}

        {/*<_AddressInvoice*/}
        {/*  invoiceData={orderData}*/}
        {/*  cartTotalPayable={params.cartTotalPayable}*/}
        {/*/>*/}
      </Content>
      {/*<View*/}
      {/*  style={{*/}
      {/*    position: 'relative',*/}
      {/*    bottom: 0,*/}
      {/*    left: 0,*/}
      {/*    right: 0,*/}
      {/*    width: '100%',*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <_ButtonLarge*/}
      {/*    text={'PLACE ORDER'}*/}
      {/*    bodyStyle={{ backgroundColor: bgc, margin: 20 }}*/}
      {/*    onPress={() => {*/}
      {/*      state.isSelected*/}
      {/*        ? navigation.navigate('Payment', { ...orderData })*/}
      {/*        : _Alert();*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</View>*/}

      {/*<_SearchBtn />*/}
    </Container>
  );
};

export default Addresses;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

const _Alert = () => {
  return new Alert(
    alert("Hey!, You haven't selected any address for delivery"),
  );
};
