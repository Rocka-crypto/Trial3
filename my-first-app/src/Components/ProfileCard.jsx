import Button from './Button';

function ProfileCard({ name ="Unknown", role ="No role", location ="No location", bio }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p className="role">{role} · {location}</p>
      <p className="bio">{bio}</p>
      <Button label ="Follow" />
      <Button label="Message" color="black" />
    </div>
  );
}

export default ProfileCard;