import React from 'react';
import './index.css'

class ContactsVisable extends React.Component {

  // this.props
  render() {
    return (
      <div className="body3"> <h2 className="font3">Contact List</h2>
       {
         this.props.contacts.map((value, index) => {
           return <p className="font3" key={index}>{value.name} , {value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default ContactsVisable;