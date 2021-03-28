import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import _Text from './Text';
import { Icon } from 'native-base';
import { _lightGreen } from '../styles/color';
import normzer from '../utils/normalizer';
import * as COLORS from '../styles/color';
import { DeleteAddressAction } from '../redux/addressList/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';

const _Address = ({
  id,
  isDefault = false,
  isSelected = false,
  mainRoadName,
  fullAddress,
  town,
  state,
  mobileNumber,
  editable = false,
  cashOnDelivery = false,
}) => {
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { addressList } = stated;
  const navigation = useNavigation();
  //
  const [data, setData] = useState({ isSelected: '' });
  const onDelete = () => {
    dispatch(DeleteAddressAction(addressList, id));
  };
  const onEdit = () => {
    navigation.navigate('EditAddress', { addressID: id });
  };
  return (
    <View
      style={{
        // position: 'relative',
        // height: 300,
        marginHorizontal: RFValue(20),
        marginVertical: RFValue(10),
        backgroundColor: '#bbb',
      }}
    >
      <View
        style={{
          // position: 'absolute',
          // height: 700,
          paddingVertical: RFValue(10),
          paddingHorizontal: RFValue(10),
          marginHorizontal: RFValue(10),
          backgroundColor: '#eeef',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: RFValue(10),
          }}
        >
          <_Text
            text={` ${mainRoadName}  ${isDefault ? '(Default)' : ''}`}
            color={'#000'}
            fontSize={15}
          />
          {isSelected === true ? (
            <Icon
              name={'checkcircle'}
              type={'AntDesign'}
              style={{ color: _lightGreen }}
            />
          ) : null}
        </View>
        {/*TODO Check the address select not working correctly, it is selecting multiple addresses*/}
        <View style={{}}>
          <_Text text={`${fullAddress}.`} color={'#000'} fontSize={15} />
          <_Text
            text={`${town}, ${state} State.`}
            color={'#000'}
            fontSize={15}
            styles={{ paddingVertical: RFValue(5) }}
          />
        </View>
        <View
          style={{
            marginTop: RFValue(20),
            marginBottom: !(editable && cashOnDelivery)
              ? RFValue(10)
              : RFValue(5),
          }}
        >
          <_Text text={`${mobileNumber}`} color={'#000'} fontSize={15} />
        </View>
        {cashOnDelivery && (
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
                fontSize: RFValue(10),
                marginRight: RFValue(10),
              }}
            />
            <_Text
              text={`Cash on Deliery Available`}
              color={_lightGreen}
              fontSize={15}
            />
          </View>
        )}
        {editable && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: RFValue(20),
            }}
          >
            <TouchableOpacity
              onPress={onEdit}
              style={{
                paddingHorizontal: RFValue(10),
                paddingVertical: RFValue(10),
              }}
            >
              <_Text
                text={`Edit`}
                color={COLORS.grey600}
                fontSize={15}
                styles={{ textAlign: 'center' }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: RFValue(10),
                paddingVertical: RFValue(10),
              }}
              onPress={onDelete}
            >
              <_Text
                text={`Delete`}
                color={COLORS.red600}
                fontSize={15}
                styles={{ textAlign: 'center' }}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default _Address;

const styles = StyleSheet.create({});
