import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import NavBar from '../../components/NavBar';
import SearchBtn from '../../components/SearchBtn';
import { blue } from '../../styles/color';
import ModalMenu from '../../components/ModalMenu';
import Filter from '../../components/Filter';
import normzer from '../../utils/normalizer';
import _ProductList from '../../components/ProductList';
import { productImage } from '../../api/images';
import { useNavigation } from '@react-navigation/native';
import _Drawer from '../../components/Drawer';
import { useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import _NavBar from '../../components/NavBar';
import { Container, Content } from 'native-base';
import _SearchBtn from '../../components/SearchBtn';
import { _screenTheme } from '../../styles/themes';

const OfferZone = ({ navigation, ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.OfferZone.theme;
  //

  const [state, setState] = useState({
    isModalVisible: false,
    tabBarIndex: 0,
    openDrawer: false,
    openDrawerIcon: 'menu-unfold',
    // closeDrawerIcon: 'menu-unfold',
  });
  const stated = useSelector((state) => state);
  const { productList } = stated;

  //
  function toggleModal() {
    setState({ ...state, isModalVisible: !state.isModalVisible });
  }

  const _renderHeader = () => {
    return (
      <>
        <View style={{ ...styles.ontainer, flexDirection: 'row' }}>
          <Image
            style={{
              width: responsiveScreenWidth(50),
              height: normzer(100),
              borderWidth: 0.4,
              borderColor: 'transparent',
            }}
            resizeMode={'contain'}
            source={require('../../assets/images/banner-02.jpg')}
          />
          <View style={{ borderColor: bgc, borderWidth: 1, height: '100%' }}>
            {/* <Text>' '</Text> */}
          </View>
          <Image
            style={{
              width: responsiveScreenWidth(50),
              height: normzer(100),
              borderWidth: 0.4,
              borderColor: 'transparent',
            }}
            resizeMode={'contain'}
            source={require('../../assets/images/banner-01.jpg')}
          />
        </View>
        <TouchableOpacity style={styles.ontainer}>
          <Image
            style={{
              width: normzer(380),
              height: normzer(200),
              borderWidth: 0.4,
              borderColor: bgc,
            }}
            resizeMode={'contain'}
            source={require('../../assets/images/offer-banner.png')}
          />
        </TouchableOpacity>
      </>
    );
  };

  const _renderItem = ({ item }) => {
    return <></>;
  };

  return (
    <Container style={styles.container}>
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
        screenTitle={'Offer zone'}
        bellValue={11}
        cartValue={9}
        navigation={navigation}
        drawerScreen={true}
        backgroundColor={bgc}
      />
      <Content>
        {_renderHeader()}
        <_ProductList
          data={productList}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      </Content>

      <_SearchBtn backdropColor={bgc} />
      <ModalMenu
        visible={state.isModalVisible}
        toggleModal={toggleModal}
        component={<Filter toggleModal={toggleModal} />}
      />
    </Container>
  );
};

export default OfferZone;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  fitImage: {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width: 30,
  },
  ontainer: { alignItems: 'center', marginVertical: 10 },
});
