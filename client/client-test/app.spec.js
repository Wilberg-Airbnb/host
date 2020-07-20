import React from 'react';
import Host from '../components/app.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  beforeEach( () => {
    component = shallow(<Host/>)
  });

  test("should render initial layout", () => {
    const component = shallow(<Host />);
    expect(component.getElements()).toMatchSnapshot();
  });

  // test("should create a map in component state", ()=> {
  //   expect(component.contains(<Map />)).toBe(false)
  // });

});


