import React from 'react';
import TestRenderer from 'react-test-renderer';

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
    priorityFilter: '',
    statusFilter: '',
}

const setup = propOverrides => {
    const props = {
      ...defaultProps,
      ...propOverrides,
    };
  
    const wrapper = TestRenderer.create(<TaskList {...props} />);
  
    return {
      props,
      wrapper
    };
};

describe('<TaskList />', () => {
    it('should match snapshot', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
