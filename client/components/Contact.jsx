import React from 'react';
import { Item} from 'semantic-ui-react';
import Languages from './Languages.jsx';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';

const contactButtonStyle = {
  padding: '13px 23px',
  fontColor: 'black',
  borderRadius: '8px',
  borderWidth: '1px',
  cursor: 'pointer',
  background: 'transparent'
}

const Contact = ({languages, responseRate, responseTime}) => (
  <Item.Group style={{padding: '0px'}}>
    {languages.length > 0 ? <Languages languages={languages}/> : null}
    <Item>
      <Item.Content>
        Response rate: {responseRate}%
      </Item.Content>
    </Item>
    <Item>
      <Item.Content>
        Response time: {responseTime}
      </Item.Content>
    </Item>
    <Item style={{marginTop: '32px'}}>
      <Item.Content>
      <button style={contactButtonStyle}><h3>Contact host</h3></button>
      </Item.Content>
    </Item>
    <Item style={{marginTop: '24px'}}>
      <Item.Content style={{display: 'flex'}}>
      <SecurityRoundedIcon style={{marginRight: '16px', display: 'block'}}/>
      To Protect your payment, never transfer money or communicate outside of the Airbnb website or app.
      </Item.Content>
    </Item>
  </Item.Group>

)

export default Contact;