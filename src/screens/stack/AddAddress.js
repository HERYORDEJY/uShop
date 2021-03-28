import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import _Address from '../../components/Address';
import _AddressInput from '../../components/AddressInput';
import _Text from '../../components/Text';
import { _lightGreen } from '../../styles/color';
import {
  useNavigation,
  useNavigationState,
  useFocusEffect,
} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { AddAddressAction } from '../../redux/addressList/actions';
import { v4 as uuidv4 } from 'uuid';
import nextId from 'react-id-generator';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Content } from 'native-base';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import _NavBar from '../../components/NavBar';
import { _screenTheme } from '../../styles/themes';

const AddAddress = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.AddAddress.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  const [state, setState] = useState({
    mainRoadName: '',
    fullAddress: '',
    town: '',
    state: '',
    mobileNumber: '',
    isDefault: false,
  });
  useEffect(
    () =>
      setState({
        mainRoadName: '',
        fullAddress: '',
        town: '',
        state: '',
        mobileNumber: '',
        isDefault: false,
      }),
    [],
  );
  const [data, setData] = useState({ allInput: false });
  const requiredInput =
    state.mainRoadName.length > 0 &&
    state.fullAddress.length > 0 &&
    state.state.length > 0 &&
    state.mobileNumber.length > 0 &&
    state.town.length > 0;
  const _Aleart = () => {
    new Alert(alert('Hey! All input fields are required'));
  };
  const onChangeText = (type, value) => {
    setState({ ...state, [type]: value.trim() });
  };

  const navigation = useNavigation();
  const routeLength = useNavigationState((state) => state.routes.length);
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { addressList } = stated;

  const addAddress = () => {
    if (requiredInput === true) {
      setData({ allInput: true });
      navigation.goBack();
      dispatch(AddAddressAction(addressList, { id: nextId(), ...state }));
    } else {
      setData({ allInput: false });
      _Aleart();
    }
  };

  return (
    <Container style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <View style={{ backgroundColor: bgc }}>
        <_NavBar
          translucent={true}
          screenTitle={'ADD address'}
          bellValue={11}
          cartValue={9}
          navigation={navigation}
          stackScreen={true}
          settingScreen={true}
        />
      </View>
      <_Address
        town={state.town ? state.town : 'Town / City '}
        mainRoadName={
          state.mainRoadName ? state.mainRoadName : 'Main Road Name'
        }
        state={state.state ? state.state : '___'}
        fullAddress={state.fullAddress ? state.fullAddress : 'Full Address '}
        mobileNumber={state.mobileNumber ? state.mobileNumber : 'Mobile Number'}
        isDefault={state.isDefault}
        editable={false}
      />

      {data.allInput === false && (
        <View style={{ alignItems: 'center' }}>
          <_Text
            text={'***Psssst! All input fields are required'}
            color={'red'}
            fontSize={15}
          />
        </View>
      )}

      <Content scrollEventThrottle={1} showsVerticalScrollIndicator={false}>
        <View style={{ margin: RFValue(20) }}>
          <_AddressInput
            label={'Main Road Name'}
            onChangeText={onChangeText}
            type={'mainRoadName'}
          />
          <_AddressInput
            label={'Full Address'}
            onChangeText={onChangeText}
            type={'fullAddress'}
          />
          <_AddressInput
            label={'Town / City'}
            onChangeText={onChangeText}
            type={'town'}
          />
          <_AddressInput
            label={'State'}
            onChangeText={onChangeText}
            type={'state'}
          />
          <_AddressInput
            label={'Mobile Number'}
            onChangeText={onChangeText}
            type={'mobileNumber'}
          />
        </View>
      </Content>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: RFValue(20),
          marginVertical: RFValue(20),
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: _lightGreen,
            paddingVertical: RFValue(20),
            paddingHorizontal: RFValue(10),
            width: responsiveScreenWidth(40),
            alignItems: 'center',
          }}
          onPress={addAddress}
        >
          <_Text text={'ADD ADDRESS'} color={'#fff'} fontSize={15} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#999',
            paddingVertical: RFValue(20),
            paddingHorizontal: RFValue(10),
            width: responsiveScreenWidth(40),
            alignItems: 'center',
          }}
          // onPress={() => navigation.navigate('Address')}
          onPress={() => navigation.goBack()}
        >
          <_Text text={'CANCEL'} color={'#ddd'} fontSize={15} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default AddAddress;

const styles = StyleSheet.create({});
