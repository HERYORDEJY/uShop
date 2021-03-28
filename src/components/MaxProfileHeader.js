import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { _lightGreen } from '../styles/color';
import _Text from './Text';
import { TabHeading } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native';

const _MaxProfileHeader = ({ bio }) => {
  return (
    <View
      style={{
        paddingHorizontal: RFValue(20),
        paddingVertical: 0,
        alignItems: 'center',
        height: '100%',
      }}
    >
      <View
        style={{
          width: RFValue(90),
          height: RFValue(90),
          padding: RFValue(2),
          backgroundColor: '#fff',
          borderRadius: 1000,
        }}
      >
        <Image
          source={require('../assets/images/avatar.jpg')}
          style={{
            width: null,
            // height: 150,
            overflow: 'hidden',
            flex: 1,
            borderRadius: 1000,
          }}
        />
      </View>
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <_Text
          text={bio?.fullname?.length <= 0 ? 'User User' : bio.fullname}
          color={'#fff'}
          textStyle={'bold'}
          fontSize={17}
          styles={{ textTransform: 'capitalize' }}
        />
        <_Text
          text={bio?.occupation?.length <= 0 ? 'CEO @ Work' : bio.occupation}
          color={'#fff'}
          fontSize={15}
          styles={{ textTransform: 'capitalize' }}
        />
      </View>
    </View>
  );
};

export default _MaxProfileHeader;

const styles = StyleSheet.create({});
