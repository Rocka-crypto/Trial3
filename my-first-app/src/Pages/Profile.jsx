import { useParams, Link } from 'react-router-dom';
import ProfileCard from '../Components/ProfileCard';

function Profile({ profiles }) {
  const { id } = useParams();
  const person = profiles.find((p) => p.id === Number(id));

  if (!person) {
    return (
      <div className="page-container">
        <h2>Profile not found</h2>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <ProfileCard
        name={person.name}
        role={person.role}
        location={person.location}
        bio={person.bio}
      />
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}

export default Profile;