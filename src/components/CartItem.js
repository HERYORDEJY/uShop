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
import ModalSelector from 'react-native-modal-selector';
import { wearColor, wearSize } from '../api/wearsList';
import { blue } from '../styles/color';
import * as Color from '../styles/color';
import { Icon } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';

const _CartItem = ({
  itemID,
  totalItems,
  itemImage,
  itemName,
  itemPrice,
  itemDiscounted,
  itemDiscountPrice,
  itemSizes,
  itemColors,
  itemCartInfo,
  updateItem,
}) => {
  const percentDiscount = itemDiscountPrice
    ? 100 - Math.ceil((itemDiscountPrice * 100) / itemPrice)
    : 0;
  //
  const data = useSelector((state) => state);
  const { cartList, productList } = data;
  //
  //
  const cartInfo = () => {
    return cartList.filter((c) => c.id === itemID);
  };
  //
  const [state, setState] = useState({
    id: itemID,
    size: cartInfo()[0]?.size ?? itemSizes[0].slug,
    color: cartInfo()[0]?.color ?? itemColors[0].name,
    quantity: cartInfo()[0]?.quantity ?? 1,
    price: itemPrice,
    discountPrice: itemDiscountPrice,
    percentDiscount: percentDiscount,
  });

  const [orderData, setOrderData] = useState([
    { id: '', size: '', color: '', quantity: '' },
  ]);

  useEffect(() => {
    setState({
      ...state,
      id: itemID,
      size: cartInfo()[0]?.size ?? itemSizes[0].slug,
      color: cartInfo()[0]?.color ?? itemColors[0].name,
      quantity: cartInfo()[0]?.quantity ?? 1,
      price: itemPrice,
      discountPrice: itemDiscountPrice,
      percentDiscount: percentDiscount,
    });

    // console.log('the item cart info is ....', itemCartInfo, cartList);

    /*    get the id template of
          items in the cartList to
          facilitate placing order
 */
    let cL = [];
    for (let i = 0; i < cartList.length; i++) {
      cL.push({ id: cartList[i] });
      setOrderData([...cL]);
    }
  }, []);

  let orderList = [];
  const orderFunc = (_itemID, _itemDatas) => {
    if (_itemID) {
      let _order = orderData.map((item) =>
        item.id !== _itemID
          ? item
          : { ...item, ..._itemDatas, idd: itemID, cc: 'hjhj' },
      );
      setOrderData([..._order]);
      console.log(orderData);
    }
  };

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
          style={{
            width: '100%',
            height: RFValue(120),
            overflow: 'hidden',
            backgroundColor: 'red',
          }}
          resizeMode={'cover'}
          source={itemImage}
        />
      </View>
      <View
        style={{
          // paddingRight: 20
          flex: 0.8,
        }}
      >
        <_Text text={itemName} color={'#000'} fontSize={20} />
        {itemDiscountPrice ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View>
              <_Text
                text={`₦${itemDiscountPrice}`}
                color={'#999'}
                textStyle={'bold'}
                styles={{ alignSelf: 'center' }}
                fontSize={20}
              />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
              <_Text
                text={`₦${itemPrice} `}
                color={'#d32f2f'}
                styles={{
                  marginLeft: RFValue(10),
                  alignSelf: 'center',
                  textDecorationLine: 'line-through',
                }}
                fontSize={15}
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
              text={`₦${itemPrice}`}
              color={'#999'}
              textStyle={'bold'}
              // styles={{ alignSelf: 'center' }}
              fontSize={20}
            />
          </View>
        )}
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              marginTop: RFValue(10),
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: RFValue(30),
            }}
          >
            <_Text text={'Size: '} color={'#000'} fontSize={15} />
            <View style={{ backgroundColor: '#fff' }}>
              <ModalSelector
                data={itemSizes}
                keyExtractor={(item) => item.id}
                labelExtractor={(item) => item.slug}
                initValue={state.size}
                supportedOrientations={['landscape']}
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={(option) => {
                  setState({ ...state, size: option.slug });
                  updateItem(itemID, { ...state, size: option.slug });
                  orderFunc(itemID, { size: option.slug });
                }}
                optionTextStyle={{ color: blue, fontSize: RFValue(20) }}
                selectedItemTextStyle={{ backgroundColor: Color._lightGreen }}
                cancelText={'CANCEL'}
                cancelTextStyle={{ color: Color.red600 }}
                cancelContainerStyle={{ marginTop: RFValue(10) }}
                childrenContainerStyle={{ backgroundColor: '#fff', padding: 0 }}
                optionContainerStyle={{ backgroundColor: '#fff' }}
                style={{ alignContent: 'flex-end' }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    style={{
                      fontSize: RFValue(20),
                      width: RFValue(30),
                      textAlign: 'center',
                      height: RFValue(20),
                      padding: 0,
                      color: blue,
                      alignSelf: 'baseline',
                      // lineHeight: RFValue(30),
                    }}
                    editable={false}
                    value={state.size}
                  />
                  <Icon
                    name={'chevron-thin-down'}
                    type={'Entypo'}
                    style={{
                      fontSize: RFValue(10),
                      // lineHeight: RFValue(20),
                    }}
                  />
                </View>
              </ModalSelector>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: RFValue(20),
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={{ backgroundColor: '#fff' }}>
            <ModalSelector
              data={itemColors}
              initValue={state.color}
              keyExtractor={(item) => item.id}
              labelExtractor={(item) => item.name}
              componentExtractor={(item) => (
                <TouchableOpacity
                  // key={index}
                  onPress={() => {
                    setState({ ...state, color: item.name.toLowerCase() });
                    orderFunc(itemID, { color: item.name.toLowerCase() });
                  }}
                  style={{
                    borderWidth: 2,
                    padding: RFValue(5),
                    borderColor:
                      state.color === item.name.toLowerCase()
                        ? item.name.toLowerCase()
                        : 'transparent',

                    // width: RFValue(30),
                    height: RFValue(30),
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'row',
                  }}
                >
                  <Icon
                    name={'circle'}
                    type={'FontAwesome'}
                    style={{
                      color: item.name.toLowerCase(),
                      fontSize: RFValue(30),
                      marginRight: RFValue(10),
                    }}
                  />
                  <_Text
                    text={item.name.toUpperCase()}
                    color={item.name.toLowerCase()}
                  />
                </TouchableOpacity>
              )}
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={(option) => {
                orderFunc(itemID, { color: option.name });
                updateItem(itemID, { ...state, color: option.name });
                setState({ ...state, color: option.name });
              }}
              optionTextStyle={{ color: blue, fontSize: RFValue(20) }}
              selectedItemTextStyle={{ backgroundColor: Color._lightGreen }}
              cancelText={'CANCEL'}
              cancelTextStyle={{ color: Color.red600 }}
              cancelContainerStyle={{ marginTop: RFValue(20) }}
              childrenContainerStyle={{ backgroundColor: '#fff', padding: 0 }}
              optionContainerStyle={{ backgroundColor: '#fff' }}
              style={{ alignContent: 'flex-end' }}
            >
              {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}> */}
              <View
                style={{
                  // marginTop: RFValue(20),
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: RFValue(30),
                }}
              >
                <_Text text={'Col: '} color={'#000'} fontSize={15} />
                <TouchableOpacity
                  // key={index}
                  // onPress={() =>
                  // 	setState({ ...state, color: c.name.toLowerCase() })
                  // }
                  style={{
                    backgroundColor: state.color,
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
                      color: state.color,
                      fontSize: RFValue(20),
                    }}
                  />
                </TouchableOpacity>
              </View>
              {/* </View> */}
            </ModalSelector>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <_Text
          text={`Qty: `}
          color={'#000'}
          fontSize={15}
          styles={{
            // padding: 20,
            // borderWidth: 1,
            // borderColor: '#ddd',
            paddingVertical: RFValue(10),
          }}
        />

        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            flexGrow: 0,
            // justifyContent: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: state.quantity <= 0 ? '#eee' : '#bbb',
              padding: 10,
              paddingHorizontal: 15,
              // display: state.quantity < 1 ? 'none' : 'flex',
            }}
            onPress={() => {
              setState({
                ...state,
                quantity: parseInt(state.quantity, 10) - 1,
              });
              updateItem(itemID, {
                ...state,
                quantity: parseInt(state.quantity, 10) - 1,
              });
            }}
            disabled={state.quantity <= 0}
          >
            <Icon
              name={'minus'}
              type={'MaterialCommunityIcons'}
              style={{ fontSize: RFValue(20) }}
            />
          </TouchableOpacity>
          <View>
            <_Text
              text={`${state.quantity}`}
              color={blue}
              fontSize={20}
              styles={{
                // padding: 20,
                // borderWidth: 1,
                // borderColor: '#ddd',
                paddingVertical: RFValue(10),
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#bbb',
              padding: 10,
              paddingHorizontal: 15,
            }}
            onPress={() => {
              setState({
                ...state,
                quantity: parseInt(state.quantity, 10) + 1,
              });
              updateItem(itemID, {
                ...state,
                quantity: parseInt(state.quantity, 10) + 1,
              });
            }}
          >
            <Icon
              name={'plus'}
              type={'MaterialCommunityIcons'}
              style={{ fontSize: RFValue(20) }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default _CartItem;

const styles = StyleSheet.create({
  itemContainer: {
    // flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  imageContainer: {
    // marginRight: index === 0 ? 5 : 0,
    marginRight: 10,

    // width: responsiveWidth(30),
    // height: RFValue(260),
    backgroundColor: '#fff',
    flex: 0.4,
  },
});
