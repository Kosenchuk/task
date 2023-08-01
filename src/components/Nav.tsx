import React from 'react';
import { Menu, MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'FIRST',
        key: 'first'
    },
    {
        label: 'SECOND',
        key: 'second'
    },
    {
        label: 'SOME THIRD TEXT',
        key: 'third'
    },
];

export const Nav: React.FC = () => {
    return <Menu className="nav" mode="horizontal" items={items} selectable={false} />;
};