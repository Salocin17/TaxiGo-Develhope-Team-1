import { useState } from 'react';
import "../css/sidebar.css";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

export default function SidebarTaxi() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('homeTaxi');
  /* if (selected !== selected) {
        setSelected(selected);
        navigate('/'+selected)
      }*/
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        setSelected(selected);
        navigate('/'+selected)
      }}
      className='sidenav'

      
    >

      <Toggle/>
      <SideNav.Nav defaultSelected="/">
        <NavItem eventKey="homeTaxi" selected={selected === 'homeTaxi'}>
          <NavIcon><i className="fa fa-fw fa-home" style={{fontSize: "1.5em"}}></i></NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="wallet" selected={selected === 'wallet'}>
          <NavIcon> <i className="fa fa-wallet" style={{fontSize: "1.5em"}}></i></NavIcon>
          <NavText>Wallet</NavText>
        </NavItem>        
        <NavItem eventKey="storicoTaxi" selected={selected === 'storicoTaxi'}>
          <NavIcon><i className="fa fa-history" style={{fontSize: "1.5em"}}></i></NavIcon>
          <NavText>Storico</NavText>
        </NavItem>
        <NavItem eventKey="TaxiAccount" selected={selected === 'account'}>
          <NavIcon> <i className="fa fa-user" style={{fontSize: "1.5em"}}></i></NavIcon>
          <NavText>Profilo</NavText>
        </NavItem>  
      </SideNav.Nav>

    </SideNav>
  );
}