/* eslint-disable testing-library/no-node-access */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TaskData from './index';

const defaultProps = {
    data: {
        description: "Descripcion",
        id: "1648826951727",
        priority: "HIGH",
        status: "NEW",
        title: "Titulo"
    },
    onChangeHandler: jest.fn(),
    deleteTask: jest.fn(),
}

const setup = (propOverrides = {}) => {
    const props = {
      ...defaultProps,
      ...propOverrides,
    };
  
    const view = render(<TaskData {...props} />);
  
    return {
      props,
      view
    };
};

describe('<TaskData />', () => {
    it('should match snapshot', () => {
        const { view } = setup();
        const title = screen.getByText('Titulo');
        expect(title).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });

    it('should call onChangeHandler when select priority change', () => {
        const { props } = setup();
        const select = document.getElementById('select-priority');
        
        expect(select).toBeInTheDocument();
        fireEvent.change(select, { target: { value: 'LOW' } })
        
        expect(props.onChangeHandler).toBeCalled();
    });

    it('should call onChangeHandler when select status change', () => {
        const { props } = setup();
        const select = document.getElementById('select-status');
        
        expect(select).toBeInTheDocument();
        fireEvent.change(select, { target: { value: 'IN_PROGRESS' } })
        
        expect(props.onChangeHandler).toBeCalled();
    });
});
