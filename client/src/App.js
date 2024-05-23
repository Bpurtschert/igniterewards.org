import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Index from './pages/Index';
import Welcome from './pages/Welcome';
import Shop from './pages/Shop';
import MyPoints from './pages/MyPoints';
import MyAccount from './pages/MyAccount';
import './App.css'; // Import CSS for styling
import DefaultHeader from './components/defaultHeader'; // Corrected import statement
import AuthenticatedUserHeader from './components/authenticatedUserHeader';


function App() {
  return (
    <Router>
      {/* DefaultHeader */}
      <div>
        <Routes>

          <Route path="/" element={<>
          <DefaultHeader />
          <Index /> 
          </>} />

          <Route path="/SignUp" element={<>
          <DefaultHeader />
          <SignUp /> 
          </>} />

          <Route path="/SignIn" element={<>
          <DefaultHeader />
          <SignIn /> 
          </>} />

          <Route path="/Welcome" element={<>
          <DefaultHeader />
          <Welcome /> 
          </>} />

        </Routes>
      </div>
      {/* AuthenticatedUserHeader */}
      <div>
        <Routes>

          <Route path="/Home"element={<>
          <AuthenticatedUserHeader />
          <Home />
          </>} />

          <Route path="/Shop"element={<>
          <AuthenticatedUserHeader />
          <Shop />
          </>} />

          <Route path="/MyPoints"element={<>
          <AuthenticatedUserHeader />
          <MyPoints />
          </>} />

          <Route path="/MyAccount"element={<>
          <AuthenticatedUserHeader />
          <MyAccount />
          </>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;





