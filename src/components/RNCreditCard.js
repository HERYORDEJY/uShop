import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import CreditCardForm, { Button, FormModel } from 'rn-credit-card';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableRipple } from 'react-native-paper';
import _Text from './Text';
import * as COLOR from '../styles/color';
// import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function RNCreditCard({ onSubmitCard }) {
  const formMethods = useForm({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  });
  const { handleSubmit, formState } = formMethods;

  function onSubmit(model) {
    // Alert.alert('Success: ' + JSON.stringify(model, null, 2));
    onSubmitCard({
      id: uuidv4(),
      name: model.holderName,
      number: model.cardNumber,
      expiration: model.expiration,
      ccv: model.cvv,
    });
  }

  return (
    <FormProvider {...formMethods}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.avoider}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <CreditCardForm
            // LottieView={LottieView}
            horizontalStart
            overrides={{
              labelText: {
                marginTop: RFValue(16),
              },
            }}
            fonts={{
              regular: 'Lato',
              bold: 'Lato-Bold',
            }}
            translations={{
              cardNumber: 'Card Number',
              cardHolderName: 'Cardholder Name',
              nameSurname: 'Name Surname',
              mmYY: 'MM/YY',
              expiration: 'Expiration',
              securityCode: 'CCV',
              next: 'Next',
              done: 'Done',
              cardNumberRequired: 'Card number is required.',
              cardNumberInvalid: 'This card number looks invalid.',
              cardHolderNameRequired: 'Cardholder name is required.',
              cardHolderNameInvalid: 'This cardholder name looks invalid.',
              expirationRequired: 'Expiration date is required.',
              expirationInvalid: 'This expiration date looks invalid.',
              securityCodeRequired: 'Security code is required.',
              securityCodeInvalid: 'This security date looks invalid.',
            }}
          />
        </KeyboardAvoidingView>
        {formState.isValid && (
          <TouchableRipple
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            <_Text text={'CONFIRM'} fontSize={15} />
          </TouchableRipple>
        )}
      </SafeAreaView>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avoider: {
    flex: 1,
    padding: RFValue(30),
  },
  button: {
    margin: RFValue(20),
    padding: RFValue(20),
    marginTop: 0,
    backgroundColor: COLOR.green500,
    alignItems: 'center',
  },
});
