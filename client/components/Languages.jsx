import React from 'react';
import { Item } from 'semantic-ui-react';

const Languages = ({languages}) => (
  <Item style={{marginTop: '0px'}}>
    <Item.Content>
      <Item.Description>
        Languages: {languages.join(', ')}
      </Item.Description>
    </Item.Content>
  </Item>
)

export default Languages;