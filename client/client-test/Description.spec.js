import React from 'react';
import Description from '../components/Description';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  let props = {
    description: 'Explicabo nisi dolorum. Accusantium quam eum sint voluptas molestiae ullam ad. Ipsa est illo doloremque itaque. Excepturi quia reprehenderit qui ex architecto.',
    superhost: null,
    duringYourStay: null,
    name: 'Marg Rob'
  }
  beforeEach( () => {
    component = shallow(<Description description={props.description} superhost={props.superhost} duringYourStay={props.duringYourStay} name={props.name}/>)
  });

  test("should render initial layout", () => {
    const component = shallow(<Description description={props.description} superhost={props.superhost} duringYourStay={props.duringYourStay} name={props.name} />);
    expect(component.getElements()).toMatchSnapshot();
  });

});


