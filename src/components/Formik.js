import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import _Input from './Input';

import { Formik } from 'formik';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import _Text from './Text';
import { blue, red600 } from '../styles/color';
import { Input } from 'react-native-elements';
import normzer from '../utils/normalizer';

const _Formik = ({
  initialValues,
  onSubmit,
  fieldList = [],
  validationSchema,
}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    correctInputs: true,
    enteredEmail: false,
    enteredPassword: false,
    showPassword: false,
  });

  return (
    <View style={{ backgroundColor: '#000' }}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isSubmitting,
        }) => {
          {
            fieldList.map((field, index) => (
              <View style={{ marginVertical: 15, height: 55 }}>
                <_Input
                  placeholderTextColor={'rgba(255, 255, 255, 0.3)'}
                  placeholder={field.placeholder}
                  style={{ flex: 1 }}
                  // label={'Username'}
                  // labelStyle={{ color: '#fff' }}
                  caretHidden={false}
                  inputStyle={{
                    color: 'white',
                    fontSize: responsiveFontSize(2.5),
                  }}
                  inputContainerStyle={{
                    backgroundColor: 'red',
                    borderBottomWidth: 0.5,
                    borderColor: 'white',
                  }}
                  onChangeText={handleChange(`${field.slug}`)}
                  onBlur={handleBlur(`${field.slug}`)}
                  value={field.slug}
                  touched={field.slug}
                  error={field.slug}
                />
              </View>
            ));
          }
        }}
      </Formik>
    </View>
  );
};

export default _Formik;

const styles = StyleSheet.create({
  container: {},
  formBody: { marginTop: 10 },
  formItem: {
    borderBottomWidth: 0,
    marginLeft: 0,
    marginBottom: 30,
  },
  formLabel: {
    // paddingLeft: 30,
    backgroundColor: '#fff',
    fontSize: responsiveFontSize(2),
    marginBottom: 5,
    marginLeft: 20,
    display: 'none',
  },
  formInputBody: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  formInputIcon: { alignSelf: 'center', marginLeft: 10 },
  formInput: {
    paddingHorizontal: 20,
    flex: 1,
    textDecorationLine: 'none',
    paddingLeft: 5,
    color: '#000',
    fontSize: responsiveFontSize(2),
  },
});
