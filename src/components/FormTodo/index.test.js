import React from 'react';
import { render, screen } from '@testing-library/react';

import FormTodo from './index';

const defaultProps = {
    handleAddItem: jest.fn(),
}

const setup = (propOverrides = {}) => {
    const props = {
      ...defaultProps,
      ...propOverrides,
    };
  
    const view = render(<FormTodo {...props} />);
  
    return {
      props,
      view
    };
};

describe('<FormTodo />', () => {
    it('should match snapshot', () => {
        const { view } = setup();
        const Button = screen.getByText('Crear tarea');
        expect(Button).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
