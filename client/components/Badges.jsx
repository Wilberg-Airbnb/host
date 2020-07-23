import React from 'react';
import {Icon, Segment, List, Grid} from 'semantic-ui-react';
import axios from 'axios';
import { VerifiedUserRounded, StarRounded, CheckCircleRounded } from '@material-ui/icons';
// import VerifiedUserRoundedIcon from '@material-ui/icons/Veri';

const iconStyle = {
  color: '#FF385C',
  verticalAlign: 'bottom'
};

const contentStyle = {
  marginLeft: '6px',
  display: 'inline'
}

class Badges extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    reviews: null
    }
  }

  componentDidMount(){

    const url = 'http://ec2-3-129-14-177.us-east-2.compute.amazonaws.com:8080/api/reviews';
    // const url = 'http://localhost:2000/api/reviews';
    const options = {
      params: { array: JSON.stringify(this.props.listingIds)},
  
    };

    axios.get(url, options)
    .then ( (res) => {
      const reviews = res.data;
      console.log(reviews);
      this.setState({reviews});
    })
    .then( (err) => {
      console.log(err);
    });
  }

  render(){

 
    return(
    <List horizontal relaxed>
      <List.Item >
        <StarRounded style={iconStyle}/>
        <List.Content style={contentStyle}>
          {this.state.reviews} Reviews
        </List.Content>
      </List.Item>
      {(this.props.verification === "Identity verified") ?
      <List.Item>
        <VerifiedUserRounded style={iconStyle}/>
        <List.Content style={contentStyle}>
          Identity verified
        </List.Content>
      </List.Item>
        : 
        <List.Item>
        <CheckCircleRounded style={iconStyle}/>
        <List.Content style={contentStyle}>
          Verified
        </List.Content>
      </List.Item>}
        {this.props.superhost ?
          <List.Item>
            <List.Content style={contentStyle}>
            <i className="material-icons" style={iconStyle}>military_tech</i>
              Superhost
            </List.Content>
          </List.Item>: null}
    </List>)
  }
}

export default Badges;