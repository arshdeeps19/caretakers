import { useNavigate } from "react-router-dom";

function Sidebar({ currentUser }) {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      {/* Attach navigation functions to your sidebar buttons */}
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={() => navigate('/chat')}>Chat</button>
      <button onClick={() => navigate('/events')}>Events</button>
      <button onClick={() => navigate('/feed')}>Feed</button>
      {/* ...rest of your sidebar buttons */}
    </div>
  );
}

export default Sidebar;
