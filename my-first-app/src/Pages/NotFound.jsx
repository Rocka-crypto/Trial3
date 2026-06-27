import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-container">
      <div className="not-found">
        <h2>404</h2>
        <p>Oops — this page doesn't exist.</p>
        <Link to="/" className="back-link">← Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFound;