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
import { TaxiAccount } from './component/TaxiAccount';
import { Wallet } from './component/wallet';
import { SetupGpsUser } from './component/setupgpsUser';
import { SetupGpsTaxi } from './component/setupgpsTaxi';
import { useState } from "react"

export default function App() {
  const [street, setStreet] = useState()

  const handleSet = (e) => {
    setStreet(e)
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route exact path="/signUpTaxi" element={<SignUpTaxi />} />
          <Route exact path="/signInTaxi" element={<SignInTaxi />} />

          <Route exact path="/signInUser" element={<SignInUser />} />
          <Route exact path="/signUpUser" element={<SignUpUser />} />

          <Route exact path="/homeUser/:street" element={<HomeUser onSetStreet={handleSet} />} />
          <Route exact path="/homeTaxi/:street" element={<HomeTaxi onSetStreet={handleSet} />} />

          <Route exact path="/account/" element={<Account street={street} />} />
          <Route exact path="/storico/" element={<Storico street={street} />} />
          <Route exact path="/storicoTaxi/" element={<StoricoTaxi street={street} />} />
          <Route exact path="/TaxiAccount/" element={<TaxiAccount street={street} />} />
          <Route exact path="/wallet" element={<Wallet street={street} />} />

          <Route exact path="/setupUser" element={<SetupGpsUser />} />
          <Route exact path="/setupTaxi" element={<SetupGpsTaxi />} />
        </Routes>
      </div>
    </Router>
  );
}
