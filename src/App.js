import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Splash } from './component/splash';
import { SignUpTaxi } from './component/signUpTaxi';
import { SignInTaxi } from './component/signInTaxi';
import { SignInUser } from './component/signInUser';
import { SignUpUser } from './component/signUpUser';
import { HomeUser } from './component/homeUser';
import { Storico } from './component/storico';
import { Account } from './component/account';
import { HomeTaxi } from './component/HomeTaxi';
import { TaxiStorico } from './component/TaxiStorico';
import {TaxiAccount} from './component/TaxiAccount';

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
          <Route exact path="/homeUser" element={<HomeUser />} />
          <Route exact path="/homeTaxi" element={<HomeTaxi />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/storico" element={<Storico />} />
          <Route exact path="/TaxiStorico" element={<TaxiStorico />} />
          <Route exact path="/TaxiAccount" element={<TaxiAccount/>} />
        </Routes>
      </div>
    </Router>
  );
}
