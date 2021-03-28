import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { menShirtImage } from '../../../api/images';
import _ProductList from '../../../components/ProductList';
import { useSelector } from 'react-redux';

export default function ViewAll({ data }) {
  const { tShirt, casualShirt, formalShirt } = menShirtImage[0];
  const allTopWear = [...tShirt, ...casualShirt, ...formalShirt];
  const state = useSelector((state) => state);
  const { productList } = state;
  return (
    <View>
      <_ProductList data={data} />
    </View>
  );
}
