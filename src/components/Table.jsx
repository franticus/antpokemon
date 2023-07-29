import React from 'react';
import { Table, Typography, Image } from 'antd';
import { pokemons } from '../data';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
  },
  {
    title: 'Classification',
    dataIndex: 'classification',
    key: 'classification',
    filters: [
      {
        text: 'Seed Pokémon',
        value: 'Seed Pokémon',
      },
      {
        text: 'Lizard Pokémon',
        value: 'Lizard Pokémon',
      },
    ],
    onFilter: (value, item) => item.classification.includes(value),
  },
  {
    title: 'Rate',
    dataIndex: 'fleeRate',
    key: 'fleeRate',
    sorter: (a, b) => a.fleeRate - b.fleeRate,
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (image) => <Image src={image} width={100} />,
  },
];

const dataSource = pokemons.map((pokemon) => ({ ...pokemon, key: pokemon.id }));

const _Table = () => {
  return (
    <Table 
      dataSource={dataSource}
      columns={columns}
      pagination={{
        pageSize: 3,
      }}
    />
  )
};

export default _Table;
