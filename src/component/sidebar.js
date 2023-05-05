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
  return (
    <SideNav
      onSelect={(selected) => {
        console.log(selected);
        navigate('/'+selected)
      }}
      className='sidenav'
    >

      <Toggle/>
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="homeUser">
          <NavIcon><i className="fa fa-fw fa-home" style={{fontSize: "1.5em"}}></i></NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="wallet">
          <NavIcon> <i className="fa fa-wallet" style={{fontSize: "1.5em"}}></i></NavIcon>
          <NavText>Wallet</NavText>
        </NavItem>        
        <NavItem eventKey="storico">
          <NavIcon><i className="fa fa-history" style={{fontSize: "1.5em"}}></i></NavIcon>
          <NavText>Storico</NavText>
        </NavItem>
        <NavItem eventKey="account">
          <NavIcon> <i className="fa fa-user" style={{fontSize: "1.5em"}}></i></NavIcon>
          <NavText>Profilo</NavText>
        </NavItem>  
      </SideNav.Nav>

    </SideNav>
  );
}