import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ActivityIndicator } from 'react-native-paper';

import { wearBrand, filterLetter, wearColor } from '../../../api/wearsList';
import * as Color from 'react-native-paper/src/styles/colors';
import { _lightGreen, blue } from '../../../styles/color';
import _MultiSelectFunc from '../../../components/MultipleSelectFunc';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Brand({ filterData }) {
  const [state, setState] = useState({
    loading: false,
    dataSource: [],
    selected: [],
    selectedBrand: '',
  });
  useEffect(
    () =>
      setState({
        ...state,
        dataSource: wearBrand.map((item) => {
          item.isSelect = false;
          item.selectedClass = { name: 'square-o', color: '#fff' };
          return item;
        }),
      }),
    [],
  );
  const selectItem = (data) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? // ? styles.selected
        // : styles.list;
        { name: 'check-square', color: _lightGreen }
      : { name: 'square-o', color: '#fff' };

    const index = state.dataSource.findIndex(
      (item) => data.item.id === item.id,
    );

    state.dataSource[index] = data.item;

    setState({
      ...state,
      dataSource: state.dataSource,
    });
    setState({
      ...state,
      selected: state.dataSource.filter((d) => d.isSelect === true),
    });
    filterData({ brands: state.selected.map((d) => d.name) });
  };
  const renderItem = (data) => {
    return (
      <TouchableOpacity
        onPress={() => selectItem(data)}
        style={{
          // marginRight: index === 0 ? 5 : 0,
          marginRight: RFValue(10),
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: RFValue(10),
          backgroundColor: 'transparent',
          paddingVertical: RFValue(10),
          paddingHorizontal: RFValue(10),
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Icon
          style={{
            color:
              state.selectedBrand === data.item.name ? _lightGreen : '#fff',
            // fontSize: responsiveFontSize(3.4),
            alignSelf: 'center',
            ...data.item.selectedClass,
            fontSize: RFValue(15),
          }}
          name={data.item.selectedClass.name} //check-square, check, square-o
          type={'FontAwesome'}
        />
        <Text
          style={{
            fontSize: RFValue(15),
            fontWeight: '500',
            letterSpacing: 1,
            color: '#fff',
            marginHorizontal: RFValue(10),
          }}
        >
          {data.item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={{ elevation: 100, flexDirection: 'row' }}>
        <_MultiSelectFunc
          dataSource={wearBrand}
          renderItem={renderItem}
          contentContainerStyle={{
            marginTop: RFValue(10),
            marginBottom: RFValue(10),
            elevation: 10000,
            marginLeft: RFValue(10),
            // paddingBottom: RFValue(10),
          }}
        />
        <FlatList
          scrollEventThrottle={16}
          horizontal={false}
          bounces={false}
          bouncesZoom={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: RFValue(10),
            marginTop: RFValue(10),
            // marginBottom: 40,
            // marginLeft: 10,
            paddingBottom: RFValue(10),
            // flex: 0.2,
          }}
          onEndReachedThreshold={0.7}
          data={filterLetter}
          renderItem={({ item }, index) => (
            <TouchableOpacity
              onPress={() => setState({ ...state, selectedLetter: item.name })}
              style={{
                // marginRight: index === 0 ? 5 : 0,
                // marginRight: 10,
                marginBottom: RFValue(10),
                backgroundColor: 'transparent',
                paddingVertical: RFValue(10),
                paddingHorizontal: RFValue(10),
                paddingRight: 0,
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: RFValue(15),
                  fontWeight: '500',
                  letterSpacing: 1,
                  color: '#fff',
                  marginHorizontal: RFValue(10),
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
