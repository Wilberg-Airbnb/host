import React from 'react';
import {List, Item} from 'semantic-ui-react';

const headerStyle = {
  fontWeight: '600'
};

const Superhost = ({name}) => (
  <Item>
    <Item.Content>
    
        <h5>{name.split(' ')[0]} is a Superhost</h5>
      <Item.Description>
      Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
      </Item.Description>
    </Item.Content>
  </Item>
)

export default Superhost;