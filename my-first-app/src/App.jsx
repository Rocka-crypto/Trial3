import ProfileCard from './Components/ProfileCard'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <ProfileCard
        name="Collins Wachira"
        role="System Developer"
        location="Nairobi, Kenya"
        bio="Passionate about AI and community tech solutions."
      />
      <ProfileCard
        name="David Chen"
        role="Marketer"
        location="Sydney, Australia"
        bio="Marketing enthusiast with a passion for digital strategies."
      />
      <ProfileCard
        name="Sofia Martinez"
        role="UX Designer"
        location="Madrid, Spain"
        bio="Dedicated to creating user-centered design solutions."
      />
      <ProfileCard
      name="Amina Osei"
        role="Data Scientist"
        location="Accra, Ghana"
        bio="Turning raw data into meaningful insights for Africa."
      />
      <ProfileCard
        name="Liam Thompson"
        role="Frontend Developer"
        location="Toronto, Canada"
        bio="Building beautiful, accessible web experiences."
      />
    </div>
  )
}


export default App