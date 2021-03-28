import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import _ProductItem from './ProductItem';

const _ProductList = ({
  onEndReached,
  onEndReachedThreshold = 0.7,
  ListFooterComponent,
  data,
  onRefresh,
  refreshing,
  showsVerticalScrollIndicator = false,
  RenderItem,
  renderStyle,
  numColumns = 2,
  columnWrapperStyle,
  onScroll,
  horizontal = false,
  contentContainerStyle,
  ListHeaderComponent = false,
  ListHeaderComponentStyle,
  paddingBottom,
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
      contentContainerStyle={{
        ...styles.contentContainer,
        ...contentContainerStyle,
      }}
      onEndReached={onEndReached}
      onEndReachedThreshold={onEndReachedThreshold}
      ListFooterComponent={ListFooterComponent}
      data={data}
      onRefresh={onRefresh}
      refreshing={refreshing}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      renderItem={({ item }, index) => (
        <_ProductItem
          item={item}
          key={index}
          itemID={item.id}
          itemName={item.name}
          discounted={item.discounted}
          itemPrice={item.price}
          itemDiscounted={item.discounted}
          itemDiscountPrice={item.discountPrice}
          source={item.images[1].source}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default _ProductList;

const styles = StyleSheet.create({
  contentContainer: {
    // marginVertical: 50,
    marginTop: RFValue(20),
    marginBottom: RFValue(20),
    elevation: 10000,
    marginLeft: RFValue(10),
    paddingBottom: 100,
  },
});
