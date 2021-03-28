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
import {
  AddAddressAction,
  EditAddressAction,
} from '../../redux/addressList/actions';
import { v4 as uuidv4 } from 'uuid';
import { _screenTheme } from '../../styles/themes';

const EditAddress = ({ ...props }) => {
  const { route } = props;
  let { addressID } = route.params;
  const bgc = _screenTheme.EditAddress.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { addressList } = stated;
  //
  function theAddress() {
    let arr = addressList.filter((adrs) => adrs.id === addressID);
    return arr[0];
  }

  //
  const [state, setState] = useState({
    mainRoadName: theAddress().mainRoadName,
    fullAddress: theAddress().fullAddress,
    town: theAddress().town,
    state: theAddress().state,
    mobileNumber: theAddress().mobileNumber,
    isDefault: false,
  });
  useEffect(
    () =>
      setState({
        mainRoadName: theAddress().mainRoadName,
        fullAddress: theAddress().fullAddress,
        town: theAddress().town,
        state: theAddress().state,
        mobileNumber: theAddress().mobileNumber,
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

  const addAddress = () => {
    // if (requiredInput === true) {
    //   setData({ allInput: true });
    navigation.goBack();
    dispatch(EditAddressAction(addressList, addressID, { ...state }));
    // } else {
    //   setData({ allInput: false });
    //   _Aleart();
    // }
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <_Address
        town={state.town}
        mainRoadName={state.mainRoadName}
        state={state.state}
        fullAddress={state.fullAddress}
        mobileNumber={state.mobileNumber}
        isDefault={state.isDefault}
        // editable={false}
      />

      <ScrollView scrollEventThrottle={1} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center', marginVertical: 10 }}>
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
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginVertical: 20,
          position: 'relative',
          bottom: 0,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: _lightGreen,
            paddingVertical: 20,
            paddingHorizontal: 30,
          }}
          onPress={addAddress}
        >
          <_Text text={'UPDATE ADDRESS'} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#999',
            paddingVertical: 20,
            paddingHorizontal: 30,
          }}
          // onPress={() => navigation.navigate('Address')}
          onPress={() => navigation.goBack()}
        >
          <_Text text={'CANCEL'} color={'#ddd'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditAddress;

const styles = StyleSheet.create({});
