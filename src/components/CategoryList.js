import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

const _CategoryList = ({
  onEndReached,
  onEndReachedThreshold = 0.7,
  ListFooterComponent,
  data,
  onRefresh,
  refreshing,
  showsVerticalScrollIndicator = false,
  RenderItem,
  numColumns,
  columnWrapperStyle,
  onScroll,
  horizontal = false,
  contentContainerStyle,
  ListHeaderComponent = false,
  ListHeaderComponentStyle,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <FlatList
      numColumns={numColumns}
      columnWrapperStyle={columnWrapperStyle}
      onScroll={onScroll}
      ListHeaderComponent={ListHeaderComponent}
      ListHeaderComponentStyle={ListHeaderComponentStyle}
      stickyHeaderIndices={ListHeaderComponent !== false ? [0] : null}
      scrollEventThrottle={16}
      horizontal={horizontal}
      bounces={false}
      bouncesZoom={false}
      contentContainerStyle={contentContainerStyle}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      ListFooterComponent={ListFooterComponent}
      data={data}
      onRefresh={onRefresh}
      refreshing={refreshing}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      renderItem={({ item }, index) => (
        <RenderItem
          title={item.name}
          key={index}
          titleStyle={titleStyle}
          subtitleStyle={subtitleStyle}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default _CategoryList;

const styles = StyleSheet.create({});
