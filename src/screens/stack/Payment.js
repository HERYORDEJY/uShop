import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Content } from 'native-base';
import { _lightGreen, blue } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import _Text from '../../components/Text';
import _AddressInvoice from '../../components/AddressInvoice';
import { Icon } from 'native-base';
import normzer from '../../utils/normalizer';
import _ButtonLarge from '../../components/ButtonLarge';
import * as Color from '../../styles/color';
import _CardSwiper from '../../components/CardSwiper';
import { creditCard } from '../../api/userList';
import { useNavigation } from '@react-navigation/native';
import _Address from '../../components/Address';
import ModalMenu from '../../components/ModalMenu';
import _Search from '../../components/Search';
import _ConfirmPayment from '../../components/ConfirmPayment';
import _PaymentSuccessful from '../../components/PaymentSuccessful';
import { v4 as uuidV4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { AddOrderAction } from '../../redux/orderList/action';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';

const Payment = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.Payment.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  const navigation = useNavigation();
  let { params } = route;
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const { creditCardList } = data;
  //
  const orderData = {
    ...params,
  };
  const { addressData } = orderData;
  const { mainRoadName, fullAddress, state, town, mobileNumber } = addressData;
  //
  // const [cardPayment, setCardPayment] = useState({});\
  const [stated, setStated] = useState({
    isModalVisible: false,
    isModalVisible3: false,
    tabBarIndex: 0,
    orderData: { ...orderData },
  });

  function toggleModal() {
    setStated({ ...stated, isModalVisible: !stated.isModalVisible });
  }
  function toggleModal2() {
    setStated({ ...stated, isModalVisible3: !stated.isModalVisible3 });
  }
  function toggleModal3() {
    setStated({ ...stated, isModalVisible: false, isModalVisible3: false });
  }
  function placeOrder() {
    console.log(orderData);
    dispatch(AddOrderAction(orderData));
  }
  //
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <_CartNavBar
        screenTitle={'PAYMENT'}
        backgroundColor={bgc}
        leftIconName={'chevron-thin-left'}
        leftIconType={'entypo'}
        currentStep={3}
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
        <_Text text={'Your Saved Cards'} color={'#999'} fontSize={15} />
        <TouchableOpacity onPress={() => navigation.navigate('AddCreditCard')}>
          <_Text text={'Add New Card'} color={_lightGreen} fontSize={15} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingVertical: 0, paddingTop: 0 }}>
        <_CardSwiper
          contentList={creditCardList}
          showsPaginator={true}
          paginationColor={{
            active: Color.lightGreen700,
            nonActive: Color.lightGreen300,
          }}
        />
      </View>
      <Content
        contentContainerStyle={{ paddingVertical: RFValue(10) }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        horizontal={false}
      >
        <View style={{ paddingBottom: RFValue(20) }}>
          <View style={{ marginVertical: RFValue(20), marginTop: RFValue(5) }}>
            <_AddressInvoice
              bodyStyles={{ marginTop: 0 }}
              invoiceData={orderData}
            />
          </View>
          <View
            style={{
              paddingHorizontal: RFValue(20),
              paddingVertical: RFValue(20),
              backgroundColor: '#eee',
            }}
          >
            <View>
              <_Text text={'DELIVERY DETAIL'} color={'#000'} fontSize={15} />
            </View>
            <View style={{ marginTop: RFValue(20) }}>
              <_Text
                text={mainRoadName}
                color={'#000'}
                fontSize={15}
                textStyled={{ paddingBottom: RFValue(10) }}
              />
              <_Text text={`${fullAddress}.`} color={'#000'} fontSize={15} />
              <_Text
                text={`${town}, ${state}.`}
                color={'#000'}
                fontSize={15}
                styles={{ paddingVertical: RFValue(5) }}
              />
            </View>
            <View style={{ marginTop: RFValue(20) }}>
              <_Text text={`${mobileNumber}`} color={'#000'} fontSize={15} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: RFValue(20),
                alignItems: 'center',
              }}
            >
              <Icon
                name={'circle'}
                type={'FontAwesome'}
                color={_lightGreen}
                style={{
                  color: _lightGreen,
                  fontSize: RFValue(15),
                  marginRight: RFValue(20),
                }}
              />
              <_Text
                text={`Cash on Deliery Available`}
                color={_lightGreen}
                fontSize={15}
              />
            </View>
          </View>
        </View>
      </Content>
      <_ButtonLarge
        text={`PAY ₦${orderData.totalPayable}`}
        bodyStyle={{
          backgroundColor: bgc,
        }}
        onPress={toggleModal}
      />
      <ModalMenu
        visible={stated.isModalVisible}
        toggleModal={toggleModal}
        component={
          <_ConfirmPayment
            toggleModal={toggleModal}
            toggleModal2={toggleModal2}
          />
        }
        backdropColor={'black'}
        backdropOpacity={0.7}
        animationIn={'bounceInLeft'}
        animationOut={'bounceOutRight'}
      />
      <ModalMenu
        visible={stated.isModalVisible3}
        toggleModal={toggleModal3}
        component={
          <_PaymentSuccessful
            toggleModal3={toggleModal3}
            placeOrder={placeOrder}
          />
        }
        backdropColor={'black'}
        backdropOpacity={0.7}
        animationIn={'bounceInLeft'}
        animationOut={'bounceOutRight'}
      />
      {/*<_SearchBtn />*/}
    </Container>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
