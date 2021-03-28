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
} from 'react-native';

import CreditCard from './CardView';
import CCInput from './CCInput';
import { InjectedProps } from './connectToState';

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  form: {
    marginTop: 10,
  },
  inputContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  inputLabel: {
    fontWeight: 'bold',
  },
  input: {
    height: 30,
  },
});

const CVC_INPUT_WIDTH = 100;
const EXPIRY_INPUT_WIDTH = CVC_INPUT_WIDTH;
const CARD_NUMBER_INPUT_WIDTH_OFFSET = 40;
const CARD_NUMBER_INPUT_WIDTH =
  Dimensions.get('window').width -
  EXPIRY_INPUT_WIDTH -
  CARD_NUMBER_INPUT_WIDTH_OFFSET;
const NAME_INPUT_WIDTH = CARD_NUMBER_INPUT_WIDTH;
const PREVIOUS_FIELD_OFFSET = 40;
const POSTAL_CODE_INPUT_WIDTH = 120; // https://github.com/yannickcr/eslint-plugin-react/issues/106

/* eslint react/prop-types: 0 */ export default class _CreditCardInput extends Component {
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
      type: 'VISA / MASTERCARD / VERVE',
      number: '1234 5678 1234 5678',
      expiry: 'MM/YY',
      cvc: 'CVC',
      postalCode: '34567',
    },
    inputContainerStyle: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      marginTop: 10,
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

    const scrollResponder = this.refs.Form.getScrollResponder();
    const nodeHandle = ReactNative.findNodeHandle(this.refs[field]);

    NativeModules.UIManager.measureLayoutRelativeToParent(
      nodeHandle,
      (e) => {
        throw e;
      },
      (x) => {
        scrollResponder.scrollTo({
          x: Math.max(x - PREVIOUS_FIELD_OFFSET, 0),
          animated: true,
        });
        this.refs[field].focus();
      },
    );
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
    const {
      cardImageFront,
      cardImageBack,
      inputContainerStyle,
      values: { number, expiry, cvc, name = 'OYEBODE', type },
      focused,
      allowScroll,
      requiresName = true,
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
          brand={type}
          scale={cardScale}
          fontFamily={'Product-Sans'}
          imageFront={cardImageFront}
          imageBack={cardImageBack}
          customIcons={cardBrandIcons}
          name={name}
          number={number}
          expiry={expiry}
          cvc={cvc}
        />
        <ScrollView
          ref="Form"
          horizontal={false}
          keyboardShouldPersistTaps="always"
          scrollEnabled={allowScroll}
          showsHorizontalScrollIndicator={false}
          style={s.form}
        >
          <CCInput
            {...this._inputProps('number')}
            keyboardType="numeric"
            containerStyle={[
              s.inputContainer,
              inputContainerStyle,
              { width: CARD_NUMBER_INPUT_WIDTH },
            ]}
            inputStyle={{ fontFamily: 'Product-Regular' }}
          />
          <CCInput
            {...this._inputProps('expiry')}
            keyboardType="numeric"
            containerStyle={[
              s.inputContainer,
              inputContainerStyle,
              { width: EXPIRY_INPUT_WIDTH },
            ]}
            inputStyle={{ fontFamily: 'Product-Regular' }}
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
              inputStyle={{ fontFamily: 'Product-Regular' }}
            />
          )}

          <CCInput
            {...this._inputProps('name')}
            containerStyle={[
              s.inputContainer,
              inputContainerStyle,
              { width: NAME_INPUT_WIDTH },
            ]}
            inputStyle={{ fontFamily: 'Product-Regular' }}
          />
          <CCInput
            {...this._inputProps('type')}
            containerStyle={[
              s.inputContainer,
              inputContainerStyle,
              { width: NAME_INPUT_WIDTH },
            ]}
            inputStyle={{ fontFamily: 'Product-Regular' }}
          />

          {requiresPostalCode && (
            <CCInput
              {...this._inputProps('postalCode')}
              keyboardType="numeric"
              containerStyle={[
                s.inputContainer,
                inputContainerStyle,
                { width: POSTAL_CODE_INPUT_WIDTH },
              ]}
              inputStyle={{ fontFamily: 'Product-Regular' }}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}
