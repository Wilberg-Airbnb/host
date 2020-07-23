import React from 'react';
import Host from '../components/App.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  beforeEach( () => {
    component = shallow(<Host/>)
  });

  test("Make sure componentdidMount is successfully called", () => {
    const componentdidMountSpy = spyOn(Host.prototype, 'componentDidMount');
    const component = shallow(<Host />);
    expect(componentdidMountSpy).toHaveBeenCalledTimes(1);
  });

});


