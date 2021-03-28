import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import HeaderImageScrollView, {
  TriggeringView,
} from 'react-native-image-header-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';

const MIN_HEIGHT = 200;
const MAX_HEIGHT = 300;

const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  title: {
    fontSize: RFValue(20),
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    // padding: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cccccc',
    // backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: RFValue(15),
    textAlign: 'justify',
  },
  keywords: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  keywordContainer: {
    // backgroundColor: '#999999',
    borderRadius: RFValue(10),
    margin: RFValue(10),
    padding: RFValue(10),
  },
  keyword: {
    fontSize: RFValue(15),
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
    marginTop: 0,
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: RFValue(15),
  },
  navTitleView: {
    // height: 70,
    // justifyContent: 'f',
    alignItems: 'center',
    paddingBottom: RFValue(10),
    opacity: 1,
  },
  navTitle: {
    color: 'white',
    fontSize: RFValue(15),
    backgroundColor: 'transparent',
  },
  body: {
    // height: 600,
    // height: '',
    flex: 1,
  },
});

export default class _HeaderScrollExample extends Component {
  constructor(props) {
    super(props);
    this.state = { showNavTitle: false };
  }

  render() {
    const {
      children,
      maxHeight,
      minHeight,
      maxOverlayOpacity,
      minOverlayOpacity,
      fadeOutForeground,
      renderHeader,
      renderFixedForeground,
      renderFixedForegroundStyle,
      renderForeground,
      renderForegroundStyle,
      TriggeringComponent,
      themeColor,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <HeaderImageScrollView
          maxHeight={RFValue(maxHeight)}
          minHeight={RFValue(minHeight, 580)}
          maxOverlayOpacity={maxOverlayOpacity}
          minOverlayOpacity={minOverlayOpacity}
          fadeOutForeground={fadeOutForeground}
          renderHeader={
            () =>
              // <View
              //   style={{ ...styles.image, backgroundColor: blue }}
              // >
              renderHeader
            // </View>
          }
          renderFixedForeground={() => (
            <Animatable.View
              style={{ ...styles.navTitleView, ...renderFixedForegroundStyle }}
              ref={(navTitleView) => {
                this.navTitleView = navTitleView;
              }}
            >
              {renderFixedForeground}
            </Animatable.View>
          )}
          renderForeground={() => (
            <View
              style={{ ...styles.titleContainer, ...renderForegroundStyle }}
            >
              {renderForeground}
            </View>
          )}
          bounces={false}
          bouncesZoom={false}
          disableHeaderGrow={true}
          // foregroundParallaxRatio={2}
          fixedForegroundContainerStyles={{ backgroundColor: themeColor }}
        >
          <TriggeringView
            style={styles.section}
            onHide={() => this.navTitleView.fadeInUp(RFValue(200))}
            onDisplay={() => this.navTitleView.fadeOut(RFValue(100))}
          >
            {TriggeringComponent}
          </TriggeringView>

          <View style={styles.body}>{children}</View>
        </HeaderImageScrollView>
      </View>
    );
  }
}
