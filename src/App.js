import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Splash } from './component/splash';
import { SignUpTaxi } from './component/signUpTaxi';
import { SignInTaxi } from './component/signInTaxi';
import { SignInUser } from './component/signInUser';
import { SignUpUser } from './component/signUpUser';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route exact path="/signUpTaxi" element={<SignUpTaxi />} />
          <Route exact path="/signInTaxi" element={<SignInTaxi />} />
          <Route exact path="/signInUser" element={<SignInUser />} />
          <Route exact path="/signUpUser" element={<SignUpUser />} />
        </Routes>
      </div>
    </Router>
  );
}
