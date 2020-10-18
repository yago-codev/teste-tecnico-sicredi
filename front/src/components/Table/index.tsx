import React, { HTMLAttributes, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiFilter, FiEye, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { IDragons, deleteDragon } from 'services/dragons';

import { Modal } from 'components';

import {
  TableContainer,
  TableTopContainer,
  TableFilterContainer,
  TableButtonContainer,
  TableCustomButton,
  TableContent,
  TableHeader,
  TableBody,
} from './styles';

import 'react-toastify/dist/ReactToastify.css';

interface ITableProps extends HTMLAttributes<HTMLInputElement> {
  headerTitles: string[];
  bodyContent: IDragons[];
  filter: (e: React.ChangeEvent<HTMLInputElement>) => any;
  customButtonName?: string;
  customButtonLink?: string;
  customButtonIcon?: React.ComponentType<IconBaseProps>;
  fetchData: () => void;
}

export const Table: React.FC<ITableProps> = ({
  headerTitles,
  bodyContent,
  filter,
  customButtonName: CustomButton,
  customButtonLink,
  customButtonIcon: CustomButtonIcon,
  fetchData,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClickDeleteDragon = useCallback(
    async (id?: string) => {
      try {
        id && (await deleteDragon(id!));
        setOpenModal(false);
        toast('O dragão foi deletado com sucesso!');
      } catch (e) {
        toast('Houve um erro ao tentar deletar o dragão!');
      } finally {
        fetchData();
      }
    },
    [fetchData],
  );

  const handleClickVerifyModal = useCallback(() => {
    openModal ? setOpenModal(false) : setOpenModal(true);
  }, [openModal]);

  return (
    <>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />

      <TableContainer>
        <TableTopContainer>
          <TableFilterContainer>
            <FiFilter size={20} color="#9B9FB5" />
            <input
              type="text"
              placeholder="Filtrar dragão pelo nome..."
              onChange={(e) => filter(e)}
            />
          </TableFilterContainer>

          <TableButtonContainer>
            {CustomButton && (
              <Link to={customButtonLink!}>
                <TableCustomButton type="button">
                  {CustomButtonIcon && <CustomButtonIcon />}
                  {CustomButton}
                </TableCustomButton>
              </Link>
            )}
          </TableButtonContainer>
        </TableTopContainer>

        <TableContent>
          <TableHeader>
            <tr>
              {headerTitles.map((title) => (
                <th key={title}>{title}</th>
              ))}
            </tr>
          </TableHeader>
          <TableBody>
            {bodyContent
              .sort((a: IDragons, b: IDragons) =>
                a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0,
              )
              .map((content) => (
                <tr key={content.id}>
                  <td>{content.id}</td>
                  <td>{content.name}</td>
                  <td>{content.type}</td>
                  <td>{content.formattedDate}</td>
                  <td>
                    <button className="first-button">
                      <Link to={`/dragon/${content.id}`}>
                        <FiEye />
                        Ver
                      </Link>
                    </button>
                  </td>

                  <td>
                    <button
                      className="second-button"
                      onClick={handleClickVerifyModal}
                    >
                      <FiTrash />
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
          </TableBody>
        </TableContent>
      </TableContainer>
      {bodyContent.map(
        (content) =>
          openModal && (
            <Modal
              key={content.id}
              message="Você tem certeza que deseja excluir o dragão?"
              action={() => handleClickDeleteDragon(content.id)}
              handleClickVerifyModal={handleClickVerifyModal}
            />
          ),
      )}
    </>
  );
};
