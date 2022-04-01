import React from 'react';
import { render, screen } from '@testing-library/react';

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
});
