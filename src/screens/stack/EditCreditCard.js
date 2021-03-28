import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import _Text from '../../components/Text';
import normzer from '../../utils/normalizer';
import _CreditCard from '../../components/_CreditCard';
import CCInput from '../../components/credit-card-input/CCInput';
import { _lightGreen, blue } from '../../styles/color';
import _CreditCardInput from '../../components/CreditCardInput';
import ModalSelector from 'react-native-modal-selector';
import * as Color from '../../styles/color';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import _ButtonLarge from '../../components/ButtonLarge';
import _CartNavBar from '../../components/CartNavBar';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import {
  AddCreditCardAction,
  EditCreditCardAction,
} from '../../redux/creditCardList/actions';
import { v4 as uuidv4 } from 'uuid';
import { _screenTheme } from '../../styles/themes';

const EditCreditCard = ({ ...props }) => {
  const navigation = useNavigation();
  const { route } = props;
  let { creditCardID } = route.params;
  const bgc = _screenTheme.EditCreditCard.theme;
  const openDrawer = () => {
    navigation.openDrawer();
  };
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { creditCardList } = stated;
  //
  function theCreditCard() {
    let arr = creditCardList.filter((card) => card.id === creditCardID);
    return arr[0];
  }
  //
  const [state, setState] = useState({
    name: theCreditCard().name,
    type: { name: theCreditCard().type.name, slug: theCreditCard().type.slug },
    expiration: theCreditCard().expiration,
    ccv: theCreditCard().ccv,
    number: theCreditCard().number,
  });
  const [flipp, setFlipp] = useState({ flipped: false });
  const onChangeText = (type, value) => {
    if (value && value.length > 0) {
      setState({ ...state, [type]: value });
    }
  };
  const onFlipped = (type) => {
    type === 'ccv'
      ? setFlipp({ ...flipp, flipped: !flipp.flipped })
      : setFlipp({ ...flipp, flipped: false });
  };

  const onEditCard = () => {
    navigation.goBack();
    dispatch(EditCreditCardAction(creditCardList, creditCardID, { ...state }));
  };

  const cardTypes = [
    { name: 'VERVE', slug: 'verve' },
    { name: 'MASTERCARD', slug: 'mastercard' },
    { name: 'VISA', slug: 'visa' },
    { name: 'AMERICAN EXPRESS', slug: 'amex' },
    { name: 'PAYPAL', slug: 'paypal' },
    { name: 'DISCOVER', slug: 'discover' },
  ];
  return (
    <>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <View style={{ paddingVertical: 10 }}>
        <_CartNavBar
          leftIconName={'chevron-thin-left'}
          leftIconType={'entypo'}
          screenTitle={'EDIT CREDIT CARD'}
          backgroundColor={bgc}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginHorizontal: 20,
          marginVertical: 15,
        }}
      >
        <_CreditCard
          cardType={state.type.slug ?? 'mastercard'}
          name={state.name ?? 'OYEbODE YUsUF'}
          expiration={state.expiration ?? '1221'}
          number={state.number ?? '5300723987435750'}
          cvc={state.ccv ?? '123'}
          flipped={flipp.flipped}
          width={'100%'}
          height={normzer(200)}
          fontSize={22}
        />
        <ScrollView
          style={{ marginTop: 10 }}
          scrollEnabled={true}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          keyboardShouldPersistTaps={true}
        >
          <View style={{ flex: 1, marginVertical: 20 }}>
            <_CreditCardInput
              label={'CARD NAME'}
              type={'name'}
              onChangeText={onChangeText}
              onFlipped={onFlipped}
            />
            <_CreditCardInput
              label={'CARD NUMBER'}
              type={'number'}
              onChangeText={onChangeText}
              onFlipped={onFlipped}
            />
            <_CreditCardInput
              label={'CARD EXPIRY DATE'}
              type={'expiration'}
              onChangeText={onChangeText}
              onFlipped={onFlipped}
            />
            <_CreditCardInput
              label={'CARD CCV NUMBER'}
              type={'ccv'}
              onChangeText={onChangeText}
              onFlipped={onFlipped}
            />
            {/*<_CreditCardInput*/}
            {/*  label={'CARD TYPE'}*/}
            {/*  type={'type'}*/}
            {/*  onChangeText={onChangeText}*/}
            {/*  onFlipped={onFlipped}*/}
            {/*/>*/}
            <View
              style={{ alignItems: 'center' }}
              onTouchStart={() => onFlipped('type')}
            >
              <ModalSelector
                data={cardTypes}
                // keyExtractor= {item => item.id}
                labelExtractor={(item) => item.name}
                componentExtractor={(item) => (
                  <_Text
                    text={item.name}
                    color={'#000'}
                    fontSize={20}
                    styles={{
                      paddingVertical: 10,
                      backgroundColor:
                        state.type.name === item.name ? Color.blue100 : '#fff',
                    }}
                  />
                )}
                initValue={'itemColor'}
                supportedOrientations={['landscape']}
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={(option) => {
                  setState({ ...state, type: option });
                  console.log(state);
                }}
                optionTextStyle={{ color: bgc, fontSize: normzer(25) }}
                selectedItemTextStyle={{ backgroundColor: Color._lightGreen }}
                cancelText={'CANCEL'}
                cancelTextStyle={{ color: Color.red600 }}
                cancelContainerStyle={{ marginTop: 20 }}
                childrenContainerStyle={{
                  backgroundColor: 'transparent',
                  padding: 0,
                }}
                optionContainerStyle={{ backgroundColor: '#fff' }}
                // style={{ alignContent: 'flex-end' }}
              >
                <_CreditCardInput
                  label={'CARD TYPE'}
                  type={'type'}
                  onChangeText={onChangeText}
                  onFlipped={onFlipped}
                  // editable={false}
                  placeholder={`${'Verve, Visa, Mastercard ...'}`}
                  cardType={`${state.type.name ?? ' '}`}
                />
              </ModalSelector>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          // marginHorizontal: 20,
          paddingTop: 10,
          padding: 20,
          paddingBottom: 10,
          // position: 'absolute',
          // bottom: 0,
          // left: 0,
          // right: 0,
          // width: responsiveWidth(100),
          backgroundColor: '#eee',
        }}
      >
        <_ButtonLarge
          text={'ADD CARD'}
          bodyStyle={{
            backgroundColor: _lightGreen,
            width: responsiveWidth(40),
            marginRight: 20,
          }}
          onPress={onEditCard}
          // onPress={() => console.log(creditCardList)}
          // disabled={onRequireInput()}
        />
        <_ButtonLarge
          text={'CANCEL'}
          bodyStyle={{
            backgroundColor: '#aaa',
            width: responsiveWidth(40),
            marginLeft: 20,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </>
  );
};

export default EditCreditCard;

const styles = StyleSheet.create({});

const _Alert = () => {
  return new Alert(alert('Hey! All Input fields are required'));
};
