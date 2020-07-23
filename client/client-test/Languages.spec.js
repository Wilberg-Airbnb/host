import React from 'react';
import Languages from '../components/Languages.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;

  beforeEach( () => {
    component = shallow(<Languages languages={['English', 'Spanish']}/>)
  });

  test("should render initial layout", () => {
    const component = shallow(<Languages languages={['English', 'Spanish']} />);
    expect(component.getElements()).toMatchSnapshot();
  });

});


