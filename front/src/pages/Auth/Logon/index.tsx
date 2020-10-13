import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiMail, FiLock } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { getValidationErrors } from 'utils';
import { createUser } from 'services/auth';

import { Button, Input } from 'components';

import { LogonContainer, LogonContent, LogonBackground } from './styles';

import 'react-toastify/dist/ReactToastify.css';

interface IFormData {
  email: string;
  password: string;
}

export const Logon: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: IFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await createUser(data.email, data.password);

      toast('Conta criada com sucesso!');
    } catch (e) {
      const errors = getValidationErrors(e);
      formRef.current?.setErrors(errors);
      toast('Houve um erro ao tentar criar sua conta!');
    }
  }, []);

  return (
    <>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

      <LogonContainer>
        <LogonContent>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Criar Conta</h1>
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
              iconSize={20}
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/login">
            <FiHome />
            Acesse sua conta
          </Link>
        </LogonContent>
        <LogonBackground />
      </LogonContainer>
    </>
  );
};
