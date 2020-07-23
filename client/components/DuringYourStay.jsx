import React from 'react';
import { Item } from 'semantic-ui-react';

const DuringYourStay = ({duringYourStay}) => (
  <Item>
    <Item.Content>
        <h5>During your stay</h5>
      <Item.Description>
      {duringYourStay}
      </Item.Description>
    </Item.Content>
  </Item>
)

export default DuringYourStay;