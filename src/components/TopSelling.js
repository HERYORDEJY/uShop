import React from 'react';
import { StyleSheet, FlatList, View, Image } from 'react-native';
import { blue } from '../styles/color';
import { productImage } from '../api/images';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import normzer from '../utils/normalizer';
import _Text from './Text';

const _TopSelling = () => {
  return (
    <View
      style={{
        ...styles.body,
        elevation: 100,
        backgroundColor: '#fff',
      }}
    >
      <FlatList
        ListHeaderComponent={_HeaderComponent}
        ListHeaderComponentStyle={{
          margin: 0,
          backgroundColor: blue + '90',
          paddingVertical: 10,
          marginBottom: 15,
          paddingHorizontal: 10,
        }}
        numColumns={2}
        columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
        stickyHeaderIndices={[0]}
        scrollEventThrottle={16}
        horizontal={false}
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginBottom: 20,
          elevation: 10000,
        }}
        // onEndReached={}
        onEndReachedThreshold={0.7}
        // ListFooterComponent={}
        data={productImage}
        // onRefresh={() => this.onRefresh()} refreshing={this.state.isRefreshing}
        renderItem={({ item }, index) => (
          <View
            style={{
              marginHorizontal: 10,
              borderWidth: 1,
              borderColor: '#ccc',
              width: responsiveWidth(50),
              height: normzer(250),
              marginBottom: 20,
              backgroundColor: '#fff',
              flex: 1,
              paddingVertical: 10,
              paddingHorizontal: 10,
            }}
          >
            <Image
              style={{
                width: '100%',
                height: normzer(190),
                overflow: 'hidden',
                // borderRadius: 10,
              }}
              resizeMode={'cover'}
              source={item.source}
            />

            <_Text
              text={'Women Jeans'}
              textStyle={'bold'}
              fontSize={20}
              color={'#000'}
              styles={{ letterSpacing: 1, marginLeft: 5 }}
            />
            <_Text
              text={'100 Items available'}
              fontSize={15}
              color={'#aaa'}
              styles={{ letterSpacing: 1, marginLeft: 5 }}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export const _HeaderComponent = ({ ScreenWidth }) => {
  return (
    <View style={{}}>
      <_Text
        textStyle={'bold'}
        text={'TOP SELLING'}
        style={styles.topSelling}
        color={'#fff'}
      />
    </View>
  );
};

export default _TopSelling;

const styles = StyleSheet.create({ topSelling: { fontFamily: 'Lato-Bold' } });
