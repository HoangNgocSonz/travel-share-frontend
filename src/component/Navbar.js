import React, { Component } from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class NavBar extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <Navbar className="navbar" bg="light" variant="light" expand="lg">
        {/* <Navbar.Brand href="/">Team 20</Navbar.Brand> */}
        <img
          className="logoTeam"
          src={require("../access/logoTeam20.png")}
        ></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Trang chủ</Nav.Link>
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
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
