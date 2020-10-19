import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import {
  FiEdit,
  FiFeather,
  FiBookOpen,
  FiArrowLeft,
  FiCalendar,
} from 'react-icons/fi';
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
import { getValidationErrors, dateConverter } from 'utils';

import { Layout, Input, TextArea, Button, Loader } from 'components';

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
  const [dragon, setDragon] = useState<IDragons>({} as IDragons);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = (await getDragon(params.id)).data;
    const data = {...response, formattedDate: dateConverter(response.createdAt)};
    setDragon(data);
    setLoading(false);
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

  const checkParamIdForTheButton = useMemo(() => params.id ? 'Atualizar' : 'Criar', [params.id]);

  const checkParamIdForTheTitle = useMemo(() => params.id ? 'Editar' : 'Criar', [params.id]);

  const checkParamIdForThePlaceholderAndValueInputs = useMemo(() => {
    if (dragon!.name) {
      return dragon!.name;

    } else if (dragon!.type) {
      return dragon!.type;

    } else if (dragon!.createdAt) {
      return dragon!.formattedDate;

    } else if (dragon!.histories) {
      return dragon!.histories[0];
    }

    else {
      return '';
    }
  }, [dragon]);

  const verifyLoading = useMemo(() => loading && <Loader />, [loading]);

  return (
    <>
      {verifyLoading}
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
          <h2>{checkParamIdForTheTitle} Dragão</h2>
          </DragonTitleContainer>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <DragonDetailsContentContainer>
              <DragonDetailsInputContainer>
                <span>Nome</span>
                <Input
                  name="name"
                  iconSize={20}
                  icon={FiEdit}
                  placeholder={checkParamIdForThePlaceholderAndValueInputs}
                />
              </DragonDetailsInputContainer>

              <DragonDetailsInputContainer>
                <span>Tipo</span>
                <Input
                  name="type"
                  iconSize={20}
                  icon={FiFeather}
                  placeholder={checkParamIdForThePlaceholderAndValueInputs}
                />
              </DragonDetailsInputContainer>

              {params.id && (
                <DragonDetailsInputContainer>
                  <span>Data de criação</span>
                  <Input
                    name="createdAt"
                    iconSize={20}
                    icon={FiCalendar}
                    value={checkParamIdForThePlaceholderAndValueInputs}
                  />
                </DragonDetailsInputContainer>
              )}
            </DragonDetailsContentContainer>

            <DragonDetailsContentContainer>
              <DragonDetailsTextAreaContainer>
                <span>História</span>
                <TextArea
                  name="histories"
                  iconSize={20}
                  icon={FiBookOpen}
                  placeholder={checkParamIdForThePlaceholderAndValueInputs}
                />
              </DragonDetailsTextAreaContainer>
            </DragonDetailsContentContainer>

            <DragonDetailsContentContainer>
              <Button type="submit">
                {checkParamIdForTheButton}
              </Button>
            </DragonDetailsContentContainer>
          </Form>
        </DragonDetailsContainer>
      </Layout>
    </>
  );
};
