import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import _WishItem from './WishItem';

const _WishList = ({
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
        <_WishItem
          item={item}
          key={index}
          itemName={item.name}
          itemID={item.id}
          itemDiscounted={item.discounted}
          itemPrice={item.price}
          itemDiscountPrice={item.discountPrice}
          itemColors={item.colors}
          itemSizes={item.sizes}
          wishedBy={item.wishedBy}
          wished={item.wished}
          carted={item.carted}
          source={item.images[1].source}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default _WishList;

const styles = StyleSheet.create({
  contentContainer: {
    // marginVertical: 50,
    marginTop: 20,
    marginBottom: 20,
    elevation: 10000,
    marginLeft: 10,
    paddingBottom: 50,
  },
});
