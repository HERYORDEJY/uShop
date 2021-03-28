import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import _Text from './Text';
import { _lightGreen, blue } from '../styles/color';
import normzer from '../utils/normalizer';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

const _AddressInvoice = ({
  totalItemsOrdered = 0,
  orderTotal = 0,
  delivery = 0,
  bodyStyles,
  invoiceData,
  cartTotalPayable,
}) => {
  const [state, setState] = useState({
    coupon: '',
  });
  const navigation = useNavigation();
  const stated = useSelector((state) => state);
  const { cartList } = stated;
  return (
    <View
      style={{
        backgroundColor: '#fff',
        // marginVertical: 80
        marginTop: RFValue(80),
        ...bodyStyles,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: RFValue(20),
          backgroundColor: '#eee',
          marginBottom: RFValue(20),
        }}
      >
        <_Text fontSize={15} color={blue} text={'ORDER SUMMARY'} />

        <_Text
          fontSize={15}
          color={'#999'}
          text={
            cartList.length <= 1
              ? `${cartList.length} ITEM`
              : `${cartList.length} ITEMS`
          }
          textStyled={{
            textAlign: 'right',
            paddingVertical: RFValue(10),
          }}
        />
      </View>
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
        {/*TODO Check the address select not working correctly, it is selecting multiple addresses*/}

        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'baseline' }}
          onPress={() => navigation.navigate('Cart')}
        >
          <_Text fontSize={15} color={'#999'} text={'Order Total (₦)'} />
          <_Text fontSize={15} color={_lightGreen} text={'(View Details)'} />
        </TouchableOpacity>

        <_Text
          fontSize={15}
          color={'#999'}
          text={`${invoiceData.cartTotalPayable}`}
          textStyled={{
            textAlign: 'right',
            paddingVertical: RFValue(10),
          }}
        />
      </View>

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
          text={`${invoiceData.delivery}`}
          textStyled={{
            textAlign: 'right',
            paddingVertical: RFValue(10),
          }}
        />
      </View>
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
          text={`${invoiceData.totalPayable}`}
          textStyled={{
            textAlign: 'right',

            paddingVertical: RFValue(10),
          }}
        />
      </View>
    </View>
  );
};

export default _AddressInvoice;

const styles = StyleSheet.create({});
