import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon, Input } from 'native-base';
import normzer from '../utils/normalizer';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { _lightGreen } from '../styles/color';
import _Text from './Text';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
//
const _Search = ({ toggleModal, themeColor }) => {
  const store = useSelector((state) => state);
  const { productList } = store;
  const navigation = useNavigation();
  const [state, setState] = useState({
    productList: productList.map((p) => {
      return {
        id: p.id,
        name: p.name,
        brand: p.brand,
        type: p.type,
        category: p.category,
      };
    }),
    searchList: [],
    popularSearch: true,
  });
  const onTypeSearch = (value) => {
    if (value.length >= 3) {
      setState({
        ...state,
        popularSearch: false,
        searchList: productList.filter((p) =>
          p.name.toLowerCase().includes(value.toLowerCase()),
        ),
      });
    }
  };
  const onSearch = (itemID) => {
    toggleModal();
    navigation.navigate('ProductDescription', { itemID: itemID });
  };
  return (
    <View style={styles.container}>
      {/*<View*/}
      {/*  style={{*/}
      {/*    paddingHorizontal: 20,*/}
      {/*    paddingVertical: 20,*/}
      {/*    width: responsiveScreenWidth(90),*/}
      {/*    height: responsiveScreenHeight(80),*/}
      {/*  }}*/}
      {/*>*/}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: '#aaa',
          backgroundColor: '#fff',
          // flexGrow: 0,
        }}
      >
        <TouchableOpacity style={{ padding: RFValue(10), flex: 1 }}>
          <Icon
            name={'search'}
            type={'Feather'}
            style={{ color: '#999', fontSize: RFValue(20) }}
          />
        </TouchableOpacity>
        <View style={{ overflow: 'hidden' }}>
          <Input
            onChangeText={(value) => onTypeSearch(value)}
            placeholder={'Search For Product here...'}
            style={{
              fontSize: RFValue(15),
              flexWrap: 'wrap',
              width: responsiveWidth(60),
            }}
            disableFullscreenUI={true}
          />
        </View>
        <TouchableOpacity
          style={{ padding: RFValue(10), flex: 1 }}
          onPress={() => toggleModal()}
        >
          <Icon
            name={'close'}
            type={'AntDesign'}
            style={{ color: '#999', fontSize: RFValue(20) }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: themeColor,
          padding: RFValue(20),
          width: '100%',
          height: RFValue(450),
        }}
      >
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}
          bounces={false}
        >
          <View>
            {state.searchList.map((p) => (
              <TouchableOpacity
                key={p.id}
                style={{ paddingVertical: 20 }}
                onPress={() => onSearch(p.id)}
              >
                <_Text text={p.name} color={'#fff'} fontSize={25} />
              </TouchableOpacity>
            ))}
            {state.popularSearch && (
              <>
                <_Text text={'POPULAR SEARCHES'} color={'#ddd'} fontSize={15} />
                <TouchableOpacity
                  style={{ paddingVertical: 20 }}
                  onPress={() => navigation.navigate('Men')}
                >
                  <_Text text={"Men's T shirt"} color={'#fff'} fontSize={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: RFValue(20) }}>
                  <_Text text={"Men's Jeans"} color={'#fff'} fontSize={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: RFValue(20) }}>
                  <_Text
                    text={"Women's Dresses"}
                    color={'#fff'}
                    fontSize={20}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: RFValue(20) }}>
                  <_Text text={"Women's Top"} color={'#fff'} fontSize={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: RFValue(20) }}>
                  <_Text text={"Men's T shirt"} color={'#fff'} fontSize={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: RFValue(20) }}>
                  <_Text text={"Kid's Shirt"} color={'#fff'} fontSize={20} />
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingVertical: RFValue(20) }}>
                  <_Text
                    text={'Printed T shirt'}
                    color={'#fff'}
                    fontSize={20}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </View>

      {/*</View>*/}
    </View>
  );
};

export default _Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 60,
  },
});
