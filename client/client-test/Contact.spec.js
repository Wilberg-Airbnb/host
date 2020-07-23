import React from 'react';
import Contact from '../components/Contact';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  let props = {
    langauges: [],
    responseRate: 88,
    responseTime: 'within an hour'
  }
  beforeEach( () => {
    component = shallow(<Contact languages={props.langauges} responseRate={props.responseRate} duringYourStay={props.duringYourStay} responseTime={props.responseTime}/>)
  });

  test("should render initial layout", () => {
    const component = shallow(<Contact languages={props.langauges} responseRate={props.responseRate} duringYourStay={props.duringYourStay} responseTime={props.responseTime} />);
    expect(component.getElements()).toMatchSnapshot();
  });

});


