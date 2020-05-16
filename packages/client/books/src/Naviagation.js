import React, { Component } from "react";
import RenderNavigation from './RenderNavigation';
import './Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'true'
        };

        this.handleNaviClick = this.handleNaviClick.bind(this);
    }

    handleNaviClick(event) {
        this.setState({ selectedTab: event.target.value });
        console.log('state in navi' + this.state.selectedTab);
    }
    render() {
        return (
            <div id="navigation" className="Navigation">
                <Container>
                    <Row>
                        <Col xs={4}> <h1>Freelance Jobs</h1></Col>
                        <Col></Col>
                        <Col xs={2}>
                            <button className="showBtn" value="show" onClick={this.handleNaviClick}> Home</button>
                        </Col>
                        <Col xs={2}>
                            <button className="registerBtn" value="register" onClick={this.handleNaviClick}> Register </button>
                        </Col>
                    </Row>
                </Container>
                <RenderNavigation selectedTab={this.state.selectedTab} />
            </div >
        )
    }
}

export default Navigation;