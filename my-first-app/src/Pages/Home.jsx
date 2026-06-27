import ProfileCard from '../Components/ProfileCard';

function Home({ profiles }) {
  return (
    <div className="page-container">
      <h2 className="page-title">Meet the Community</h2>
      <div className="cards-grid">
        {profiles.map((person) => (
          <ProfileCard
            key={person.id}
            id={person.id}
            name={person.name}
            role={person.role}
            location={person.location}
            bio={person.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;