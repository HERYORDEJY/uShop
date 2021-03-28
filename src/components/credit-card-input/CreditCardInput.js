import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactNative, {
  NativeModules,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';

import ModalSelector from 'react-native-modal-selector';
import CreditCard from './CardView';
import CCInput from './CCInput';
import { InjectedProps } from './connectToState';
import normzer from '../../utils/normalizer';
import { blue } from '../../styles/color';
import { wearColor } from '../../api/wearsList';
import * as Color from '../../styles/color';
import { Icon } from 'native-base';
import _Text from '../Text';

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  form: {
    marginTop: 20,
  },
  inputContainer: {
    // marginLeft: 20,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: normzer(20),
    fontFamily: 'Product-Regular',
    color: blue,
  },
  input: {
    height: 40,
    fontSize: normzer(20),
  },
});

const CVC_INPUT_WIDTH = 150;
const EXPIRY_INPUT_WIDTH = CVC_INPUT_WIDTH;
const CARD_NUMBER_INPUT_WIDTH_OFFSET = 40;
const CARD_NUMBER_INPUT_WIDTH =
  Dimensions.get('window').width -
  EXPIRY_INPUT_WIDTH -
  CARD_NUMBER_INPUT_WIDTH_OFFSET;
const NAME_INPUT_WIDTH = CARD_NUMBER_INPUT_WIDTH;
const PREVIOUS_FIELD_OFFSET = 40;
const POSTAL_CODE_INPUT_WIDTH = 120; // https://github.com/yannickcr/eslint-plugin-react/issues/106

/* eslint react/prop-types: 0 */
export default class CreditCardInput extends Component {
  state = {
    cardType: 'VERVE, MASTERCARD etc.',
  };

  static propTypes = {
    ...InjectedProps,
    labels: PropTypes.object,
    placeholders: PropTypes.object,

    labelStyle: Text.propTypes.style,
    inputStyle: Text.propTypes.style,
    inputContainerStyle: ViewPropTypes.style,

    validColor: PropTypes.string,
    invalidColor: PropTypes.string,
    placeholderColor: PropTypes.string,

    cardImageFront: PropTypes.number,
    cardImageBack: PropTypes.number,
    cardScale: PropTypes.number,
    cardFontFamily: PropTypes.string,
    cardBrandIcons: PropTypes.object,

    allowScroll: PropTypes.bool,

    additionalInputsProps: PropTypes.objectOf(
      PropTypes.shape(TextInput.propTypes),
    ),
  };

  static defaultProps = {
    cardViewSize: {},
    labels: {
      name: "CARDHOLDER'S NAME",
      type: 'CARD TYPE',
      number: 'CARD NUMBER',
      expiry: 'EXPIRY',
      cvc: 'CVC/CCV',
      postalCode: 'POSTAL CODE',
    },
    placeholders: {
      name: 'Full Name',
      type: 'VISA / MASTERCARD etc.',
      number: '1234 5678 1234 5678',
      expiry: 'MM/YY',
      cvc: 'CVC',
      postalCode: '34567',
    },
    inputContainerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
    },
    validColor: '',
    invalidColor: 'red',
    placeholderColor: 'gray',
    allowScroll: false,
    additionalInputsProps: {},
  };

  componentDidMount = () => this._focus(this.props.focused);

  componentWillReceiveProps = (newProps) => {
    if (this.props.focused !== newProps.focused) this._focus(newProps.focused);
  };

  _focus = (field) => {
    if (!field) return;

    // const scrollResponder = this.refs.Form.getScrollResponder();
    // const nodeHandle = ReactNative.findNodeHandle(this.refs[field]);
    //
    // NativeModules.UIManager.measureLayoutRelativeToParent(
    //   nodeHandle,
    //   (e) => {
    //     throw e;
    //   },
    //   (x) => {
    //     scrollResponder.scrollTo({
    //       x: Math.max(x - PREVIOUS_FIELD_OFFSET, 0),
    //       animated: true,
    //     });
    //     this.refs[field].focus();
    //   },
    // );
  };

  _inputProps = (field) => {
    const {
      inputStyle,
      labelStyle,
      validColor,
      invalidColor,
      placeholderColor,
      placeholders,
      labels,
      values,
      status,
      onFocus,
      onChange,
      onBecomeEmpty,
      onBecomeValid,
      additionalInputsProps,
    } = this.props;

    return {
      inputStyle: [s.input, inputStyle],
      labelStyle: [s.inputLabel, labelStyle],
      validColor,
      invalidColor,
      placeholderColor,
      ref: field,
      field,

      label: labels[field],
      placeholder: placeholders[field],
      value: values[field],
      status: status[field],

      onFocus,
      onChange,
      onBecomeEmpty,
      onBecomeValid,

      additionalInputProps: additionalInputsProps[field],
    };
  };

  render() {
    const cardTypes = [
      { name: 'VERVE', slug: 'verve' },
      { name: 'MASTERCARD', slug: 'mastercard' },
      { name: 'VISA', slug: 'visa' },
      { name: 'AMERICAN EXPRESS', slug: 'amex' },
      { name: 'PAYPAL', slug: 'paypal' },
      { name: 'DISCOVER', slug: 'discover' },
    ];

    const {
      cardImageFront,
      cardImageBack,
      inputContainerStyle,
      values: { number, expiry, cvc, name, type, cardType },
      focused,
      allowScroll,
      requiresName,
      requiresType,
      requiresCVC,
      requiresPostalCode,
      cardScale,
      cardFontFamily,
      cardBrandIcons,
    } = this.props;

    return (
      <View style={s.container}>
        <CreditCard
          focused={focused}
          // brand={type}
          // brand={this.state.cardType.slug}
          brand={cardType}
          scale={cardScale}
          fontFamily={cardFontFamily}
          imageFront={cardImageFront}
          imageBack={cardImageBack}
          customIcons={cardBrandIcons}
          name={requiresName ? name : ' '}
          // type={requiresType ? type : ' '}
          number={number}
          expiry={expiry}
          cvc={cvc}
        />
        <ScrollView
          ref="Form"
          horizontal={false}
          keyboardShouldPersistTaps="always"
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          bounces={false}
          style={s.form}
          keyboardDismissMode={'none'}
        >
          {requiresName && (
            <CCInput
              {...this._inputProps('name')}
              containerStyle={[
                s.inputContainer,
                inputContainerStyle,
                { width: NAME_INPUT_WIDTH },
              ]}
            />
          )}

          <CCInput
            {...this._inputProps('number')}
            keyboardType="numeric"
            containerStyle={[
              s.inputContainer,
              inputContainerStyle,
              { width: CARD_NUMBER_INPUT_WIDTH },
            ]}
          />
          {/*<CCInput*/}
          {/*  {...this._inputProps('type')}*/}
          {/*  // keyboardType="numeric"*/}
          {/*  containerStyle={[*/}
          {/*    s.inputContainer,*/}
          {/*    inputContainerStyle,*/}
          {/*    { width: NAME_INPUT_WIDTH },*/}
          {/*  ]}*/}
          {/*  // value={this.state.cardType.name}*/}
          {/*/>*/}
          <CCInput
            {...this._inputProps('expiry')}
            keyboardType="numeric"
            containerStyle={[
              s.inputContainer,
              inputContainerStyle,
              { width: EXPIRY_INPUT_WIDTH },
            ]}
          />
          {requiresCVC && (
            <CCInput
              {...this._inputProps('cvc')}
              keyboardType="numeric"
              containerStyle={[
                s.inputContainer,
                inputContainerStyle,
                { width: CVC_INPUT_WIDTH },
              ]}
            />
          )}
          <View style={{ backgroundColor: '#fff', alignItems: 'center' }}>
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
                      this.state.cardType === item.name
                        ? Color.blue100
                        : '#fff',
                  }}
                />
              )}
              initValue={'itemColor'}
              supportedOrientations={['landscape']}
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={(option) => {
                this.setState({ ...this.state, cardType: option });
                console.log(option);
              }}
              optionTextStyle={{ color: blue, fontSize: normzer(25) }}
              selectedItemTextStyle={{ backgroundColor: Color._lightGreen }}
              cancelText={'CANCEL'}
              cancelTextStyle={{ color: Color.red600 }}
              cancelContainerStyle={{ marginTop: 20 }}
              childrenContainerStyle={{ backgroundColor: '#fff', padding: 0 }}
              optionContainerStyle={{ backgroundColor: '#fff' }}
              // style={{ alignContent: 'flex-end' }}
            >
              <View style={{}}>
                <CCInput
                  {...this._inputProps('type')}
                  // keyboardType="numeric"
                  containerStyle={[
                    s.inputContainer,
                    inputContainerStyle,
                    { width: NAME_INPUT_WIDTH },
                  ]}
                  value={this.state.cardType.name}
                  // editable={false}
                  caretHidden={true}
                />
                {/*<TouchableOpacity*/}
                {/*  style={{*/}
                {/*    // backgroundColor: state.color.toLowerCase(),*/}
                {/*    padding: 5,*/}
                {/*    // borderRadius: 1000,*/}
                {/*    // width: normzer(30),*/}
                {/*    // height: normzer(30),*/}
                {/*    // alignItems: 'center',*/}
                {/*    // justifyContent: 'center',*/}
                {/*  }}*/}
                {/*>*/}
                {/*  <_Text*/}
                {/*    text={this.state.cardType}*/}
                {/*    color={'#000'}*/}
                {/*    fontSize={20}*/}
                {/*  />*/}
                {/*</TouchableOpacity>*/}
              </View>
            </ModalSelector>
          </View>

          {requiresPostalCode && (
            <CCInput
              {...this._inputProps('postalCode')}
              keyboardType="numeric"
              containerStyle={[
                s.inputContainer,
                inputContainerStyle,
                { width: POSTAL_CODE_INPUT_WIDTH },
              ]}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}
