import React from 'react';
import { render, screen } from '@testing-library/react';

import Filters from './index';

const defaultProps = {
  setStatusFilter: jest.fn(),
  setPriorityFilter: jest.fn(),
}

const setup = (propOverrides = {}) => {
    const props = {
      ...defaultProps,
      ...propOverrides,
    };
  
    const view = render(<Filters {...props} />);
  
    return {
      props,
      view
    };
};

describe('<Filters />', () => {
    it('should match snapshot', () => {
        const { view } = setup();
        const Button = screen.getByText('Filtar por:');
        expect(Button).toBeInTheDocument();
        expect(view).toMatchSnapshot();
    });
});
