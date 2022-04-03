/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TaskList from './index';

const defaultProps = {
    list: [{
        description: "Descripcion",
        id: "1648826951727",
        priority: "HIGH",
        status: "NEW",
        title: "Titulo"
    }],
    setList: jest.fn(),
    priorityFilter: 'all',
    statusFilter: 'NEW',
}

const setup = (propOverrides = {}) => {
    const props = {
      ...defaultProps,
      ...propOverrides,
    };
  
    const view = render(<TaskList {...props} />);
  
    return {
      props,
      view
    };
};

describe('<TaskList />', () => {
    it('should match snapshot', () => {
        const { view } = setup();
        const title = screen.getByText('Titulo');
        expect(title).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should match snapshot with no tasks', () => {
        const { view } = setup({ list: [] });
        const title = screen.getByText('No hay tareas cargadas');
        expect(title).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should match snapshot with no results', () => {
        const { view } = setup({ priorityFilter: 'LOW', });
        const title = screen.getByText('No se encontro ningun resultado');
        expect(title).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
