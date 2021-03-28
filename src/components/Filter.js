import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
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
import { wearFilterCategory } from '../api/wearsList';
import Brand from '../screens/tab/search/Brand';
import Color from '../screens/tab/search/Color';
import Size from '../screens/tab/search/Size';
import * as Colors from 'react-native-paper/src/styles/colors';
import { _lightGreen, _purple, blue } from '../styles/color';
import _Text from './Text';
import _ButtonLarge from './ButtonLarge';
import { RFValue } from 'react-native-responsive-fontsize';
//
export default function Filter({
  toggleModal,
  themeColor,
  filterData,
  submitFilter,
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
  return (
    <View
      style={{
        ...styles.container,
        // alignSelf: 'stretch',
        // alignContent: 'flex-start',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: themeColor,
        }}
      >
        <View
          style={{
            paddingHorizontal: RFValue(20),
            paddingVertical: RFValue(20),
          }}
        >
          <_Text color={'#fff'} fontSize={20} text={'FILTER'} />
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: RFValue(20),
            paddingVertical: RFValue(20),
          }}
          onPress={() => {
            toggleModal();
            filterData(initialFilterState);
          }}
        >
          <Icon
            style={{ color: '#fff', fontSize: RFValue(15) }}
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
        tabBarBackgroundColor={themeColor}
        renderTabBar={() => <ScrollableTab activeTab={{ color: 'red' }} />}
        tabBarUnderlineStyle={{ backgroundColor: '#fff', height: 1.3 }}
      >
        {wearFilterCategory.map((m, index) => (
          <Tab
            style={{ backgroundColor: 'transparent' }}
            key={index}
            heading={
              <TabHeading style={{ backgroundColor: themeColor }}>
                <_Text
                  text={m.name}
                  fontSize={state.tabBarIndex === index ? 15 : 10}
                  color={state.tabBarIndex === index ? '#fff' : '#ffffff60'}
                />
              </TabHeading>
            }
            tabStyle={{ backgroundColor: themeColor }}
            activeTabStyle={{
              backgroundColor: themeColor,
            }}
          >
            {m.name === 'Brand' ? <Brand filterData={filterData} /> : null}
            {m.name === 'Color' ? <Color filterData={filterData} /> : null}
            {m.name === 'Size' ? <Size /> : null}
          </Tab>
        ))}
      </Tabs>
      <_ButtonLarge
        text={'APPLY'}
        textStyle={'bold'}
        bodyStyle={{ backgroundColor: themeColor }}
        textStyled={{ letterSpacing: 1 }}
        onPress={() => submitFilter()}
      />
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
