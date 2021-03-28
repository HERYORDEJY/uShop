import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { _lightGreen, blue } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import _HeaderScrollExample from '../../components/HeaderScrollExample';
import _MinProfileHeader from '../../components/MinProfileHeader';
import _MaxProfileHeader from '../../components/MaxProfileHeader';
import { Tab, TabHeading, Tabs } from 'native-base';
import _Text from '../../components/Text';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import _WishList from '../../components/WishList';
import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Content, Container } from 'native-base';
import _NavBar from '../../components/NavBar';
import _SearchBtn from '../../components/SearchBtn';
import { _screenTheme } from '../../styles/themes';
//
const Profile = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.Profile.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  const [state, setState] = useState({
    tab: 0,
    openDrawer: false,
    openDrawerIcon: 'menu-unfold',
    bgc: bgc,
  });
  //

  const stated = useSelector((state) => state);
  const { cartList, productList, wishList } = stated;
  const bio = { fullname: 'OYEBODE YUSUF', occupation: 'DevelopeR' };
  const wishedFunc = () => {
    let arr = [];
    for (let i = 0; i < productList.length; i++) {
      for (let j = 0; j < wishList.length; j++) {
        if (productList[i].id === wishList[j].id) {
          arr.push(productList[i]);
        }
      }
    }
    return arr;
  };
  //

  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: bgc + '50',
        }}
      />
      <_NavBar
        translucent={true}
        screenTitle={'Profile'}
        bellValue={11}
        cartValue={9}
        navigation={navigation}
        drawerScreen={true}
        backgroundColor={bgc}
      />
      {/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}
      <_HeaderScrollExample
        themeColor={bgc}
        maxHeight={150}
        minHeight={60}
        fadeOutForeground={true}
        renderFixedForeground={
          <>
            <_MinProfileHeader bio={bio} state={state} />
          </>
        }
        renderFixedForegroundStyle={{ backgroundColor: bgc }}
        renderForeground={<_MaxProfileHeader bio={bio} />}
        renderForegroundStyle={{ backgroundColor: bgc, height: '100%' }}
        // TriggeringComponent={<_Text text={'TriggeringView'} color={'#000'} />}
      >
        {/*<_Text text={'Children  Component'} color={'#000'} fontSize={30} />*/}
        <View style={{ flex: 1 }}>
          <Tabs
            onChangeTab={(e) => setState({ ...state, tab: e.i + 1 })}
            tabBarBackgroundColor={'#fff'}
            tabBarUnderlineStyle={{ backgroundColor: _lightGreen }}
          >
            <Tab
              activeTextStyle={{ color: _lightGreen }}
              heading={
                <TabHeading style={{ backgroundColor: '#fff' }}>
                  <_Text
                    text={'Like'}
                    color={state.tab === 1 ? _lightGreen : '#999'}
                  />
                </TabHeading>
              }
            >
              <View style={{ flex: 1 }}>
                {/* <_ProductList data={productList} /> */}
                {/*<_WishList data={wishedFunc()} />*/}
                <_WishList data={wishedFunc()} />
              </View>
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#fff' }}>
                  <_Text
                    text={'Cart'}
                    color={state.tab === 2 ? _lightGreen : '#999'}
                  />
                </TabHeading>
              }
            >
              <_Text
                text={'Cart'}
                color={'#000'}
                fontSize={400}
                styles={{ flex: 1 }}
              />
            </Tab>
          </Tabs>
        </View>
      </_HeaderScrollExample>
      <_SearchBtn backdropColor={bgc} />
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  navTitle: {},
  navTitleView: {
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: RFValue(10),
    opacity: 0,
    backgroundColor: 'red',
  },
});
