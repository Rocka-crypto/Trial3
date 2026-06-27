import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import './App.css';

const profiles = [
  {
    id: 1,
    name: "Collins Wachira",
    role: "System Developer",
    location: "Nairobi, Kenya",
    bio: "Passionate about AI and community tech solutions.",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Marketer",
    location: "Sydney, Australia",
    bio: "Marketing enthusiast with a passion for digital strategies.",
  },
  {
    id: 3,
    name: "Sofia Martinez",
    role: "UX Designer",
    location: "Madrid, Spain",
    bio: "Dedicated to creating user-centered design solutions.",
  },
  {
    id: 4,
    name: "Amina Osei",
    role: "Data Scientist",
    location: "Accra, Ghana",
    bio: "Turning raw data into meaningful insights for Africa.",
  },
  {
    id: 5,
    name: "Liam Thompson",
    role: "Frontend Developer",
    location: "Toronto, Canada",
    bio: "Building beautiful, accessible web experiences.",
  },
];

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home profiles={profiles} />} />
        <Route path="/profile/:id" element={<Profile profiles={profiles} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;