import React from 'react';
import Header from './Header.jsx';


class Host extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listingId: window.location.pathname.slice(1, -1),
      languages: null,
      fullName: null,
      joined: null,
      photoUrl: null,
      superhost: null,
      verification: null,
      description: null,
      duringYourStay: null,
      responseRate: null,
      responseTime: null
    }
  }

  componentDidMount() {
    const {listingId} = this.state;
    // const url = `http://${window.location.host}/api/location/${listingId}`;
    const url = `http://localhost:2000/api/host/${listingId}`;
    fetch(url, {method: 'GET'})
    .then ( (results) => {
      return results.json()
    })
    .then( (data) => {
      console.log(data)
      this.setState({
      listingId: data.listingId,
      languages: data.languages,
      fullName: data.fullName,
      joined: data.joined,
      photoUrl: data.photoUrl,
      superhost: data.superhost,
      verification: data.verification,
      description: data.description,
      duringYourStay: data.duringYourStay,
      responseRate: data.responseRate,
      responseTime: data.responseTime
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return(<div>
      { this.state.listingId !== null ?
      <Header name={this.state.fullName} superhost={this.state.superhost} img={this.state.photoUrl} joined={this.state.joined} /> : null}
    </div>)
  }
}

export default Host;