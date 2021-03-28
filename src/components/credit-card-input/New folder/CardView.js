import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ImageBackground,
  Image,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

import defaultIcons from './Icons';
import FlipCard from 'react-native-flip-card';
import _Text from '../Text';

const BASE_SIZE = { width: '100%', height: 250, borderRadius: 15 };

const s = StyleSheet.create({
  cardContainer: { paddingHorizontal: 25 },
  cardFace: { borderRadius: 15 },
  icon: {
    // position: 'absolute',
    // top: 15,
    // right: 15,
    width: 60,
    // height: 40,
    resizeMode: 'contain',
  },
  baseText: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
  },
  placeholder: {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  focused: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
  },
  number: {
    // fontSize: 21,
    // position: 'absolute',
    // top: 95,
    // left: 28,
  },
  name: {
    // fontSize: 16,
    // position: 'absolute',
    // bottom: 20,
    // left: 25,
    // right: 100,
  },
  expiryLabel: {
    // fontSize: 9,
    // position: 'absolute',
    // bottom: 40,
    // left: 218,
    marginHorizontal: 10,
  },
  expiry: {
    // fontSize: 16,
    // position: 'absolute',
    // bottom: 20,
    // left: 220,
    marginHorizontal: 10,
  },
  amexCVC: {
    fontSize: 16,
    position: 'absolute',
    top: 73,
    right: 30,
  },
  cvc: {
    // fontSize: 16,
    position: 'absolute',
    top: 80,
    right: 30,
  },
}); // https://github.com/yannickcr/eslint-plugin-react/issues/106

/* eslint react/prop-types: 0 */ export default class CardView extends Component {
  static propTypes = {
    focused: PropTypes.string,

    brand: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    expiry: PropTypes.string,
    cvc: PropTypes.string,
    placeholder: PropTypes.object,

    scale: PropTypes.number,
    fontFamily: PropTypes.string,
    imageFront: PropTypes.number,
    imageBack: PropTypes.number,
    customIcons: PropTypes.object,
  };

  static defaultProps = {
    name: '',
    placeholder: {
      number: '•••• •••• •••• ••••',
      name: 'FULL NAME',
      expiry: '••/••',
      cvc: '•••',
    },

    scale: 1,
    fontFamily:
      'Product-Regular' ||
      Platform.select({ ios: 'Courier', android: 'Product-Regular' }),
    imageFront: require('./images/card-front.png'),
    imageBack: require('./images/card-back.png'),
  };

  render() {
    const {
      focused,
      brand,
      name,
      number,
      expiry,
      cvc,
      customIcons,
      placeholder,
      imageFront,
      imageBack,
      scale,
      fontFamily,
    } = this.props;

    const Icons = { ...defaultIcons, ...customIcons };
    const isAmex = brand === 'american-express';
    const shouldFlip = !isAmex && focused === 'cvc';

    const containerSize = { ...BASE_SIZE, height: BASE_SIZE.height * scale };
    const transform = {
      transform: [
        { scale },
        { translateY: (BASE_SIZE.height * (scale - 1)) / 2 },
      ],
    };
    return (
      <View style={[s.cardContainer, containerSize]}>
        <FlipCard
          style={{ borderWidth: 0 }}
          flipHorizontal
          flipVertical={false}
          friction={10}
          perspective={2000}
          clickable={false}
          flip={shouldFlip}
        >
          <ImageBackground
            style={[BASE_SIZE, s.cardFace, transform]}
            source={imageFront}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={{ paddingHorizontal: 10 }}>
              <View style={{ height: '40%' }} />

              <_Text
                fontSize={20}
                textStyle={'bold'}
                styles={[
                  s.baseText,
                  { fontFamily },
                  s.number,
                  !number && s.placeholder,
                  focused === 'number' && s.focused,
                ]}
                text={!number ? placeholder.number : number}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 0,
                  paddingVertical: 10,
                }}
              >
                <_Text
                  fontSize={14}
                  color={'#bbb'}
                  styles={[
                    s.baseText,
                    // { fontFamily },
                    s.expiryLabel,
                    s.placeholder,
                    focused === 'expiry' && s.focused,
                  ]}
                  text={'VALID\nTHRU'}
                />
                <_Text
                  styles={[
                    s.baseText,
                    // { fontFamily },
                    s.expiry,
                    !expiry && s.placeholder,
                    focused === 'expiry' && s.focused,
                    { marginHorizontal: 10 },
                  ]}
                  text={!expiry ? placeholder.expiry : expiry}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginVertical: 0,
                  // paddingVertical: 10,
                }}
              >
                <_Text
                  fontSize={20}
                  styles={[
                    s.baseText,
                    // { fontFamily },
                    s.name,
                    !name && s.placeholder,
                    focused === 'name' && s.focused,
                  ]}
                  numberOfLines={1}
                  text={!name ? placeholder.name : name.toUpperCase()}
                />
                <Image style={[s.icon]} source={Icons['visa']} />
              </View>
              {isAmex && (
                <_Text
                  styles={[
                    s.baseText,
                    // { fontFamily },
                    s.amexCVC,
                    !cvc && s.placeholder,
                    focused === 'cvc' && s.focused,
                  ]}
                  text={!cvc ? placeholder.cvc : cvc}
                />
              )}
            </View>
          </ImageBackground>
          <ImageBackground
            style={[BASE_SIZE, s.cardFace, transform]}
            source={imageBack}
          >
            <_Text
              styles={[
                s.baseText,
                s.cvc,
                !cvc && s.placeholder,
                focused === 'cvc' && s.focused,
              ]}
              text={!cvc ? placeholder.cvc : cvc}
            />
          </ImageBackground>
        </FlipCard>
      </View>
    );
  }
}
