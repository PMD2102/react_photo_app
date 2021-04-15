import NotificationsUI from 'components/NotificationUI';
import SearchInput from 'components/SearchInput/SearchInput';
import UserLogin from 'components/UserLogin';
import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { Col, Container, Navbar, Row } from 'reactstrap';
import Nav from '../../components/Nav';
import './Header.scss';

Header.propTypes = {};

function Header() {
    return (
        <Navbar className="header">
            <Container >
                <Row className="justify-content-between">
                    <Col xs="2">
                      <a href="/photos">
                        <img
                            src="https://www.webtretho.com/static/img/logo.png"
                            className="logo"
                            alt="logo"
                        />
                    </a>  
                    </Col>
                    <Col xs="5" className="header__title">
                        <Nav />
                    </Col>
                    <Col xs="2">
                        <SearchInput />
                    </Col>
                    <Col xs="1">
                        <a href="#">
                            <BsPencil className="new_post"/>
                        </a>
                    </Col>
                    <Col xs="1" >
                        <NotificationsUI />
                    </Col>
                    <Col xs="1">
                        <UserLogin />
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default Header;