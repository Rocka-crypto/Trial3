import Button from './Button';

function ProfileCard({ name = "Unknown", role = "No role", location = "No location", bio, onDelete }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p className="role">{role} · {location}</p>
      <p className="bio">{bio}</p>
      <div className="card-buttons">
        <Button label="Follow" />
        <Button label="Message" color="black" />
        <Button label="Delete" color="#e74c3c" onClick={onDelete} />
      </div>
    </div>
  );
}

export default ProfileCard;