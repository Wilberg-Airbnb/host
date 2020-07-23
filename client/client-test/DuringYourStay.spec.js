import React from 'react';
import DuringYourStay from '../components/DuringYourStay.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {
  let component;
  let prop = 'Commodi perspiciatis ullam et quod ipsa est porro. Ratione maiores rerum soluta sed. Dolores adipisci rerum sed omnis distinctio et facere cupiditate. Ut deserunt quo non praesentium id. Excepturi itaque adipisci consectetur voluptatibus. Sequi consequatur voluptatum et dolor.'
  beforeEach( () => {
    component = shallow(<DuringYourStay duringYourStay={prop}/>)
  });

  test("should render initial layout", () => {
    const component = shallow(<DuringYourStay duringYourStay={prop} />);
    expect(component.getElements()).toMatchSnapshot();
  });

});


