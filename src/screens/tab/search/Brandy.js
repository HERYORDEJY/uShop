import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { ActivityIndicator } from 'react-native-paper';
import { _lightGreen, blue } from '../../../styles/color';
import { wearBrand, wearColor } from '../../../api/wearsList';
import * as Colors from 'react-native-paper/src/styles/colors';
import _MultiSelectFunc from '../../../components/MultipleSelectFunc';
import _Text from '../../../components/Text';

export default function Brandy() {
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
        dataSource: wearColor.map((item) => {
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
      selected: state.dataSource.filter((d) => d.isSelect === true),
    });
    console.log(state.selected);
  };
  const renderItem = (data) => {
    return (
      <TouchableOpacity
        onPress={() => selectItem(data)}
        style={{
          // marginRight: index === 0 ? 5 : 0,
          marginRight: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 10,
          backgroundColor: 'transparent',
          paddingVertical: 10,
          paddingHorizontal: 10,
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
          }}
          name={data.item.selectedClass.name} //check-square, check, square-o
          type={'FontAwesome'}
        />
        <Text
          style={{
            fontSize: responsiveFontSize(3),
            fontWeight: '500',
            letterSpacing: 1,
            color: '#fff',
            marginHorizontal: 20,
          }}
        >
          {data.item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{}}>
      <View style={{ elevation: 100 }}>
        <_MultiSelectFunc
          dataSource={wearBrand}
          renderItem={renderItem}
          contentContainerStyle={{
            marginTop: 20,
            marginBottom: 20,
            elevation: 10000,
            marginLeft: 10,
            paddingBottom: 50,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    // paddingVertical: 5,
    // margin: 3,
    // flexDirection: 'row',
    // backgroundColor: '#192338',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // zIndex: -1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selected: { backgroundColor: '#FA7B5F' },
});
