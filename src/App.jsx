
import './App.css'
import Avatar from './Components/Avatar'
import Card from './Components/Card'
import contacts from './Contacts'


function createCard(contact)
{
  return (
    <Card
      id={contact.id}
      key={contact.id}
      
      name={contact.name}
      img={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  )
}



function App() {


  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      {contacts.map(createCard)}
    </>
  )
}

export default App
