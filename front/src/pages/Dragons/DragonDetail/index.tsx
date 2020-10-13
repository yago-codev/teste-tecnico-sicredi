import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiEdit, FiFeather, FiBookOpen, FiArrowLeft } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import {
  IDragons,
  getDragon,
  createDragon,
  updateDragon,
} from 'services/dragons';
import { getValidationErrors } from 'utils';

import { Layout, Input, TextArea, Button } from 'components';

import {
  DragonBackLinkContainer,
  DragonDetailsContainer,
  DragonTitleContainer,
  DragonDetailsContentContainer,
  DragonDetailsInputContainer,
  DragonDetailsTextAreaContainer,
} from './styles';

import 'react-toastify/dist/ReactToastify.css';

interface IDetailsParams {
  id: string;
}

interface IFormData {
  name: string;
  type: string;
  histories: string[];
}

export const DragonDetails: React.FC = () => {
  const { params } = useRouteMatch<IDetailsParams>();
  const formRef = useRef<FormHandles>(null);
  const [dragon, setDragon] = useState<IDragons>();

  const fetchData = useCallback(async () => {
    const data = (await getDragon(params.id)).data;
    setDragon(data);
  }, [params]);

  useEffect(() => {
    params.id && fetchData();
  }, [params.id, fetchData]);

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          type: Yup.string().required('Tipo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        params.id
          ? await updateDragon(params.id, data.name, data.type, data.histories)
          : await createDragon(data.name, data.type, data.histories);

        params.id
          ? toast('O dragão foi editado com sucesso!')
          : toast('O dragão foi criado com sucesso!');
      } catch (e) {
        const errors = getValidationErrors(e);
        formRef.current?.setErrors(errors);
      }
    },
    [params.id],
  );

  return (
    <>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

      <Layout>
        <DragonBackLinkContainer>
          <Link to="/dragons">
            <button type="button">
              <FiArrowLeft />
              Voltar
            </button>
          </Link>
        </DragonBackLinkContainer>

        <DragonDetailsContainer>
          <DragonTitleContainer>
            <h2>{params.id ? 'Editar' : 'Criar'} Dragão</h2>
          </DragonTitleContainer>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <DragonDetailsContentContainer>
              <DragonDetailsInputContainer>
                <span>Nome</span>
                <Input
                  name="name"
                  iconSize={20}
                  icon={FiEdit}
                  placeholder={dragon?.name}
                />
              </DragonDetailsInputContainer>

              <DragonDetailsInputContainer>
                <span>Tipo</span>
                <Input
                  name="type"
                  iconSize={20}
                  icon={FiFeather}
                  placeholder={dragon?.type}
                />
              </DragonDetailsInputContainer>
            </DragonDetailsContentContainer>

            <DragonDetailsContentContainer>
              <DragonDetailsTextAreaContainer>
                <span>História</span>
                <TextArea
                  name="histories"
                  iconSize={20}
                  icon={FiBookOpen}
                  placeholder={dragon?.histories}
                />
              </DragonDetailsTextAreaContainer>
            </DragonDetailsContentContainer>

            <DragonDetailsContentContainer>
              <Button type="submit">{params.id ? 'Atualizar' : 'Criar'}</Button>
            </DragonDetailsContentContainer>
          </Form>
        </DragonDetailsContainer>
      </Layout>
    </>
  );
};
