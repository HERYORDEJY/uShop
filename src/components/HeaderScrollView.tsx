import React, { useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { blue } from '../styles/color';
import _Text from './Text';
import _HomeHeader from './HomeHeader';
import { _HeaderComponent } from './TopSelling';
import * as Animatable from 'react-native-animatable';
import { UpdatedProductAction } from '../redux/productList/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AddWishAction } from '../redux/wishList/actions';
import { RFValue } from 'react-native-responsive-fontsize';

export default function _HeaderScrollView(props) {
  const {
    children,
    data,
    renderForeground,
    headerImage,
    maxHeight,
    minHeight,
    snapToInterval,
    onScroll,
    MIN_HEIGHT = 90,
    MAX_HEIGHT = 250,
    TriggeringComponent,
  } = props;
  //
  const dispatch = useDispatch();
  const stated = useSelector((state) => state);
  const { cartList, productList, wishList } = stated;
  //
  const addWish = (itemID) => {
    dispatch(AddWishAction(wishList, itemID));
    dispatch(
      UpdatedProductAction(productList, itemID, {
        wished: true,
      }),
    );
  };
  //
  const navTitleView = useRef(null);
  const navigation = useNavigation();
  // const MIN_HEIGHT = RFValue(100);
  // // const MIN_HEIGHT = 0;
  // const MAX_HEIGHT = RFValue(250);
  // const MAX_HEIGHT = 400;

  // key Extractor
  const _keyExtractor = (item) => item.source;

  // ==================== render item ==================== //
  const _renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDescription', {
          itemID: item.id,
        })
      }
      onLongPress={() => {
        addWish(item.id);
      }}
      style={styles._renderItemContainer}
    >
      <Image style={styles._renderItemImage} source={item.images[0].source} />
      <_Text
        text={item.name || item.title}
        styles={styles._renderItemTitle}
        numberOfLines={1}
      />
      {!item.availiable && (
        <_Text
          text={`${Math.floor(Math.random() * 1234)}` + ' Items available'}
          styles={styles._renderItemSubtitle}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <HeaderImageScrollView
      minOverlayOpacity={0}
      maxOverlayOpacity={0}
      // style={{ position: 'relative' }}
      maxHeight={RFValue(MAX_HEIGHT)}
      minHeight={RFValue(MIN_HEIGHT)}
      // headerImage={require('../assets/images/banner-02.jpg')}
      renderFixedForeground={() => (
        <Animatable.View
          style={{
            ...styles.navTitleView,
          }}
          ref={navTitleView}
        >
          <_Text text={'TOP SELLING'} textStyle={'bold'} color={'#fff'} />
        </Animatable.View>
      )}
      renderForeground={() => _HomeHeader()}
      renderHeader={() => (
        <View
          style={{
            backgroundColor: blue,
            flex: 1,
          }}
        />
      )}
      // stickyHeaderIndices={[1]}
      ScrollViewComponent={FlatList}
      // renderHeader={}
      bounces={false}
      bouncesZoom={false}
      // snapToInterval={snapToInterval}
      data={data}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
      numColumns={2}
      columnWrapperStyle={{
        flex: 1,
        justifyContent: 'space-between',
      }}
      scrollEventThrottle={16}
      ListHeaderComponent={_HeaderComponent}
      ListHeaderComponentStyle={styles.ListHeaderComponentStyle}
      // stickyHeaderIndices={[-1]}
    >
      <TriggeringView
        style={styles.section}
        onHide={() => this.navTitleView.fadeInUp(200)}
        onDisplay={() => this.navTitleView.fadeOut(100)}
      >
        {TriggeringComponent}
      </TriggeringView>
      {children}
    </HeaderImageScrollView>
  );
}

const styles = StyleSheet.create({
  navTitleView: {
    height: RFValue(90),
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: RFValue(10),
    opacity: 1,
  },
  _renderItemContainer: {
    marginHorizontal: RFValue(10),
    borderWidth: 1,
    borderColor: '#ccc',
    width: responsiveWidth(50),
    // height: RFValue(250),
    marginBottom: RFValue(10),
    backgroundColor: 'transparent',
    flex: 1,
    paddingVertical: RFValue(5),
    paddingHorizontal: RFValue(5),
  },
  _renderItemImage: {
    width: '100%',
    height: RFValue(150),
    overflow: 'hidden',
    // borderRadius: 10,
    marginBottom: RFValue(5),
    resizeMode: 'cover',
  },
  _renderItemTitle: {
    letterSpacing: 1,
    color: '#000',
    fontSize: RFValue(15),
  },
  _renderItemSubtitle: {
    letterSpacing: 1,
    color: '#aaa',
    fontSize: RFValue(10),
  },
  ListHeaderComponentStyle: {
    margin: 0,
    backgroundColor: blue,
    paddingVertical: RFValue(10),
    marginBottom: RFValue(10),
    paddingHorizontal: RFValue(10),
    alignItems: 'center',
  },
});

// const mapStateToProps = (state) => {
//   return {
//     productList: state.productList,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     UpdatedProductAction: (productList, itemID, extraInfo) =>
//       dispatch(UpdatedProductAction(productList, itemID, extraInfo)),
//   };
// };
