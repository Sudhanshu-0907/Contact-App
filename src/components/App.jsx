import React from "react";
import Contacts from "../contacts"
import Card from "./Card";


function createCard(contact)
{
  return (
    <Card 
    key={contact.id}
    name={contact.name} 
    src={contact.imgURL} 
    tel={contact.phone} 
    email={contact.email}
    id={contact.id} />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* <Image link="/sudha.jpg" /> */}
      {/* <Card name={Contacts[0].name} src={Contacts[0].imgURL} tel={Contacts[0].phone} email={Contacts[0].email} />
      <Card name={Contacts[1].name} src={Contacts[1].imgURL} tel={Contacts[1].phone} email={Contacts[1].email} />
      <Card name={Contacts[2].name} src={Contacts[2].imgURL} tel={Contacts[2].phone} email={Contacts[2].email} /> */}

      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
