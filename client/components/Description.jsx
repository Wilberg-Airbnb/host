import React from 'react';
import { Item } from 'semantic-ui-react';
import Superhost from './Superhost.jsx';
import DuringYourStay from './DuringYourStay.jsx';



const Description = ({description, superhost, name, duringYourStay}) => (
  <Item.Group>
    <Item>
      <Item.Content>
        <Item.Description>
        {description}
        </Item.Description>
      </Item.Content>
    </Item>
    {duringYourStay !== null ? <DuringYourStay duringYourStay={duringYourStay}/> : null}
    {superhost !== null ? <Superhost name={name}/> : null}
  </Item.Group>

)

export default Description;