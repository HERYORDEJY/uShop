import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import _CartNavBar from '../../components/CartNavBar';
import _Text from '../../components/Text';
import { _lightGreen } from '../../styles/color';
import * as COLOR from '../../styles/color';
import normzer from '../../utils/normalizer';
import _CreditCard from '../../components/_CreditCard';
import Swiper from 'react-native-swiper';
import * as COLORS from '../../styles/color';
import { RFValue } from 'react-native-responsive-fontsize';
import { _screenTheme } from '../../styles/themes';
import CreditCardDisplay from 'react-native-credit-card-display';
import { Container, Content } from 'native-base';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';

const CreditCards = ({ editable = true, ...props }) => {
  const { route } = props;
  const bgc = _screenTheme.CreditCards.theme;
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  //
  const navigation = useNavigation();
  let { params } = route;
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const { creditCardList } = data;
  //
  const onDelete = () => {
    dispatch(DeleteCreditCardAction(creditCardList, creditCardID));
  };
  const onEdit = () => {
    navigation.navigate('EditCreditCard', { creditCardID: creditCardID });
  };
  //
  return (
    <Container style={styles.container}>
      <StatusBar backgroundColor={bgc} barStyle={'light-content'} />
      <_CartNavBar
        screenTitle={'SAVED CREDIT CARDS'}
        backgroundColor={bgc}
        leftIconName={'chevron-thin-left'}
        leftIconType={'entypo'}
      />
      <View
        style={{
          marginVertical: RFValue(20),
          paddingHorizontal: RFValue(20),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <_Text text={'Your Saved Cards'} color={'#999'} fontSize={15} />
        <TouchableOpacity onPress={() => navigation.navigate('AddCreditCard')}>
          <_Text text={'Add New Card'} color={bgc} fontSize={15} />
        </TouchableOpacity>
      </View>

      <Content
        contentContainerStyle={{ alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        horizontal={false}
      >
        {/* <CreditCardDisplay
          number={4242424242424242}
          cvc={123}
          expiration="04/21"
          name="John J. Doe"
          since="2004"
        /> */}
        {creditCardList.map((card, index) => {
          return (
            <View
              key={index}
              style={{
                ...styles.slide1,
                marginHorizontal: RFValue(20),
                marginBottom: RFValue(20),
                // paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {card.name && (
                <View style={{ width: '100%' }}>
                  {/* <_CreditCard
                    creditCardID={card.id}
                    // cardType={card.type.slug}
                    name={card.name}
                    expiration={card.expiration}
                    number={card.number}
                    cvc={card.cvc}
                    flipped={false}
                    width={'100%'}
                    height={RFValue(200)}
                    fontSize={15}
                    editable={true}
                  /> */}
                  <CreditCardDisplay
                    number={card.number}
                    cvc={card.ccv}
                    expiration={card.expiration}
                    name={card.name}
                    width={responsiveScreenWidth(90)}
                    height={RFValue(200)}
                    fontSize={RFValue(20)}
                    // since="2004"
                  />
                  <Text>{card.id ?? 'No ID'}</Text>
                  {editable && (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginVertical: RFValue(10),
                        position: 'relative',
                        // top: RFValue(10),
                      }}
                    >
                      <TouchableOpacity
                        onPress={onEdit}
                        style={{
                          paddingHorizontal: RFValue(10),
                          paddingVertical: RFValue(10),
                        }}
                      >
                        <_Text
                          text={`Edit`}
                          color={COLORS.grey600}
                          fontSize={15}
                          styles={{ textAlign: 'center' }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          paddingHorizontal: RFValue(10),
                          paddingVertical: RFValue(10),
                        }}
                        onPress={onDelete}
                      >
                        <_Text
                          text={`Delete`}
                          color={COLORS.red600}
                          fontSize={15}
                          styles={{ textAlign: 'center' }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            </View>
          );
        })}
      </Content>
    </Container>
  );
};

export default CreditCards;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  slide1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
