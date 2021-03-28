/* @flow weak */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Container, Content } from 'native-base';
import { Input } from 'react-native-elements';
import { blue, red600 } from '../../styles/color';
import {
  responsiveFontSize,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import _Text from '../../components/Text';
import normzer from '../../utils/normalizer';
import { Formik } from 'formik';
import _ButtonAuth from '../../components/ButtonAuth';
import {
  signinInitialValues,
  SignInDataSchema,
  signupInitialValues,
} from '../../utils/dataSchema';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { SignInAction, SignUpAction } from '../../redux/bio/actions';
import { useDispatch } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize';
import _Input from '../../components/Input';

const SignIn = (props) => {
  const [state, setState] = useState({
    isSubmitting: false,
    isSubmittingGoogle: false,
  });
  //
  const dispatch = useDispatch();
  //
  const instructions = () => {
    console.log('values');
  };
  const navigation = useNavigation();
  //
  const stated = useSelector((state) => state);
  //
  const { bio } = stated;
  //
  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm },
  ) => {
    try {
      setState({ ...state, isSubmitting: true });
      await dispatch(SignInAction({ ...values, isSignedIn: true }));
      resetForm(signinInitialValues);
      setStatus({ success: true });
      setState({ ...state, isSubmitting: false });
      navigation.navigate('Home');
    } catch (e) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: e.message });
      console.log(e);
    }
  };
  //

  return (
    <View style={styles.container} onTouchStart={() => Keyboard.dismiss()}>
      <StatusBar barStyle={'light-content'} backgroundColor={blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logi.png')}
          style={styles.logoImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.formWrapper}>
        <Formik
          validationSchema={SignInDataSchema}
          initialValues={signinInitialValues}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isSubmitting,
            isValid,
            dirty,
            resetForm,
          }) => {
            return (
              <View>
                <_Input
                  placeholder={'Email'}
                  text={touched.email && errors.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                <_Input
                  placeholder={'Password'}
                  text={touched.password && errors.password}
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {/* <View style={{ marginVertical: 15, height: 55 }}>
                  <_Text
                    text={touched.email && errors.email}
                    fontSize={15}
                    color={red600}
                    styles={{ marginLeft: 10 }}
                  />
                  <Input
                    placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                    placeholder={'Email'}
                    style={{ flex: 1 }}
                    // label={'Username'}
                    // labelStyle={{ color: '#fff' }}
                    caretHidden={false}
                    inputStyle={{
                      color: 'white',
                      fontSize: responsiveFontSize(2.5),
                    }}
                    inputContainerStyle={{
                      backgroundColor: 'transparent',
                      borderBottomWidth: 0.5,
                      borderColor: 'white',
                    }}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View> */}
                {/* <View style={{ marginVertical: 15, height: 55 }}>
                  <_Text
                    text={touched.password && errors.password}
                    fontSize={15}
                    color={red600}
                    styles={{ marginLeft: 10 }}
                  />
                  <Input
                    placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                    placeholder={'Password'}
                    style={{ flex: 1 }}
                    secureTextEntry={true}
                    // label={'Username'}
                    // labelStyle={{ color: '#fff' }}
                    caretHidden={false}
                    inputStyle={{
                      color: 'white',
                      fontSize: responsiveFontSize(2.5),
                    }}
                    inputContainerStyle={{
                      backgroundColor: 'transparent',
                      borderBottomWidth: 0.5,
                      borderColor: 'white',
                    }}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                </View> */}
                <TouchableOpacity style={styles.forgotContainer}>
                  <_Text styles={styles.forgotText} text={'Forgot password?'} />
                </TouchableOpacity>
                <_ButtonAuth
                  text={'SIGN IN'}
                  textColor={blue}
                  fontSize={15}
                  onPress={handleSubmit}
                  disabled={!(isValid && dirty)}
                  bodyStyle={{
                    backgroundColor: '#fff',
                    paddingVertical: RFValue(10),
                    marginVertical: RFValue(10),
                  }}
                  indicatorColor={'red'}
                  // instructions={instructions}
                  {...{ isSubmitting: state.isSubmitting }}
                  values={values}
                />
                <View style={styles.orContainer}>
                  <_Text styles={styles.orText} text={'OR'} />
                </View>
                <_ButtonAuth
                  text={'SIGN UP USING GOOGLE'}
                  textColor={red600}
                  fontSize={15}
                  onPress={handleSubmit}
                  disabled={!(isValid && dirty)}
                  bodyStyle={{
                    backgroundColor: '#fff',
                    paddingVertical: RFValue(10),
                    marginVertical: RFValue(10),
                  }}
                  indicatorColor={'red'}
                  // instructions={instructionsGoogle}
                  {...{ isSubmitting: state.isSubmittingGoogle }}
                  leftIconName={'google'}
                  leftIconType={'FontAwesome'}
                  leftIconStyle={{
                    marginRight: RFValue(5),
                    color: red600,
                    fontSize: RFValue(15),
                  }}
                  values={values}
                />
              </View>
            );
          }}
        </Formik>
      </View>
      <TouchableOpacity
        style={{ marginTop: RFValue(30) }}
        onPress={() => navigation.navigate('SignUp')}
      >
        <_Text styles={styles.createText} text={'Create an account'} />
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blue,
  },
  logoContainer: {
    marginTop: RFValue(60),
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: RFValue(150),
    height: RFValue(150),
    flex: 1,
    resizeMode: 'contain',
  },
  formWrapper: { marginHorizontal: RFValue(30), marginTop: RFValue(30) },
  forgotContainer: { marginTop: RFValue(15), marginBottom: RFValue(15) },
  forgotText: {
    fontSize: RFValue(15),
    textAlign: 'right',
    color: '#fff',
  },
  orContainer: { marginVertical: RFValue(10) },
  orText: {
    fontSize: RFValue(15),
    color: '#fff',
    textAlign: 'center',
  },
  createText: {
    fontSize: RFValue(15),
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
