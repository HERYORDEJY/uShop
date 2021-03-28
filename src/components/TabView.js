import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollableTab, Tab, TabHeading, Tabs } from 'native-base';
import { blue } from '../styles/color';
import _Text from './Text';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import ViewAll from '../screens/tab/topwear/ViewAll';
import { topWearType } from '../api/wearsList';
import TShirt from '../screens/tab/topwear/TShirt';
import CasualShirt from '../screens/tab/topwear/CasualShirt';
import FormalShirt from '../screens/tab/topwear/FormalShirt';

const _TabView = ({ contentList, componentList }) => {
  const [state, setState] = useState({
    tabBarIndex: 0,
  });
  return (
    <Tabs
      scrollWithoutAnimation={true}
      tabBarActiveTextColor={'red'}
      onScroll={(e) => setState({ ...state, tabBarIndex: Math.ceil(e) })}
      // onChangeTab={({ i }) => setState({ ...state, tabBarIndex: Math.ceil(i) })}
      // onChangeTab={(e) => console.log(e)}
      // tabContainerStyle={{ backgroundColor: 'yellow' }}
      tabBarBackgroundColor={'#fff'}
      renderTabBar={() => <ScrollableTab activeTab={{ color: 'red' }} />}
      tabBarUnderlineStyle={{ backgroundColor: '#fff', height: 1.3 }}
    >
      {contentList.map((m, index) => (
        <Tab
          key={index}
          // heading={m.name}
          heading={
            <TabHeading style={{ backgroundColor: blue }}>
              <_Text
                text={m.name}
                fontSize={state.tabBarIndex === index + 1 ? 23 : 19}
                color={state.tabBarIndex === index + 1 ? '#fff' : '#ffffff88'}
              />
            </TabHeading>
          }
          tabStyle={{ backgroundColor: blue }}
          activeTabStyle={{
            backgroundColor: 'rgba(0, 88, 182, 1)',
            color: 'green',
          }}
          textStyle={{
            fontSize: responsiveFontSize(6),
            color: 'rgba(255, 255, 255, 0.5)',
          }}
          activeTextStyle={{ color: '#fff' }}
        >
          {/*{m.name === 'T-shirts' ? <TShirt /> : null}*/}
          {/*{m.name === 'Casual shirts' ? <CasualShirt /> : null}*/}
          {/*{m.name === 'Formal shirts' ? <FormalShirt /> : null}*/}
          {m.name}
        </Tab>
      ))}
    </Tabs>
  );
};

export default _TabView;

const styles = StyleSheet.create({});
