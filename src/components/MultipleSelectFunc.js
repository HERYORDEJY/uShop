import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Icon } from 'native-base';

export default function _MultiSelectFunc({
  dataSource,
  fetchData,
  itemSeparator,
  renderItem,
  scrollEventThrottle = 16,
  horizontal = false,
  contentContainerStyle,
  ...props
}) {
  const [state, setState] = useState({
    loading: false,
    dataSource: [],
  });

  useEffect(() => {
    if (fetchData) fetchData();
  });

  const selectItem = (data) => {
    data.item.isSelect = !data.item.isSelect;
    data.item.selectedClass = data.item.isSelect
      ? styles.selected
      : styles.list;

    const index = state.dataSource.findIndex(
      (item) => data.item.id === item.id,
    );

    state.dataSource[index] = data.item;

    setState({
      dataSource: state.dataSource,
    });
  };

  const keyExtractor = (item) => {
    if (item.id === true) {
      item.id.toString();
    }
    item.name.toString();
  };

  return (
    <View style={{}}>
      <FlatList
        scrollEventThrottle={scrollEventThrottle}
        horizontal={horizontal}
        bounces={false}
        bouncesZoom={false}
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={dataSource}
        ItemSeparatorComponent={itemSeparator}
        renderItem={(item) => renderItem(item)}
        keyExtractor={(item) => keyExtractor(item)}
        extraData={state}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192338',
    paddingVertical: 50,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#192338',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
  },
  lightText: {
    color: '#f7f7f7',
    width: 200,
    paddingLeft: 15,
    fontSize: 12,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 290,
    zIndex: 1,
  },
  numberBox: {
    position: 'absolute',
    bottom: 75,
    width: 30,
    height: 30,
    borderRadius: 15,
    left: 330,
    zIndex: 3,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: { fontSize: 14, color: '#000' },
  selected: { backgroundColor: '#FA7B5F' },
});
