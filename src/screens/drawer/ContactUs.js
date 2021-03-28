import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
} from 'react-native';
import { _lightGreen, blue, lightGreen100 } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import normzer from '../../utils/normalizer';
import _Text from '../../components/Text';
import { Icon } from 'native-base';
import * as Color from '../../styles/color';
import { useNavigation } from '@react-navigation/native';
import _Drawer from '../../components/Drawer';
import _NavBar from '../../components/NavBar';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';

const ContactUs = ({ ...props }) => {
  const { route } = props;
  // const { backgroundColor: bgc } = route.params.sideBarProps;
  const bgc = _screenTheme.ContactUs.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  const navigation = useNavigation();

  return (
    <Container style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <_NavBar
        translucent={true}
        screenTitle={'Contact Us'}
        bellValue={11}
        cartValue={9}
        navigation={navigation}
        drawerScreen={true}
        backgroundColor={bgc}
      />
      {/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}
      <Content>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <_Text
            text={'Manager Order'}
            color={'#000'}
            fontSize={20}
            textStyle={'bold'}
          />
          <TouchableOpacity>
            <_Text
              text={'Faqs'}
              color={_lightGreen}
              fontSize={15}
              textStyle={'bold'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: RFValue(20),
            alignItems: 'flex-start',
            marginTop: RFValue(20),
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: lightGreen100,
                padding: RFValue(20),
                borderRadius: RFValue(100),
                marginBottom: RFValue(10),
              }}
            >
              <Icon
                name={'truck'}
                type={'Feather'}
                style={{ color: _lightGreen, fontSize: RFValue(20) }}
              />
            </TouchableOpacity>
            <_Text text={'TRACK'} color={'#999'} fontSize={15} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: Color.red100,
                padding: RFValue(20),
                borderRadius: RFValue(100),
                marginBottom: RFValue(10),
              }}
            >
              <Icon
                name={'shopping-bag'}
                type={'Feather'}
                style={{ color: Color.red600, fontSize: RFValue(20) }}
              />
            </TouchableOpacity>
            <_Text
              text={'ORDER\nCANCELLATION'}
              color={'#999'}
              fontSize={15}
              styles={{ textAlign: 'center' }}
            />
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                backgroundColor: Color.blue100,
                padding: RFValue(20),
                borderRadius: RFValue(100),
                marginBottom: RFValue(10),
              }}
            >
              <Icon
                name={'shopping-bag'}
                type={'Feather'}
                style={{ color: Color.blue600, fontSize: RFValue(20) }}
              />
            </TouchableOpacity>
            <_Text
              text={'ORDER\nRETURN'}
              color={'#999'}
              fontSize={15}
              styles={{ textAlign: 'center' }}
            />
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
          <_Text
            text={'Select Issue'}
            color={'#000'}
            fontSize={20}
            textStyle={'bold'}
          />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 0.8,
              borderColor: '#aaa',
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              marginVertical: RFValue(10),
            }}
          >
            <_Text text={'Order Delivery'} color={'#000'} fontSize={15} />
            <Icon
              name={'chevron-thin-right'}
              type={'Entypo'}
              style={{ fontSize: RFValue(15) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 0.8,
              borderColor: '#aaa',
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              marginVertical: RFValue(10),
            }}
          >
            <_Text text={'Return/Exchange'} color={'#000'} fontSize={15} />
            <Icon
              name={'chevron-thin-right'}
              type={'Entypo'}
              style={{ fontSize: RFValue(15) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 0.8,
              borderColor: '#aaa',
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              marginVertical: RFValue(10),
            }}
          >
            <_Text text={'Change/Cancel Order'} color={'#000'} fontSize={15} />
            <Icon
              name={'chevron-thin-right'}
              type={'Entypo'}
              style={{ fontSize: RFValue(15) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 0.8,
              borderColor: '#aaa',
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              marginVertical: RFValue(10),
            }}
          >
            <_Text
              text={'Offer/Discount/Coupon'}
              color={'#000'}
              fontSize={15}
            />
            <Icon
              name={'chevron-thin-right'}
              type={'Entypo'}
              style={{ fontSize: RFValue(15) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 0.8,
              borderColor: '#aaa',
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              marginVertical: RFValue(10),
            }}
          >
            <_Text text={'Manage Account'} color={'#000'} fontSize={15} />
            <Icon
              name={'chevron-thin-right'}
              type={'Entypo'}
              style={{ fontSize: RFValue(15) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 0.8,
              borderColor: '#aaa',
              paddingHorizontal: RFValue(10),
              paddingVertical: RFValue(10),
              marginVertical: RFValue(10),
            }}
          >
            <_Text text={'Others'} color={'#000'} fontSize={15} />
            <Icon
              name={'chevron-thin-right'}
              type={'Entypo'}
              style={{ fontSize: RFValue(15) }}
            />
          </TouchableOpacity>
        </View>
      </Content>
      <View
        style={{
          position: 'relative',
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
        }}
      >
        {/*<_ButtonLarge*/}
        {/*  text={'CANCEL ORDER'}*/}
        {/*  textColor={'#aaa'}*/}
        {/*  bodyStyle={{*/}
        {/*    backgroundColor: '#fff',*/}
        {/*    borderWidth: 1,*/}
        {/*    borderColor: '#aaa',*/}
        {/*    margin: 20,*/}
        {/*  }}*/}
        {/*  onPress={() => {}}*/}
        {/*/>*/}
      </View>

      {/*<_SearchBtn />*/}
    </Container>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
