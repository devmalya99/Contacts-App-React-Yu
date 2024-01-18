
import './App.css'
import Card from './Components/Card'
import contacts from './Contacts'
function App() {
  return (
    <>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />

<Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />

    </>
  )
}

export default App
