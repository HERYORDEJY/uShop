import React from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { menShirtImage } from '../../../api/images';
import _ProductList from '../../../components/ProductList';
import { useSelector } from 'react-redux';

export default function FormalShirt() {
  const { formalShirt } = menShirtImage[0];
  const state = useSelector((state) => state);
  const { productList } = state;

  return (
    <View>
      <_ProductList data={productList} numColumns={2} />
    </View>
  );
}
