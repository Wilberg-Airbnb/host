import React from 'react';
import {List,Grid, Segment} from 'semantic-ui-react';
import axios from 'axios';
import { VerifiedUserRounded, StarRounded, CheckCircleRounded } from '@material-ui/icons';

const iconStyle = {
  color: '#FF385C',
  verticalAlign: 'bottom'
};

const contentStyle = {
  marginLeft: '6px',
  display: 'inline'
}

const itemStyle = {
  padding: '0px 12px 0px 12px',
  margin: '0px'
}

class Badges extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    reviews: null
    }
  }

  componentDidMount(){

    const url = 'http://52.14.214.44:8080/api/reviews';
    // const url = 'http://localhost:2000/api/reviews';
    const options = {
      params: { array: JSON.stringify(this.props.listingIds)},
  
    };

    axios.get(url, options)
    .then ( (res) => {
      const reviews = res.data;
      // console.log(reviews);
      this.setState({reviews});
    })
    .then( (err) => {
      console.log(err);
    });
  }

  render(){

 
    return(

    <List stackable horizontal >
      <List.Item style={itemStyle}>
        <StarRounded style={iconStyle}/>
        <List.Content style={contentStyle}>
          {this.state.reviews} Reviews
        </List.Content>
      </List.Item>
      {(this.props.verification === "Identity verified") ?
      <List.Item style={itemStyle}>
        <VerifiedUserRounded style={iconStyle}/>
        <List.Content style={contentStyle}>
          Identity verified
        </List.Content>
      </List.Item>
        : 
        <List.Item style={itemStyle}>
        <CheckCircleRounded style={iconStyle}/>
        <List.Content style={contentStyle}>
          Verified
        </List.Content>
      </List.Item>}
        {this.props.superhost ?
          <List.Item style={itemStyle}>
            <i className="material-icons" style={iconStyle}>military_tech</i>
            <List.Content style={contentStyle}>
              Superhost
            </List.Content>
          </List.Item>: null}
    </List>)
  }
}

export default Badges;