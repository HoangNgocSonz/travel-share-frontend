import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiSearch } from "react-icons/fi";
import { AiFillSetting } from "react-icons/ai";
import { FaBell } from "react-icons/fa";

class NavBar extends Component {
  componentDidMount = () => {};
  log = () => {
    console.log("yeeee");
  };
  setBackground = () => {
    console.log("hoo");
    document.getElementById("inputSearch").classList.add("inputSeatchFocus");
  };
  removeBackground = () => {
    document.getElementById("inputSearch").classList.remove("inputSeatchFocus");
  };
  render() {
    return (
      <Navbar className="navbar" bg="light" variant="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <img
            className="logoTeam"
            src={require("../access/logoTeam20.png")}
          ></img>
          <Nav className="mr-auto">
            <div className="backgroundTrangchu">
              <Nav.Link id="trangchu" href="/">
                Trang chủ
              </Nav.Link>
            </div>
            {this.props.loggedIn == true ? (
              <Nav.Link href="#link" id="follow">
                Theo dõi
              </Nav.Link>
            ) : (
              ""
            )}

            {this.props.loggedIn == false ? (
              <Nav.Link
                href="#link"
                id="loginOnNavbar"
                onClick={this.props.login}
              >
                Đăng nhập
              </Nav.Link>
            ) : (
              <Nav.Link
                onClick={this.props.signout}
                href="#link"
                id="loginOnNavbar"
              >
                Đăng xuất
              </Nav.Link>
            )}

            {this.props.loggedIn == true ? (
              <Nav.Link href="#link" id="dashboard">
                Cá nhân
              </Nav.Link>
            ) : (
              ""
            )}
            {this.props.loggedIn == true ? (
              <img
                className="plus"
                id="plus"
                src={require("../access/plus.png")}
                onClick={this.props.showForm}
                alt="img"
              ></img>
            ) : (
              ""
            )}
          </Nav>
          <Form inline className="search">
            <div className="inputSearch" id="inputSearch">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onFocus={this.setBackground}
                onBlur={this.removeBackground}
              />
              <FiSearch onClick={this.log} />
            </div>
          </Form>
          <div className="FaBells">
            <FaBell></FaBell>
          </div>
          <div className="AiFillSettings">
            <AiFillSetting></AiFillSetting>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
