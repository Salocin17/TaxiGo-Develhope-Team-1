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

export default function Sidebar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("homeUser");
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
        setUsername(data.first_name);
        setName(data.last_name);
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
          <NavItem className="sidenav-header" >
            <NavIcon style={{width: '55px', height: '50px', "margin-left": '1rem'}} >
              <ProfilePicture
                Propic={
                  "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                }
              />{" "}
            </NavIcon>
            <NavText>
              <h4 style={{position:"absolute", left:"0.3rem", top: "5rem", color:"white", fontWeight:"600"}}>{name} {username}</h4>
            </NavText>
          </NavItem>

          <NavItem eventKey="homeUser" selected={selected === "homeUser"}>
            <NavIcon>
              <i
                className="fa fa-fw fa-home"
                style={{ fontSize: "1.5em", color: "white" }}
              ></i>
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="wallet" selected={selected === "wallet"}>
            <NavIcon>
              {" "}
              <i
                className="fa fa-wallet"
                style={{ fontSize: "1.5em", color: "white" }}
              ></i>
            </NavIcon>
            <NavText>Wallet</NavText>
          </NavItem>
          <NavItem eventKey="storico" selected={selected === "storico"}>
            <NavIcon>
              <i
                className="fa fa-history"
                style={{ fontSize: "1.5em", color: "white" }}
              ></i>
            </NavIcon>
            <NavText>Storico</NavText>
          </NavItem>
          <NavItem eventKey="account" selected={selected === "account"}>
            <NavIcon>
              {" "}
              <i
                className="fa fa-user"
                style={{ fontSize: "1.5em", color: "white" }}
              ></i>
            </NavIcon>
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
