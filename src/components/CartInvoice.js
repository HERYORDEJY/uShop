import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import _Text from './Text';
import { _lightGreen, blue } from '../styles/color';
import normzer from '../utils/normalizer';
import { RFValue } from 'react-native-responsive-fontsize';

const _CartInvoice = ({
  bigTotal = 0,
  bagDiscount = 0,
  subTotal = 0,
  couponDiscount = 0,
  enterCoupon,
  couponCode,
  delivery = 0,
  totalPayable,
}) => {
  const [state, setState] = useState({
    coupon: '',
    couponDiscount: 0,
  });

  const couponValue = {
    QWERTY: 50,
    AZERTY: 99,
    POIUYT: 234,
    MNBVCX: 53,
    JKLMNO: 94,
  };

  const onCouponCode = (value) => {
    setState({
      ...state,
      coupon: value,
      couponDiscount: couponValue[value] ?? 0,
    });
  };

  return (
    <View style={{ backgroundColor: '#fff', marginTop: RFValue(10) }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: RFValue(20),
          backgroundColor: '#eee',
          marginBottom: RFValue(10),
        }}
      >
        <_Text fontSize={15} color={blue} text={'Apply Coupon'} />
        <TextInput
          placeholder={'Enter Promo Code'}
          placeholderTextColor={'#999'}
          onChangeText={(value) => setState({ ...state, coupon: value })}
          style={{
            color: blue,
            textAlign: 'right',
            // paddingRight: RFValue(5),
            fontSize: RFValue(15),
            flex: 1,
            margin: 0,
            paddingVertical: RFValue(10),
          }}
          value={couponCode}
          maxLength={6}
          onChangeText={(value) => enterCoupon(value)}
          // onEndEditing={e => onCouponCode(e.nativeEvent.text)}
        />
      </View>
      {bigTotal !== 0 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: RFValue(20),
            backgroundColor: '#eee',
            borderBottomWidth: 1,
            borderBottomColor: '#aaa',
          }}
        >
          <_Text fontSize={15} color={'#999'} text={'Big Total (₦)'} />
          <_Text
            fontSize={15}
            color={'#999'}
            text={bigTotal ?? '0'}
            styles={{
              color: '#999',
              textAlign: 'right',
              paddingVertical: RFValue(10),
              fontSize: RFValue(15),
            }}
          />
        </View>
      )}
      {bagDiscount !== 0 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: RFValue(20),
            backgroundColor: '#eee',
            borderBottomWidth: 1,
            borderBottomColor: '#aaa',
          }}
        >
          <_Text fontSize={15} color={'#999'} text={'Bag Discount (₦)'} />
          <_Text
            fontSize={15}
            color={'#999'}
            text={bagDiscount ?? '0'}
            styles={{
              color: '#999',
              textAlign: 'right',
              paddingVertical: RFValue(10),
              fontSize: RFValue(15),
            }}
          />
        </View>
      )}
      {subTotal !== 0 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: RFValue(20),
            backgroundColor: '#eee',
            borderBottomWidth: 1,
            borderBottomColor: '#aaa',
          }}
        >
          <_Text fontSize={15} color={'#999'} text={'Sub Total (₦)'} />
          <_Text
            fontSize={15}
            color={'#999'}
            text={subTotal ?? '0'}
            styles={{
              color: '#999',
              textAlign: 'right',
              paddingVertical: RFValue(10),
              fontSize: RFValue(15),
            }}
          />
        </View>
      )}
      {/* {couponDiscount !== 0 && ( */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: RFValue(20),
          backgroundColor: '#eee',
          borderBottomWidth: 1,
          borderBottomColor: '#aaa',
        }}
      >
        <_Text fontSize={15} color={'#999'} text={'Coupon Discount (₦)'} />
        <_Text
          fontSize={15}
          color={'#999'}
          text={couponDiscount ?? '0'}
          styles={{
            color: '#999',
            textAlign: 'right',
            paddingVertical: RFValue(10),
            fontSize: RFValue(15),
          }}
        />
        {/* <TextInput
          keyboardType={'number-pad'}
          placeholder={`₦{couponDiscount}`}
          value={couponDiscount}
          style={{
            color: '#999',
            textAlign: 'right',
            paddingRight: 5,
            fontSize: RFValue(22),
          }}
          editable={false}
        /> */}
      </View>
      {/* )} */}
      {delivery !== 0 && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: RFValue(20),
            backgroundColor: '#eee',
            borderBottomWidth: 1,
            borderBottomColor: '#aaa',
          }}
        >
          <_Text fontSize={15} color={'#999'} text={'Delivery (₦)'} />
          <_Text
            fontSize={15}
            color={'#999'}
            text={delivery ?? `0`}
            styles={{
              color: '#999',
              textAlign: 'right',
              paddingVertical: RFValue(10),
              fontSize: RFValue(15),
            }}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: RFValue(20),
          backgroundColor: '#eee',
          // borderBottomWidth: 1,
          // borderBottomColor: '#aaa',
        }}
      >
        <_Text fontSize={15} color={'#000'} text={'Total Payable (₦)'} />
        <_Text
          fontSize={15}
          color={'#999'}
          text={totalPayable ?? '0'}
          styles={{
            color: '#999',
            textAlign: 'right',
            paddingVertical: RFValue(10),
            fontSize: RFValue(15),
          }}
        />
      </View>
    </View>
  );
};

export default _CartInvoice;

const styles = StyleSheet.create({});
