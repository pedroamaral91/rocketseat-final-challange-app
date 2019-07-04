import React, { useState } from 'react';
import api from '~/services/api';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Spinner from '~/components/UI/Spinner'
import PropTypes from 'prop-types';

import {
  Container,
  InputText,
  Logo,
  Buttom,
  TextButtom,
  TextError,
  Wrapper,
} from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo nome é requerido'),
  email: Yup.string()
    .email()
    .required('Campo email é requerido'),
  password: Yup.string()
    .required()
    .min(6),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

function Signup({ navigation }) {
  const [loading, setLoading] = useState(false)
  async function handleSubmitForm(data) {
    setLoading(true)
  }

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
          {({
            name, email, password, handleChange, handleSubmit, errors, touched,
          }) => (
            <>
              <InputText
                value={name}
                onChangeText={handleChange('name')}
                placeholder="Nome completo"
              />
              {errors.name && touched.name ? (
                <TextError>{errors.name}</TextError>
              ) : null}
              <InputText
                value={email}
                onChangeText={handleChange('email')}
                placeholder="Seu email"
              />
              {errors.email && touched.email ? (
                <TextError>{errors.email}</TextError>
              ) : null}
              <InputText
                value={password}
                onChangeText={handleChange('password')}
                placeholder="Senha secreta"
                secureTextEntry
              />
              {errors.password && touched.password ? (
                <TextError>{errors.password}</TextError>
              ) : null}
              <Buttom onPress={handleSubmit}>
                {loading ? <Spinner /> : <TextButtom>Criar conta</TextButtom>}
              </Buttom>
            </>
          )}
        </Formik>
        <Buttom noBackGroundColor onPress={() => navigation.navigate('Login')}>
          <TextButtom>Já tenho login</TextButtom>
        </Buttom>
      </Wrapper>
    </Container>
  );
}

Signup.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Signup;
