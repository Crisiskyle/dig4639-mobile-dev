import React from 'react';
import './index.css'


class Profile extends React.Component {

  render() {
    return (
      <div className="body4"> <h2 className="something4">Name List Count</h2>
        { 
        this.props.profile.map((value, index) => {
          return <p className ="something4" key={index}> {value.name}, {value.count}</p> ;
        })
       }
      </div>
    );
  }
}

export default Profile;