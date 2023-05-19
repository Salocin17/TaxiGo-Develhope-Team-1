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

export default function Sidebar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('homeUser');
  
  const handleSelect = (eventKey) => {
    setSelected(eventKey);
    navigate('/'+eventKey);
  };

  return (
    <SideNav
      onSelect={handleSelect}
      className='sidenav'
    >
      <Toggle/>
      <SideNav.Nav defaultSelected="/">
        <NavItem eventKey="homeUser" selected={selected === 'homeUser'}>
          <NavIcon><i className="fa fa-fw fa-home" style={{fontSize: "1.5em", color:"white"}}></i></NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="wallet" selected={selected === 'wallet'}>
          <NavIcon> <i className="fa fa-wallet" style={{fontSize: "1.5em", color:"white"}}></i></NavIcon>
          <NavText>Wallet</NavText>
        </NavItem>        
        <NavItem eventKey="storico" selected={selected === 'storico'}>
          <NavIcon><i className="fa fa-history" style={{fontSize: "1.5em", color:"white"}}></i></NavIcon>
          <NavText>Storico</NavText>
        </NavItem>
        <NavItem eventKey="account" selected={selected === 'account'}>
          <NavIcon> <i className="fa fa-user" style={{fontSize: "1.5em", color:"white"}}></i></NavIcon>
          <NavText>Profilo</NavText>
        </NavItem>  
      </SideNav.Nav>
    </SideNav>
  );
}
