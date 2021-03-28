import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import NavBar from '../../components/NavBar';
import SearchBtn from '../../components/SearchBtn';
import { topWearType } from '../../api/wearsList';
import { Tab, Tabs, ScrollableTab, TabHeading } from 'native-base';
import ViewAll from '../tab/topwear/ViewAll';
import TShirt from '../tab/topwear/TShirt';
import CasualShirt from '../tab/topwear/CasualShirt';
import FormalShirt from '../tab/topwear/FormalShirt';
import ModalMenu from '../../components/ModalMenu';
import Filter from '../../components/Filter';
import _Text from '../../components/Text';
import _ButtonLarge from '../../components/ButtonLarge';
import normzer from '../../utils/normalizer';
import _SearchBtn from '../../components/SearchBtn';
import { useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Content } from 'native-base';
import { _screenTheme } from '../../styles/themes';

const Topwear = ({ ...props }) => {
  const [state, setState] = useState({
    isModalVisible: false,
    tabBarIndex: 0,
  });

  const stated = useSelector((state) => state);
  const { productList } = stated;

  const [filterState, setFilterState] = useState({
    brands: [],
    colors: [],
    sizes: [],
    prices: [],
    offer: [],
  });

  const [applyFilter, setApplyFilter] = useState({
    data: undefined,
    isLoading: true,
  });

  useEffect(() => filterData(), [filterState]);

  const filterData = (data) => {
    setTimeout(() => setFilterState({ ...filterState, ...data }), 600);
  };

  const submitFilter = async () => {
    let arr = [];
    let arr2 = [];
    for (let i in productList) {
      for (let j in filterState.brands) {
        if (productList[i].brand === filterState.brands[j]) {
          arr.push(productList[i]);
        }
      }
      for (let m in productList[i].colors) {
        for (let n in filterState.colors) {
          if (
            productList[i].colors[m].name.toLowerCase() ===
            filterState.colors[n].toLowerCase()
          ) {
            arr.push(productList[i]);
          }
        }
      }
    }

    arr2 = await arr.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
    );
    return arr2;
    // console.log(
    //   arr.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i),
    // );
    // console.log(filterState);
    // // return arr;
    // setApplyFilter([
    //   ...arr.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i),
    // ]);
  };

  const loadFilter = () => {
    setApplyFilter({ ...applyFilter, isLoading: true }),
      submitFilter().then((result) =>
        setApplyFilter({ ...applyFilter, data: [...result], isLoading: false }),
      );
  };
  function toggleModal() {
    setState({ ...state, isModalVisible: !state.isModalVisible });
  }
  const { route, navigation } = props;
  const bgc = _screenTheme.Topwear.theme;
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <NavBar
        screenTitle={'TOPWEAR'}
        bellValue={11}
        cartValue={93}
        stackScreen={true}
        backgroundColor={bgc}
        // openDrawer={openDrawer}
      />
      <Content style={{ flex: 1 }}>
        <Tabs
          style={{ paddingBottom: 0 }}
          scrollWithoutAnimation={true}
          tabBarActiveTextColor={'red'}
          // onScroll={(e) => setState({ ...state, tabBarIndex: Math.ceil(e) })}
          onChangeTab={({ i }) => setState({ ...state, tabBarIndex: i })}
          // onChangeTab={(e) => console.log(e)}
          tabBarBackgroundColor={'#fff'}
          renderTabBar={() => <ScrollableTab activeTab={{ color: 'red' }} />}
          tabBarUnderlineStyle={{ backgroundColor: '#fff', height: 1.3 }}
        >
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: bgc }}>
                <_Text
                  text={'View all'}
                  fontSize={state.tabBarIndex === 0 ? 15 : 10}
                  color={state.tabBarIndex === 0 ? '#fff' : '#ffffff88'}
                />
              </TabHeading>
            }
            tabStyle={{ backgroundColor: '#fff' }}
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
            {/*<ViewAll data={applyFilter.data ?? productList} />*/}
            <ViewAll
              data={
                applyFilter.isLoading === true ? productList : applyFilter.data
              }
            />
          </Tab>
          {topWearType.map((m, index) => (
            <Tab
              key={index}
              // heading={m.name}
              heading={
                <TabHeading style={{ backgroundColor: bgc }}>
                  <_Text
                    text={m.name}
                    fontSize={state.tabBarIndex === index + 1 ? 15 : 10}
                    color={
                      state.tabBarIndex === index + 1 ? '#fff' : '#ffffff60'
                    }
                  />
                </TabHeading>
              }
              tabStyle={{ backgroundColor: '#fff' }}
              activeTabStyle={{
                backgroundColor: 'rgba(0, 88, 182, 1)',
              }}
            >
              {m.name === 'T-shirts' ? <TShirt /> : null}
              {m.name === 'Casual shirts' ? <CasualShirt /> : null}
              {m.name === 'Formal shirts' ? <FormalShirt /> : null}
            </Tab>
          ))}
        </Tabs>
      </Content>
      <_ButtonLarge
        text={'Filter'}
        leftIconName={'sliders'}
        leftIconType={'FontAwesome'}
        leftIconStyle={{
          fontSize: RFValue(15),
          color: '#fff',
          marginHorizontal: RFValue(10),
        }}
        bodyStyle={{ backgroundColor: bgc, flexDirection: 'row' }}
        onPress={() => navigation.navigate('Filter')}
        // onPress={toggleModal}
      />

      <_SearchBtn themeColor={bgc} />
      <ModalMenu
        visible={state.isModalVisible}
        toggleModal={toggleModal}
        component={
          <Filter
            toggleModal={toggleModal}
            themeColor={bgc}
            onSwipeComplete={toggleModal}
            filterData={filterData}
            submitFilter={loadFilter}
          />
        }
      />
    </Container>
  );
};

export default Topwear;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});
