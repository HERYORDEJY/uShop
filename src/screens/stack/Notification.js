import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import { blue } from '../../styles/color';
import _CartNavBar from '../../components/CartNavBar';
import _NotificationItem from '../../components/NotificationItem';
import _ButtonLarge from '../../components/ButtonLarge';
import * as Color from '../../styles/color';
import { Content, Container } from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import _NavBar from '../../components/NavBar';
import { _screenTheme } from '../../styles/themes';

const Notification = ({ ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.Notification.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      {/* <_CartNavBar
        screenTitle={'NOTIFICATION'}
        backgroundColor={bgc}
        leftIconName={'chevron-thin-left'}
        leftIconType={'entypo'}
        // rightIconName={'dots-three-vertical'}
        // rightIconType={'entypo'}
      /> */}
      <_NavBar
        screenTitle={'NOTIFICATION'}
        bellValue={11}
        cartValue={93}
        stackScreen={true}
        backgroundColor={bgc}
        // openDrawer={openDrawer}
      />
      {/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/}
      <Content contentContainerStyle={{ paddingVertical: RFValue(20) }}>
        <_NotificationItem
          title={'Notification 1'}
          subtitle={'Women'}
          start={'2:00pm'}
          stop={'3:18pm'}
        />
        <_NotificationItem
          title={'Notification 1'}
          subtitle={'Women'}
          start={'2:00pm'}
          stop={'3:18pm'}
        />
      </Content>

      {/*<_SearchBtn />*/}
      <_ButtonLarge
        text={`MARK ALL AS VIEWED`}
        bodyStyle={{ backgroundColor: bgc }}
        onPress={() => {}}
      />
    </Container>
  );
};

export default Notification;

const styles = StyleSheet.create({ container: { flex: 1 } });
