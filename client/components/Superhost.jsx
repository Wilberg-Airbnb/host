import React from 'react';
import {List, Item} from 'semantic-ui-react';

const headerStyle = {
  fontWeight: '600'
};

const Superhost = ({name}) => (
  <Item>
    <Item.Content>
    
        {name.split(' ')[0]} is a Superhost
      </Item.Meta>
      <Item.Description>
      Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
      </Item.Description>
    </Item.Content>
  </Item>
)

export default Superhost;