import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import _Text from './Text';
import * as Color from '../styles/color';
import { RFValue } from 'react-native-responsive-fontsize';

const _NotificationItem = ({ title, subtitle, start, stop }) => {
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: RFValue(20),
        marginBottom: RFValue(10),
        padding: RFValue(10),
        backgroundColor: '#fff',
        borderColor: '#aaa',
        borderWidth: 1,
      }}
    >
      <_Text text={title} color={'#000'} fontSize={20} />
      <_Text
        text={subtitle}
        color={'#999'}
        fontSize={15}
        styles={{ marginVertical: RFValue(5) }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <_Text text={start} color={Color.red600} fontSize={15} />
        <_Text
          text={'-'}
          color={Color.red600}
          fontSize={15}
          styles={{ marginHorizontal: RFValue(5) }}
        />
        <_Text text={stop} color={Color.red600} fontSize={15} />
      </View>
    </TouchableOpacity>
  );
};

export default _NotificationItem;

const styles = StyleSheet.create({});
