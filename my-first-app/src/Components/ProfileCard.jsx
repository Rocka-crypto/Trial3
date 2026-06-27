import { Link } from 'react-router-dom';

function ProfileCard({ id, name = "Unknown", role = "No role", location = "No location", bio, onDelete }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p className="role">{role} · {location}</p>
      <p className="bio">{bio}</p>
      {id && (
        <Link to={`/profile/${id}`} className="view-profile-btn">
          View Profile
        </Link>
      )}
      <div className="card-buttons">
        <button className="profile-btn" style={{ backgroundColor: "blue" }}>
          Follow
        </button>
        <button className="profile-btn" style={{ backgroundColor: "black" }}>
          Message
        </button>
        <button
          className="profile-btn"
          style={{ backgroundColor: "#e74c3c" }}
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;