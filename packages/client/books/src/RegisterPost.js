import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from "react-select";
import './RegisterPost.css';
import { Multiselect } from 'multiselect-react-dropdown';

function RegisterPost() {

    return <RegisterPostAll />;

}

const handleSubmit = event => {
    const dataForm = new FormData(event.target);

    const data = {
        "name": dataForm.get('name'),
        "dob": {
            "dd": dataForm.get('dob_dd'),
            "mm": dataForm.get('dob_mm'),
            "yy": dataForm.get('dob_yyyy')
        },
        "gender": dataForm.get('gender'),
        "qualification": dataForm.get('qualification'),
        "description": dataForm.get('description')
    }
    fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(result => {
            console.log('result' + result.name);
        });
}

//  const cancelCourse = () => {
//      setName("");
//      setDoB("");
//  }

const showSearchResult = (searchSkill) => {
    const skillOptions = [{
        "id": 1,
        "name": "java"
    }, {
        "id": 2,
        "name": "javascript"
    }, {
        "id": 3,
        "name": "python"
    }, {
        "id": 4,
        "name": "mongoDB"
    },];

    let skillSets = skillOptions.filter(skill => (searchSkill) && skill.name.includes(searchSkill));
    console.log('skill sets' + skillSets);
    return skillSets;
}

const ShowSearchResults = ({ searchSkill }) => {

    let searchResult = showSearchResult(searchSkill);
    if (searchResult) {
        return (
            <div className="ShowSearchResult">
                {
                    searchResult.map(result =>
                        <span key={result.id}> {result.name} </span>
                    )
                }
            </div>
        );
    } else {
        return null;
    }
}

const RegisterPostAll = () => {
    const []
    return (
        <div className="GoToNext">
            <Container>
                <Row>
                    <Col xs={3}> </Col>
                    <Col xs={8}>

                        <form id="registerContainer2" onSubmit={handleSubmit}>
                            <Container>
                                <Row>
                                    <h2 className="freeRegText"> Freelancer Registration</h2>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <input id="name" name="name"
                                            type="text" placeholder="Name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <select id="gender" name="gender"
                                            className="gender-select">
                                            <option value="select">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={2}>
                                        <label className="dob-row"> Birthday</label>
                                    </Col>
                                    <Col xs={3} className="day-row">
                                        <select
                                            name="dob_dd"
                                            className="dob-row">
                                            <option value="selectDay">Day</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </Col>
                                    <Col xs={3} className="mm-row">
                                        <select
                                            name="dob_mm"
                                            className="dob-row">
                                            <option value="selectMonth">Month</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </Col>
                                    <Col xs={3}>
                                        <select
                                            name="dob_yyyy"
                                            className="dob-row">
                                            <option value="selectYear">Year</option>
                                            <option value="1">1997</option>
                                            <option value="2">1998</option>
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <input id="email" name="email"
                                            type="email"
                                            placeholder="Email" />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <input id="phone" name="phone"
                                            type="text"
                                            placeholder="Phone (09) - 1122334455" />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <input id="qualification" name="qualification"
                                            type="text" placeholder="Qualification" />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <ShowSearchResults searchSkill={""} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <textarea id="description" name="description"
                                            type="text" placeholder="Briefly describe yourself with at least 150 characters"
                                            rows="4" cols="45">
                                        </textarea>
                                    </Col>
                                </Row>
                                <Row className="secondButtonRow">
                                    <Col xs={1}></Col>
                                    <Col xs={3}>
                                        <button className='prevBtn' type="button"
                                        >Prev</button>
                                    </Col>
                                    <Col xs={2}></Col>
                                    <Col xs={3}>
                                        <button className='submitBtn' type="submit">Submit</button>
                                    </Col>
                                </Row>
                            </Container>
                            <Col xs={3}> </Col>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default RegisterPost;