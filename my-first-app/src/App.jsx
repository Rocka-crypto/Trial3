import { useState, useEffect } from 'react';
import ProfileCard from './Components/ProfileCard';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    {
      name: "Collins Wachira",
      role: "System Developer",
      location: "Nairobi, Kenya",
      bio: "Passionate about AI and community tech solutions.",
    },
    {
      name: "David Chen",
      role: "Marketer",
      location: "Sydney, Australia",
      bio: "Marketing enthusiast with a passion for digital strategies.",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    location: "",
  });

  // Update browser tab title whenever the number of cards changes
  useEffect(() => {
    document.title = `${cards.length} profile${cards.length !== 1 ? "s" : ""}`;
  }, [cards]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name.trim()) return; // basic guard

    const newCard = {
      name: formData.name,
      role: formData.role || "No role",
      location: formData.location || "No location",
      bio: "New member of the community.",
    };

    setCards([...cards, newCard]);
    setFormData({ name: "", role: "", location: "" }); // reset form
  }

  function deleteCard(index) {
    setCards(cards.filter((_, i) => i !== index));
  }

  return (
    <div className="app-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Add a New Profile</h2>

        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </label>
        <p className="char-count">{formData.name.length} characters</p>

        <label>
          Role
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Enter role"
          />
        </label>

        <label>
          Location
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </label>

        <button type="submit" className="submit-btn">Add Profile</button>
      </form>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <ProfileCard
            key={index}
            name={card.name}
            role={card.role}
            location={card.location}
            bio={card.bio}
            onDelete={() => deleteCard(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;