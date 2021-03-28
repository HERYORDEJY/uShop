import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import normzer from '../../utils/normalizer';
import { menWearCategory } from '../../api/wearsList';
import _Text from '../../components/Text';
import { Icon } from 'react-native-elements';
import _CartNavBar from '../../components/CartNavBar';
import { DrawerActions } from '@react-navigation/routers';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container } from 'native-base';
import _NavBar from '../../components/NavBar';
import { _screenTheme } from '../../styles/themes';

const More = ({ navigation, ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.More.theme;
  const { subStackScreen } = route.params;
  const openDrawer = () => {
    navigation.openDrawer();
  };
  const [state, setState] = useState({
    tab: 0,
    openDrawer: false,
    openDrawerIcon: 'menu-unfold',
    bgc: bgc,
  });

  console.log(props.navigation);
  return (
    <Container>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent={true}
      />
      <_NavBar
        translucent={true}
        screenTitle={'More'}
        bellValue={11}
        cartValue={9}
        navigation={navigation}
        drawerScreen={true}
        backgroundColor={bgc}
      />
      {/* </View> */}
      <View
        style={{ marginHorizontal: RFValue(20), marginVertical: RFValue(20) }}
      >
        <View>
          {subStackScreen.map((m, index) => (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: RFValue(10),
                paddingHorizontal: RFValue(10),
                borderWidth: 1,
                borderColor: 'rgba(0, 0, 0, 0.4)',
                elevation: 1,
                marginVertical: RFValue(5),
              }}
              onPress={() => navigation.navigate(`${m.slug}`)}
            >
              <_Text text={m.name} fontSize={RFValue(15)} color={'#000'} />

              <Icon name={'chevron-thin-right'} type={'entypo'} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Container>
  );
};

export default More;

const styles = StyleSheet.create({});
