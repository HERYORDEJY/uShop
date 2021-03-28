import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import _Text from './Text';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export default function ModalMenu({
  visible,
  toggleModal,
  component,
  onSwipeComplete,
  swipeDirection = 'left',
  backdropColor = 'black',
  backdropOpacity = 0.7,
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
}) {
  const [state, setState] = useState({
    isModalVisible: visible,
  });

  return (
    <View style={{ flex: 0 }}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}
      <Modal
        isVisible={visible}
        onBackButtonPress={() => toggleModal()}
        hideModalContentWhileAnimating={true}
        onBackdropPress={() => toggleModal()}
        onSwipeComplete={() => onSwipeComplete()}
        swipeDirection="left"
        style={{ margin: 0, flex: 1 }}
        propagateSwipe
        backdropColor={backdropColor}
        backdropOpacity={backdropOpacity}
        animationIn={animationIn}
        animationOut={animationOut}
      >
        <View style={{ flex: 1, justifyContent: 'center' }}>{component}</View>
        {/*{component}*/}
      </Modal>
    </View>
  );
}
