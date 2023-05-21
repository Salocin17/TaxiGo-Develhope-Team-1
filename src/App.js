import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Splash } from './component/splash';
import { SignUpTaxi } from './component/signUpTaxi';
import { SignInTaxi } from './component/signInTaxi';
import { SignInUser } from './component/signInUser';
import { SignUpUser } from './component/signUpUser';
import { HomeUser } from './component/homeUser';
import { Storico } from './component/storico';
import { Account } from './component/account';
import { HomeTaxi } from './component/homeTaxi';
import { StoricoTaxi } from './component/storicoTaxi';
import {TaxiAccount} from './component/TaxiAccount';
import {Wallet} from './component/wallet';
import {SetupGpsUser} from './component/setupgpsUser';


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
          <Route exact path="/storicoTaxi" element={<StoricoTaxi />} />
          <Route exact path="/TaxiAccount" element={<TaxiAccount/>} />
          <Route exact path="/wallet" element={<Wallet/>} />
          <Route exact path="/setupUser" element={<SetupGpsUser/>} />
        </Routes>
      </div>
    </Router>
  );
}
