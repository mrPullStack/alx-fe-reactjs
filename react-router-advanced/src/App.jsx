import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Blogpost from './components/Blogpost';
import ProtectedRoute from './assets/components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/profile/*"
          element={
            <ProtectedRoute isAuthenticated={isLoggedin}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/posts/:postId" element={<Blogpost />} />
      </Routes>
    </Router>
  );
}

export default App;
