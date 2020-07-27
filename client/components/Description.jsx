import React from 'react';
import { Item } from 'semantic-ui-react';
import Superhost from './Superhost.jsx';
import DuringYourStay from './DuringYourStay.jsx';
import Badges from './Badges.jsx';



const Description = ({description, superhost, name, duringYourStay, verification, listingIds}) => (
  <Item.Group style={{padding: '0px'}}>
    <Item style={{margin: '0px -12px 24px 0px'}} >
      <Item.Content >
       {superhost !== null ?  <Badges superhost={superhost} verification={verification} listingIds={listingIds}/> : null}
      </Item.Content>
    </Item>
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