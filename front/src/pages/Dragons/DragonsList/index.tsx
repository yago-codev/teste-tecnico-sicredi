import React, { useState, useEffect, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';

import { IDragons, getDragons } from 'services/dragons';
import { dateConverter } from 'utils';

import { Layout, Table } from 'components';

export const DragonsList: React.FC = () => {
  const [dragons, setDragons] = useState<IDragons[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = (await getDragons()).data;
      const data = response.map(dragon => ({
        ...dragon,
        formattedDate: dateConverter(dragon.createdAt)
      }));
      setDragons(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const headerTitles = ['ID', 'Nome', 'Tipo', 'Data de criação', '', ' '];

  const filter = useCallback(
    (e) => {
      const filteredDragons = dragons.filter((content) =>
        content.name.toLowerCase().includes(e.target.value.toLowerCase()),
      );

      setDragons(filteredDragons);

      !e.target.value && fetchData();
    },
    [dragons, fetchData],
  );

  return (
    <Layout>
      <Table
        headerTitles={headerTitles}
        bodyContent={dragons}
        filter={filter}
        customButtonName="Criar"
        customButtonLink="/dragons/create"
        customButtonIcon={FiPlus}
        fetchData={fetchData}
      />
    </Layout>
  );
};
