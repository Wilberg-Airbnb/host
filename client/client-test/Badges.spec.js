import React from 'react';
import Badges from '../components/Badges.jsx';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter() });
 
describe('Renders Components', () => {

  let component;
  let props = {
    verification: 'Identity verified',
    superhost: true,
    listingIds: ['4','5']
    };
  beforeEach( () => {
    component = shallow(<Badges verifcation={props.verification} superhost={props.superhost} listingIds={props.listingIds}/>)
  });

  test("should render initial layout", () => {
    const component = shallow(<Badges verifcation={props.verification} superhost={props.superhost} listingIds={props.listingIds}/>);
    expect(component.getElements()).toMatchSnapshot();
  });


});


