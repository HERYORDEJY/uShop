import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { _lightGreen } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import _Text from '../../components/Text';
import moment from 'moment';
import normzer from '../../utils/normalizer';
import { Icon } from 'native-base';
import _ButtonLarge from '../../components/ButtonLarge';
import { Container, Content } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';

const Track = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.Track.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <_CartNavBar
        screenTitle={'ORDER NO: 1122334455'}
        backgroundColor={bgc}
        leftIconName={'chevron-thin-left'}
        leftIconType={'entypo'}
        // currentStep={3}
        // totalStep={3}
      />
      <Content
        contentContainerStyle={{ paddingVertical: RFValue(20) }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        horizontal={false}
      >
        <View style={{ paddingBottom: RFValue(50) }}>
          <View
            style={{ paddingHorizontal: RFValue(20), alignItems: 'center' }}
          >
            <_Text
              text={`Order No: ${'1122334455'}`}
              color={'#000'}
              styles={{ textAlign: 'left' }}
              fontSize={20}
            />
            <_Text
              text={`Order placed succesfully on ${moment().format('LL')}`}
              color={'#999'}
              styles={{ textAlign: 'center', paddingVertical: RFValue(5) }}
              fontSize={15}
            />
          </View>
          <View
            style={{
              paddingVertical: RFValue(10),
              paddingHorizontal: RFValue(20),
            }}
          >
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#fff',
                marginLeft: RFValue(40),
                borderLeftWidth: 2,
                borderColor: '#aaa',
                marginVertical: RFValue(10),
              }}
            />
            <View style={{}}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: _lightGreen,
                    padding: RFValue(10),
                    borderRadius: 1000,
                    borderColor: _lightGreen,
                  }}
                >
                  <Icon
                    name={'check'}
                    type={'AntDesign'}
                    style={{ color: '#fff', fontSize: RFValue(20) }}
                  />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: RFValue(10), flex: 1 }}>
                  <_Text
                    text={`Order Placed Succesfully`}
                    color={'#000'}
                    styles={{ textAlign: 'left', marginBottom: RFValue(5) }}
                    fontSize={20}
                  />
                  <_Text
                    text={`Order placed succesfully on ${moment().format(
                      'LL',
                    )}`}
                    color={'#999'}
                    styles={{ textAlign: 'left', paddingVertical: 1 }}
                    fontSize={15}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  marginVertical: RFValue(50),
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: _lightGreen,
                    padding: RFValue(10),
                    borderRadius: 1000,
                    borderColor: _lightGreen,
                  }}
                >
                  <Icon
                    name={'truck'}
                    type={'Feather'}
                    style={{ color: '#fff', fontSize: RFValue(20) }}
                  />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: RFValue(10), flex: 1 }}>
                  <_Text
                    text={`Shipment`}
                    color={'#000'}
                    styles={{ textAlign: 'left', marginBottom: RFValue(5) }}
                    fontSize={20}
                  />
                  <_Text
                    text={`Order dispatched on ${moment().format('LL')}`}
                    color={'#999'}
                    styles={{ textAlign: 'left', paddingVertical: 1 }}
                    fontSize={15}
                  />
                  <_Text
                    text={`Order possiblyOrder possibly delivered on ${moment().format(
                      'LL',
                    )}`}
                    color={'#999'}
                    styles={{
                      textAlign: 'left',
                      paddingVertical: 1,
                      flexShrink: 1,
                      flexWrap: 'wrap',
                    }}
                    fontSize={15}
                  />
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: _lightGreen,
                    padding: RFValue(10),
                    borderRadius: 1000,
                    borderColor: _lightGreen,
                  }}
                >
                  <Icon
                    name={'home'}
                    type={'AntDesign'}
                    style={{ color: '#fff', fontSize: RFValue(20) }}
                  />
                </TouchableOpacity>
                <View style={{ paddingHorizontal: RFValue(10) }}>
                  <_Text
                    text={`Delivery`}
                    color={'#000'}
                    styles={{ textAlign: 'left' }}
                    fontSize={20}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </Content>
      <_ButtonLarge
        text={'CANCEL ORDER'}
        textColor={'#aaa'}
        bodyStyle={{
          backgroundColor: bgc,
        }}
        onPress={() => {}}
      />

      {/*<_SearchBtn />*/}
    </Container>
  );
};

export default Track;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
