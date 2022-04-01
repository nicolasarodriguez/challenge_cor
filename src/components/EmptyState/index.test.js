import React from 'react';
import { render, screen } from '@testing-library/react';

import EmptyState from './index';

const defaultProps = {
  text: "No se encontro ningun resultado",
  image: "no-results.jpg"
}

const setup = (propOverrides = {}) => {
    const props = {
      ...defaultProps,
      ...propOverrides,
    };
  
    const view = render(<EmptyState {...props} />);
  
    return {
      props,
      view
    };
};

describe('<EmptyState />', () => {
  it('should match snapshot no results', () => {
      const { view } = setup();
      const test = screen.getByText('No se encontro ningun resultado');
      expect(test).toBeInTheDocument();
      expect(view).toMatchSnapshot();
  });

  it('should match snapshot no tasks', () => {
    const { view } = setup({
      text: 'No hay tareas cargadas',
      image: 'no-tasks.jpg'
    });
    const test = screen.getByText('No hay tareas cargadas');
    expect(test).toBeInTheDocument();
    expect(view).toMatchSnapshot();
});
});
