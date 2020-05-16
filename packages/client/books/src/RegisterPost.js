import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from "react-select";
import './RegisterPost.css';
import { Multiselect } from 'multiselect-react-dropdown';

function RegisterPost() {

    const [name, setName] = React.useState("");
    const [dob, setDoB] = React.useState("");
    const [books, setBooks] = React.useState([]);
    const [gender, setGender] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    let [qualification, setQualification] = React.useState("");
    const [goToNext, setGoToNext] = React.useState(false);
    const [description, setDescription] = React.useState("");
    const [dob_dd, setBodDD] = React.useState("");
    const [dob_mm, setBodMM] = React.useState("");
    const [dob_yy, setBodYY] = React.useState("");
    let skillSets = [];
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

    const handleSubmit = event => {
        const data = {
            "name": name,
            "dob": {
                "dd": dob_dd,
                "mm": dob_mm,
                "yy": dob_yy
            },
            "gender": gender,
            "qualification": qualification,
            "description": description
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
                setBooks(books.concat([result]));
                setName("");
                setDoB("");
            });
    }

    const cancelCourse = () => {
        setName("");
        setDoB("");
    }

    const RegisterPostTwo = () => {
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
                                            <input id="qualification" name="qualification"
                                                value={qualification}
                                                onChange={event => setQualification(event.target.value)} type="text" placeholder="Qualification" />

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <ShowSearchResults searchSkill={qualification} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <textarea id="description" name="description"
                                                value={description}
                                                onChange={event => setDescription(event.target.value)} type="text" placeholder="Briefly describe about yourself with at least 50 characters"
                                                rows="7" cols="45">
                                            </textarea>
                                        </Col>
                                    </Row>
                                    <Row className="secondButtonRow">
                                        <Col xs={1}></Col>
                                        <Col xs={3}>
                                            <button className='prevBtn' type="button" onClick={event => setGoToNext(false)}>Prev</button>
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
   
    const RegisterPostOne = () => {
        return (
            <div className="RegisterPost">
                <Container>
                    <Row>
                        <Col xs={3}> </Col>
                        <Col xs={8}>

                            <form id="registerContainer1">
                                <Container>
                                    <Row>
                                        <h2 className="freeRegText"> Freelancer Registration</h2>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <input id="username" name={name}
                                                onChange={event => setName (event.target.value) 
                                                    }
                                                value={name}
                                                type="text" placeholder="Name" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <select value={gender} onChange={event => setGender(event.target.value)} className="gender-select">
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
                                            <select value={dob_dd} onChange={event => setBodDD(event.target.value)} className="dob-row">
                                                <option value="selectDay">Day</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </Col>
                                        <Col xs={3} className="mm-row">
                                            <select value={dob_mm} onChange={event => setBodMM(event.target.value)} className="dob-row">
                                                <option value="selectMonth">Month</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </Col>
                                        <Col xs={3}>
                                            <select value={dob_yy} onChange={event => setBodYY(event.target.value)} className="dob-row">
                                                <option value="selectYear">Year</option>
                                                <option value="1">1997</option>
                                                <option value="2">1998</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    {/* <Row>
                                    <Col xs={12}>
                                        <Select
                                            multi
                                            id='qualification'
                                            name='qualification'
                                            menuPosition='fixed'
                                            options={objectArray}
                                            value={qualification}
                                            placeholder='Nepasirinktas'
                                            onChange={event => setQualification(event.target.value)} />
                                      
                                    </Col>
                                </Row> */}
                                    <Row>
                                        <Col xs={12}>
                                            <input id="email" name="email"
                                                value={email}
                                                onChange={event => setEmail(event.target.value)}
                                                type="email"
                                                placeholder="Email" />

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <input id="phone" name="phone"
                                                value={phone}
                                                onChange={event => setPhone(event.target.value)}
                                                type="text"
                                                placeholder="Phone (09) - 1122334455" />

                                        </Col>
                                    </Row>
                                    <Row className="firstButtonRow">
                                        <Col xs={1}></Col>
                                        <Col xs={3}>
                                            <button className='cancelBtn' type="reset" onClick={cancelCourse}>Cancel</button>
                                        </Col>
                                        <Col xs={2}></Col>
                                        <Col xs={3}>
                                            <button className='nextBtn' type="button" onClick={event => setGoToNext(true)}>Next</button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </Col>
                        <Col xs={3}> </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    const showSearchResult = (searchSkill) => {
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

    if (goToNext) {
        return (<RegisterPostTwo />);
    } else {
        return (<RegisterPostOne />);
    }

}


export default RegisterPost;