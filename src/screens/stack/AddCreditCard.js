import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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
import {
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import _ButtonLarge from '../../components/ButtonLarge';
import _CartNavBar from '../../components/CartNavBar';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { AddCreditCardAction } from '../../redux/creditCardList/actions';
import { v4 as uuidv4 } from 'uuid';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Content } from 'native-base';
import { _screenTheme } from '../../styles/themes';
import RNCreditCard from '../../components/RNCreditCard';

import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
// var uniqid = require('uniqid');

const AddCreditCard = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.AddCreditCard.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  // console.log(nanoid());
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { creditCardList } = stated;
  const navigation = useNavigation();
  //
  const [state, setState] = useState({
    name: undefined,
    type: { name: undefined, slug: undefined },
    expiration: undefined,
    ccv: undefined,
    number: undefined,
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
  const requiredInput =
    state.name !== undefined &&
    state.type.name !== undefined &&
    state.expiration !== undefined &&
    state.ccv !== undefined &&
    state.number !== undefined;

  const onAddNewCard = (details) => {
    dispatch(AddCreditCardAction(creditCardList, { ...details }));
    navigation.goBack();
  };

  return (
    // <Container>
    //   <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
    //   <_CartNavBar
    //     leftIconName={'chevron-thin-left'}
    //     leftIconType={'entypo'}
    //     screenTitle={'ADD NEW CARD'}
    //     backgroundColor={bgc}
    //   />
    //   <View
    //     style={{
    //       alignItems: 'center',
    //       marginHorizontal: RFValue(20),
    //       marginVertical: RFValue(10),
    //     }}
    //   >
    //     <_CreditCard
    //       cardType={state.type.slug ?? 'mastercard'}
    //       name={state.name ?? 'OYEbODE YUsUF'}
    //       expiration={state.expiration ?? '1221'}
    //       number={state.number ?? '5300723987435750'}
    //       cvc={state.ccv ?? '123'}
    //       flipped={flipp.flipped}
    //       width={'100%'}
    //       height={RFValue(200)}
    //       fontSize={1 / 5}
    //     />
    //   </View>
    //   <Content
    //     style={{ margin: RFValue(20), marginBottom: RFValue(0) }}
    //     scrollEnabled={true}
    //     horizontal={false}
    //     showsVerticalScrollIndicator={false}
    //     scrollEventThrottle={16}
    //     bounces={false}
    //     keyboardShouldPersistTaps={true}
    //   >
    //     <_CreditCardInput
    //       label={'CARD NAME'}
    //       type={'name'}
    //       onChangeText={onChangeText}
    //       onFlipped={onFlipped}
    //     />
    //     <_CreditCardInput
    //       label={'CARD NUMBER'}
    //       type={'number'}
    //       onChangeText={onChangeText}
    //       onFlipped={onFlipped}
    //     />
    //     <_CreditCardInput
    //       label={'CARD EXPIRY DATE'}
    //       type={'expiration'}
    //       onChangeText={onChangeText}
    //       onFlipped={onFlipped}
    //     />
    //     <_CreditCardInput
    //       label={'CARD CCV NUMBER'}
    //       type={'ccv'}
    //       onChangeText={onChangeText}
    //       onFlipped={onFlipped}
    //     />
    //     <View style={{}} onTouchStart={() => onFlipped('type')}>
    //       <ModalSelector
    //         data={cardTypes}
    //         // keyExtractor= {item => item.id}
    //         labelExtractor={(item) => item.name}
    //         componentExtractor={(item) => (
    //           <_Text
    //             text={item.name}
    //             color={'#000'}
    //             fontSize={20}
    //             styles={{
    //               paddingVertical: RFValue(10),
    //               backgroundColor:
    //                 state.type.name === item.name ? Color.blue100 : '#fff',
    //             }}
    //           />
    //         )}
    //         initValue={'itemColor'}
    //         supportedOrientations={['landscape']}
    //         accessible={true}
    //         scrollViewAccessibilityLabel={'Scrollable options'}
    //         cancelButtonAccessibilityLabel={'Cancel Button'}
    //         onChange={(option) => {
    //           setState({ ...state, type: option });
    //           console.log(state);
    //         }}
    //         optionTextStyle={{ color: bgc, fontSize: RFValue(10) }}
    //         selectedItemTextStyle={{ backgroundColor: Color._lightGreen }}
    //         cancelText={'CANCEL'}
    //         cancelTextStyle={{ color: Color.red600 }}
    //         cancelContainerStyle={{ marginTop: RFValue(10) }}
    //         childrenContainerStyle={{
    //           backgroundColor: 'transparent',
    //           padding: 0,
    //         }}
    //         optionContainerStyle={{ backgroundColor: '#fff' }}
    //         // style={{ alignContent: 'flex-end' }}
    //       >
    //         <_CreditCardInput
    //           label={'CARD TYPE'}
    //           type={'type'}
    //           onChangeText={onChangeText}
    //           onFlipped={onFlipped}
    //           // editable={false}
    //           placeholder={`${'Verve, Visa, Mastercard ...'}`}
    //           cardType={`${state.type.name ?? ' '}`}
    //         />
    //       </ModalSelector>
    //     </View>
    //   </Content>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       marginHorizontal: RFValue(20),
    //       marginVertical: RFValue(10),
    //     }}
    //   >
    //     <TouchableOpacity
    //       style={{
    //         backgroundColor: _lightGreen,
    //         paddingVertical: RFValue(20),
    //         paddingHorizontal: RFValue(10),
    //         width: responsiveScreenWidth(40),
    //         alignItems: 'center',
    //       }}
    //       onPress={onAddNewCard}
    //     >
    //       <_Text text={'ADD CARD'} color={'#fff'} fontSize={15} />
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={{
    //         backgroundColor: '#999',
    //         paddingVertical: RFValue(20),
    //         paddingHorizontal: RFValue(10),
    //         width: responsiveScreenWidth(40),
    //         alignItems: 'center',
    //       }}
    //       // onPress={() => navigation.navigate('Address')}
    //       onPress={() => navigation.goBack()}
    //     >
    //       <_Text text={'CANCEL'} color={'#ddd'} fontSize={15} />
    //     </TouchableOpacity>
    //   </View>
    // </Container>
    <Container>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <_CartNavBar
        leftIconName={'chevron-thin-left'}
        leftIconType={'entypo'}
        screenTitle={'ADD NEW CARD'}
        backgroundColor={bgc}
      />
      <RNCreditCard onSubmitCard={onAddNewCard} />
    </Container>
  );
};

export default AddCreditCard;

const styles = StyleSheet.create({});

const _Alert = () => {
  return new Alert(alert('Hey! All Input fields are required'));
};
