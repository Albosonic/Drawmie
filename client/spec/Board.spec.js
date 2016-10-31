import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
import Board from '../src/app/Board';

describe('<Board />', function () {
  it('renders one <Toolbar /> components', () => {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('ToolBar')).to.have.length(1);
  });

  it('should render one canvas instance', function () {
    const wrapper = shallow(<Board />);
    expect(wrapper.find('canvas')).to.have.length(1);
  });
});