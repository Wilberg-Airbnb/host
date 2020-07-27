import React from 'react';
import Header from './Header.jsx';
// import Badges from './Badges.jsx';
import Description from './Description.jsx';
import Contact from './Contact.jsx';
import {Grid, Container} from 'semantic-ui-react';


class Host extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listingId: window.location.pathname.slice(1, -1),
      listingIds: null,
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
    const listingId = this.state.listingId;
    const url = `http://ec2-3-12-169-208.us-east-2.compute.amazonaws.com:2000/api/host/${listingId}`;
    // const url = `http://localhost:2000/api/host/${listingId}`;
    fetch(url, {method: 'GET'})
    .then ( (results) => {
      return results.json()
    })
    .then( (data) => {
      console.log(data)
      this.setState({
      listingIds: data.listingId,
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
      return 
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    
    return(

      <div>
        { this.state.listingIds !== null
        ? <div>
          <Header name={this.state.fullName} superhost={JSON.parse(this.state.superhost)} img={this.state.photoUrl} joined={this.state.joined} />
          <Grid columns={2} relaxed stackable>
            <Grid.Column>
              <Container>
              {/* <Badges superhost={JSON.parse(this.state.superhost)} verification={this.state.verification} listingIds={this.state.listingIds}/> */}
              <Description description={this.state.description} verification={this.state.verification} listingIds={this.state.listingIds} name={this.state.fullName} superhost={JSON.parse(this.state.superhost)} duringYourStay={this.state.duringYourStay}/>
            </Container>             
            </Grid.Column>
            <Grid.Column>
              <Container>
              <Contact languages={this.state.languages} responseRate={this.state.responseRate} responseTime={this.state.responseTime}/>
              </Container>
            </Grid.Column>
          </Grid>
          </div>
        : null}
      </div>
    )
  }
}

export default Host;