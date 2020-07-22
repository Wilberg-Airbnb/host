import React from 'react';
import { Image } from 'semantic-ui-react';

const badge = `${window.location.href}superhost_badge.png`;

const badgePosition = {
  position: 'absolute',
  left: '47px',
  top: '35px'
};

const Header = ({name, superhost, img, joined}) => (
  <div style={{ display: 'flex', marginBottom: '24px'}}>
  <Image style={{marginRight: '16px'}} circular width={56} src={img}/>
  {superhost ? <Image height={23} src={badge} style={badgePosition} /> : null}
  {name !== null ? <div><h2 style={{marginBottom: '0px'}}>Hosted by {name.split(' ')[0]}</h2><p style={{color: 'rgb(113, 113, 113)'}}>Joined in {joined.split(' ')[1]} {joined.split(' ')[3]} </p> </div>: null }
  </div>
)

export default Header;