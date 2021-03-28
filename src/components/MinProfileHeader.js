import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { _lightGreen, blue } from '../styles/color';
import _Text from './Text';
import { TabHeading, Thumbnail } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';

const _MinProfileHeader = ({ state, bio }) => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: RFValue(20),
          // paddingVertical: 20,
          alignItems: 'center',
          flexDirection: 'row',
          // height: '100%',
          backgroundColor: state.bgc,
          justifyContent: 'center',
        }}
      >
        <Thumbnail
          source={require('../assets/images/avatar.jpg')}
          medium={true}
        />
        <View style={{ alignItems: 'flex-start', margin: RFValue(10) }}>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: RFValue(10),
        }}
      >
        {/* <TabHeading
          style={{
            backgroundColor: '#fff',
            paddingVertical: 10,
            borderBottomWidth: 6,
            borderBottomColor: state.tab === 1 ? _lightGreen : '#fff',
          }}
        >
          <_Text text={'Like'} color={state.tab === 1 ? _lightGreen : '#999'} />
        </TabHeading>
        <TabHeading
          style={{
            backgroundColor: '#fff',
            paddingVertical: 10,
            borderBottomWidth: 6,
            borderBottomColor: state.tab === 2 ? _lightGreen : '#fff',
          }}
        >
          <_Text text={'Cart'} color={state.tab === 2 ? _lightGreen : '#999'} />
        </TabHeading> */}
      </View>
    </>
  );
};

export default _MinProfileHeader;

const styles = StyleSheet.create({});
