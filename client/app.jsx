import React from 'react';
import ReactDOM from 'react-dom';

class Host extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>Host</div>
    )
  }
}

ReactDOM.render(<Host />, document.getElementById('app'));