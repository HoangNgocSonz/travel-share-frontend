import React, {Component} from 'react';
import './Navbar.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class NavBar extends Component{
    
    componentDidMount=()=>{
    }
    render(){
        return(
            <Navbar className="navbar" bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Trang chủ</Nav.Link>
                    <Nav.Link href="#link">Theo dõi</Nav.Link>
                    <Nav.Link href="#link">Đăng nhập</Nav.Link>
                    <Nav.Link href="#link">Cá nhân</Nav.Link>
                    <img src={require('../access/plus.png')} onClick={this.props.showForm}></img>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
                )
            }
        }
export default NavBar