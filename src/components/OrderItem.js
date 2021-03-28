import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import normzer from '../utils/normalizer';
import _Text from './Text';
// import ModalSelector from 'react-native-modal-selector';
import { wearColor, wearSize } from '../api/wearsList';
import { blue } from '../styles/color';
// import * as Color from '../styles/color';
import { Icon } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

const _OrderItem = ({
  itemImage,
  itemName,
  itemPrice,
  itemDiscounted,
  itemDiscountPrice,
  itemSize,
  itemColor,
  itemQuantity,
}) => {
  const percentDiscount = itemDiscountPrice
    ? 100 - Math.ceil((itemDiscountPrice * 100) / itemPrice)
    : 0;

  //
  const [state, setState] = useState({
    size: itemSize,
    color: itemColor,
    quantity: itemQuantity,
    percentDiscount: percentDiscount,
  });

  useEffect(() => {
    setState({
      ...state,
      size: itemSize,
      color: itemColor,
      quantity: itemQuantity,
      percentDiscount,
    });
  }, []);

  //
  return (
    <View
      style={{
        ...styles.itemContainer,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        // paddingHorizontal: 20,
        // paddingVertical: 10,
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode={'cover'}
          source={require('../assets/images/product-01.jpg')}
        />
      </View>
      <View
        style={{
          marginRight: RFValue(30),
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
          flexWrap: 'wrap',
        }}
      >
        <View>
          <_Text
            text={itemName}
            color={'#000'}
            fontSize={15}
            textStyle={'bold'}
          />
          {itemDiscountPrice ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View>
                <_Text
                  text={`$${itemDiscountPrice}`}
                  color={'#999'}
                  textStyle={'bold'}
                  styles={{ alignSelf: 'center' }}
                  fontSize={15}
                />
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                <_Text
                  text={`$${itemPrice} `}
                  color={'#d32f2f'}
                  styles={{
                    marginLeft: RFValue(10),
                    alignSelf: 'center',
                    textDecorationLine: 'line-through',
                  }}
                  fontSize={10}
                />
                <_Text
                  text={`(${percentDiscount}% off)`}
                  color={'#d32f2f'}
                  styles={{
                    marginLeft: RFValue(5),
                    alignSelf: 'center',
                  }}
                  fontSize={15}
                />
              </View>
            </View>
          ) : (
            <View>
              <_Text
                text={`$${itemPrice}`}
                color={'#999'}
                textStyle={'bold'}
                // styles={{ alignSelf: 'center' }}
                fontSize={15}
              />
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              marginTop: RFValue(20),
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: RFValue(40),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginRight: 10,
              }}
            >
              <_Text text={'Size: '} color={'#000'} fontSize={15} />
              <_Text
                style={{
                  textAlign: 'center',
                  padding: 0,
                  color: blue,
                  alignSelf: 'baseline',

                  // lineHeight: RFValue(30),
                }}
                fontSize={RFValue(20)}
                color={blue}
                text={`${itemSize}`}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 10,
              }}
            >
              <_Text text={'Col: '} color={'#000'} fontSize={15} />
              <TouchableOpacity
                disabled={true}
                style={{
                  backgroundColor: itemColor,
                  padding: 5,
                  borderRadius: 1000,
                  width: RFValue(20),
                  height: RFValue(20),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Icon
                  name={'circle'}
                  type={'FontAwesome'}
                  style={{
                    color: itemColor,
                    fontSize: RFValue(20),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginRight: 20,
              }}
            >
              <_Text text={'Qty: '} color={'#000'} fontSize={15} />
              <_Text
                style={{
                  textAlign: 'center',
                  padding: 0,
                  color: blue,
                  alignSelf: 'baseline',

                  // lineHeight: RFValue(30),
                }}
                fontSize={RFValue(20)}
                color={blue}
                text={`${itemQuantity}`}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default _OrderItem;

const styles = StyleSheet.create({
  itemContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 0,
  },

  imageContainer: {
    // marginRight: index === 0 ? 5 : 0,
    marginRight: 10,

    // width: responsiveWidth(30),
    // height: RFValue(260),
    backgroundColor: '#fff',
    flex: 0.4,
  },
  imageStyle: {
    width: '100%',
    height: RFValue(100),
    overflow: 'hidden',
    backgroundColor: 'red',
  },
});
