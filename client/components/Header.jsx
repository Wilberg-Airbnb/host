import React from 'react';
import { Image } from 'semantic-ui-react';

const badge = `${window.location.href}superhost_badge.png`;

const badgePosition = {
  position: 'relative',
  left: '45px',
  bottom: '23px'
};

const Header = ({name, superhost, img, joined}) => (
  <div style={{border: '1px solid black'}}>
  <Image circular width={56} src={img}/>
  {superhost === true ? <Image height={23} position={'absolute'} right={'0px'} bottom={'0px'} src={badge} style={badgePosition}/> : null}
  </div>
)

export default Header;