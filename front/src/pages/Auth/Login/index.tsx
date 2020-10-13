import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from 'hooks/AuthContext';
import { getValidationErrors } from 'utils';

import { Button, Input } from 'components';

import { LoginContainer, LoginContent, LoginBackground } from './styles';

import 'react-toastify/dist/ReactToastify.css';

interface IFormData {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { logIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        logIn({
          email: data.email,
          password: data.password,
        });
      } catch (e) {
        const errors = getValidationErrors(e);
        formRef.current?.setErrors(errors);
        toast('Usuário e/ou senha inválidos!');
      }
    },
    [logIn],
  );

  return (
    <>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

      <LoginContainer>
        <LoginBackground />
        <LoginContent>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Entrar</h1>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              icon={FiMail}
              iconSize={20}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
              iconSize={24}
            />
            <Button type="submit">Entrar</Button>
          </Form>
          <Link to="/logon">
            <FiLogIn />
            Criar conta
          </Link>
        </LoginContent>
      </LoginContainer>
    </>
  );
};
