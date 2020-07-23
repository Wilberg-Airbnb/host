import React from 'react';
import Superhost from '../components/Superhost.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  beforeEach( () => {
    component = shallow(<Superhost name={'Marg Rob'}/>)
  });

  test("should render initial layout", () => {
    const component = shallow(<Superhost name={'Marg Rob'} />);
    expect(component.getElements()).toMatchSnapshot();
  });

});


