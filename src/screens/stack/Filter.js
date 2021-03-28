import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import {
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Icon,
  TabHeading,
  Content,
} from 'native-base';
import {
  responsiveFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import { wearFilterCategory } from '../../api/wearsList';
import Brand from '../tab/search/Brand';
import Color from '../tab/search/Color';
import Size from '../tab/search/Size';
import _Text from '../../components/Text';
import _ButtonLarge from '../../components/ButtonLarge';
import { _screenTheme } from '../../styles/themes';
//
export default function Filter({
  toggleModal,
  themeColor,
  filterData,
  submitFilter,
  ...props
}) {
  const [state, setState] = useState({
    isModalVisible: false,
    tabBarIndex: 0,
  });
  const initialFilterState = {
    brands: [],
    colors: [],
    sizes: [],
    prices: [],
    offer: [],
  };
  const { route, navigation } = props;
  const bgc = _screenTheme.Filter.theme;
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: bgc,
        // alignSelf: 'stretch',
        // alignContent: 'flex-start',
      }}
    >
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: bgc,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <_Text color={'#fff'} fontSize={28} text={'FILTER'} />
        </View>
        <TouchableOpacity
          style={{ paddingHorizontal: 20, paddingVertical: 20 }}
          onPress={() => {
            toggleModal();
            filterData(initialFilterState);
          }}
        >
          <Icon
            style={{ color: '#fff', fontSize: responsiveFontSize(3.4) }}
            name={'close'} //check-square-o, check, square
            type={'AntDesign'}
          />
        </TouchableOpacity>
      </View>
      <Tabs
        scrollWithoutAnimation={true}
        tabBarActiveTextColor={'red'}
        // onScroll={(e) => setState({ ...state, tabBarIndex: Math.ceil(e) })}
        onChangeTab={({ i }) =>
          setState({ ...state, tabBarIndex: Math.ceil(i) })
        }
        // onChangeTab={(e) => console.log(e)}
        tabBarBackgroundColor={bgc}
        renderTabBar={() => <ScrollableTab activeTab={{ color: 'red' }} />}
        tabBarUnderlineStyle={{ backgroundColor: '#fff', height: 1.3 }}
        tabContainerStyle={{ backgroundColor: bgc }}
        style={{ backgroundColor: bgc }}
      >
        {wearFilterCategory.map((m, index) => (
          <Tab
            style={{ backgroundColor: bgc }}
            key={index}
            heading={
              <TabHeading style={{ backgroundColor: bgc }}>
                <_Text
                  text={m.name}
                  fontSize={state.tabBarIndex === index ? 23 : 19}
                  color={state.tabBarIndex === index ? '#fff' : '#ffffff60'}
                />
              </TabHeading>
            }
            tabStyle={{ backgroundColor: bgc }}
            activeTabStyle={{
              backgroundColor: bgc,
            }}
          >
            {m.name === 'Brand' ? (
              <View style={{ backgroundColor: bgc }}>
                <Brand filterData={filterData} />
              </View>
            ) : null}
            {m.name === 'Color' ? (
              <View style={{ backgroundColor: bgc }}>
                <Color filterData={filterData} />
              </View>
            ) : null}
            {m.name === 'Size' ? (
              <View style={{ backgroundColor: bgc }}>
                <Size />
              </View>
            ) : null}
          </Tab>
        ))}
      </Tabs>
      <View
        style={{
          // position: 'relative',
          left: 0,
          right: 0,
          bottom: 0,
          // margin: 20,
          padding: 20,
          backgroundColor: bgc,
        }}
      >
        {/*<TouchableOpacity*/}
        {/*  style={{*/}
        {/*    backgroundColor: Colors.purple500,*/}
        {/*    paddingVertical: 18,*/}
        {/*    alignItems: 'center',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Text style={{ fontSize: responsiveFontSize(3), color: '#fff' }}>*/}
        {/*    APPLY*/}
        {/*  </Text>*/}
        {/*</TouchableOpacity>*/}
        <_ButtonLarge
          text={'APPLY'}
          textStyle={'bold'}
          bodyStyle={{
            backgroundColor: bgc,
            borderColor: '#fff',
            borderWidth: 2,
          }}
          textStyled={{ letterSpacing: 1 }}
          onPress={() => submitFilter()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    // justifyContent: 'center',
    // padding: 20,
    height: responsiveScreenHeight(90),
  },
});
