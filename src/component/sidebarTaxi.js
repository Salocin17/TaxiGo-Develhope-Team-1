import React, { useEffect, useState } from "react";
import "../css/sidebar.css";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "./ProfileIcon";

export default function SidebarTaxi() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("homeTaxi");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(`http://localhost:3300/api/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.last_name);
        setName(data.first_name);
      });
  }, []);


  return (
    <div className="sidebar-container">
      <SideNav
        expanded={true}
        onSelect={(selected) => {
          console.log(selected);
          navigate("/" + selected);
        }}
        className="sidenav"
      >
        <Toggle />
      <SideNav.Nav defaultSelected="homeUser">
      <NavItem className="sidenav-header">
            <NavIcon style={{ width: '55px', height: '50px', "margin-left": '1rem' }} >
              <ProfilePicture style={{marginTop:"2rem"}}
                Propic={
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                }
              />{" "}
            </NavIcon>
            <NavText style={{display:"flex", flexDirection:"column"}}>
              <h4 style={{position:"absolute", left:"0.3rem", top: "5rem", color:"white", fontWeight:"600"}}>{name} {username}</h4>
              <svg
              style={{position:"absolute", left:"0.3rem", top: "7rem",}}
             
                height="30"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 20C15.7467 20 20 15.7467 20 10.5C20 5.25329 15.7467 1 10.5 1C5.25329 1 1 5.25329 1 10.5C1 15.7467 5.25329 20 10.5 20Z"
                  fill="#FFC850"
                />
                <path
                  d="M9.5 19C13.6421 19 17 15.6421 17 11.5C17 7.35786 13.6421 4 9.5 4C5.35786 4 2 7.35786 2 11.5C2 15.6421 5.35786 19 9.5 19Z"
                  fill="#DD992B"
                />
                <path
                  d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                  fill="#FFDC64"
                />
                <path
                  d="M14.9259 15.4607C14.8585 15.3722 14.7533 15.3206 14.641 15.3169C10.4347 15.1792 7.06732 11.7817 7.06732 7.60859C7.06732 6.49264 7.31083 5.43408 7.74568 4.47761C7.88331 4.17483 7.53952 3.87371 7.25704 4.05468C5.09659 5.43888 3.7416 7.9371 4.04139 10.7242C4.37961 13.8683 6.88377 16.4456 10.0603 16.9182C11.8136 17.1791 13.4571 16.8009 14.8144 15.9988C15.0059 15.8856 15.0599 15.6366 14.9259 15.4607Z"
                  fill="#FFC850"
                />
                <path
                  d="M15.7741 9.5599C15.9791 9.35158 16.0513 9.04603 15.963 8.76214C15.8746 8.47826 15.6441 8.27549 15.3613 8.23271L12.8875 7.85772C12.8391 7.8505 12.7969 7.81883 12.7752 7.77272L11.6692 5.43388C11.5419 5.16611 11.2858 5 10.9997 5C10.7136 5 10.4575 5.16611 10.3314 5.43388L9.22476 7.77272C9.20309 7.81883 9.16087 7.8505 9.11254 7.85772L6.6387 8.23327C6.35593 8.27604 6.12538 8.47882 6.03705 8.7627C5.94872 9.04658 6.02094 9.35213 6.22593 9.56046L8.0159 11.381C8.05089 11.4165 8.06701 11.4682 8.05867 11.5188L7.6359 14.0898C7.58757 14.3837 7.70146 14.6754 7.93256 14.8509C8.16367 15.0265 8.46478 15.0492 8.71755 14.9103L10.9303 13.6965C10.9736 13.6726 11.0258 13.6726 11.0692 13.6965L13.2819 14.9103C13.3919 14.9698 13.5108 14.9998 13.6297 14.9998C13.7836 14.9998 13.9363 14.9492 14.0674 14.8503C14.2985 14.6748 14.4124 14.3831 14.3641 14.0893L13.9413 11.5182C13.933 11.4676 13.9491 11.416 13.9841 11.3804L15.7741 9.5599Z"
                  fill="#EE9400"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.38775 5.35714L4 9L2.61224 5.35714L0 4.5L2.61224 3.64286L4 0L5.38775 3.64286L8 4.5L5.38775 5.35714Z"
                  fill="white"
                />
              </svg>
              <h4 style={{ position:"absolute", left:"3rem", top: "7.2rem",color:"white", fontWeight:"600"}}>2500</h4>
            </NavText>
          </NavItem>
        <NavItem eventKey="homeTaxi" selected={selected === 'homeTaxi'}>
          <NavIcon><i className="fa fa-fw fa-home" style={{fontSize: "1.5em", color:"white"}}></i></NavIcon>
          <NavText>Home</NavText>
        </NavItem>
       {/* <NavItem eventKey="wallet" selected={selected === 'wallet'}>
          <NavIcon> <i className="fa fa-wallet" style={{fontSize: "1.5em", color:"white"}}></i></NavIcon>
          <NavText>Wallet</NavText>
        </NavItem>  */}      
        {/* <NavItem eventKey="storicoTaxi" selected={selected === 'storicoTaxi'}>
          <NavIcon><i className="fa fa-history" style={{fontSize: "1.5em", color:"white"}}></i></NavIcon>
          <NavText>Storico</NavText>
        </NavItem>*/}  
        <NavItem eventKey="TaxiAccount" selected={selected === 'account'}>
          <NavIcon> <i className="fa fa-user" style={{fontSize: "1.5em", color:"white"}}></i></NavIcon>
          <NavText>Profilo</NavText>
        </NavItem> 
        <NavItem
            eventKey="signUpUser"
            selected={selected === "signUpUser"}
            style={{
              backgroundColor: "#F52D56",
              position: "absolute",
              bottom: "0",
              width: "100%",
            }}
          >
            <NavIcon>
              {" "}
              <i
                className="fa fa-sign-out"
                style={{ fontSize: "1.5em", color: "white" }}
              ></i>
            </NavIcon>
            <NavText>Esci</NavText>
          </NavItem>
      </SideNav.Nav>

    </SideNav>
    </div>
  );
}