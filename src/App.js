import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage/ChatPage";
import Login from "./pages/login/Login";
import Home from "./components/home/Home";
import Profile from "./pages/profile/Profile";
import Eventcontainer from "./components/events/Eventcontainer";
import Feed from './components/feed/Feed'; // Ensure this import is correct

function App() {
  const currentUser = {
    name: "User's Name",
    password: "User's Password"
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/chat" element={<ChatPage currentUser={currentUser} />} />
          <Route path="/events" element={<Eventcontainer />} />
          <Route path="/feed" element={<Feed currentUser={currentUser} />} /> {/* New route for Feed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


