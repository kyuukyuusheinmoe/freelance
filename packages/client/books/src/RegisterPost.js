import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from "react-select";
import './RegisterPost.css';
import ReactDOM from "react-dom";
import SkillField from './SkillField';

function RegisterPost() {

    return <RegisterPostAll />;

}

const handleSubmit = ({ event, skills }) => {
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
        "skills": skills,
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
        });
}

const handleSelectedDate = ({ dob_dd }) => {
    const monthArr = [
        { "id": 1, "no_of_days": 31, "name": "Jan" },
        { "id": 2, "no_of_days": 28, "name": "Feb" },
        { "id": 3, "no_of_days": 31, "name": "Mar" },
        { "id": 4, "no_of_days": 30, "name": "Apr" },
        { "id": 5, "no_of_days": 31, "name": "May" },
        { "id": 6, "no_of_days": 30, "name": "Jun" },
        { "id": 7, "no_of_days": 31, "name": "Jul" },
        { "id": 8, "no_of_days": 31, "name": "Aug" },
        { "id": 9, "no_of_days": 30, "name": "Sep" },
        { "id": 10, "no_of_days": 31, "name": "Oct" },
        { "id": 11, "no_of_days": 30, "name": "Nov" },
        { "id": 12, "no_of_days": 31, "name": "Dec" },

    ];
    if (dob_dd == 28) {
        return monthArr.filter(month => month.no_of_days > 27);
    } else if (dob_dd == 29) {
        return monthArr.filter(month => month.no_of_days > 28);
    } else if (dob_dd == 30) {
        return monthArr.filter(month => month.no_of_days > 29);
    } else if (dob_dd == 31) {
        return monthArr.filter(month => month.no_of_days > 30);
    } else {
        return monthArr;
    }
}

const handleSelectedDateAndMonth = ({dob_dd, dob_mm}) => {
    const yearArr = [];
    const leapYearArr = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const startYear = currentYear - 18;
    for (var i = startYear; i > 1910; i--) {
        yearArr.push(i);
        if (i % 4 == 0) {
            leapYearArr.push(i);
        } 
    }

    if (dob_dd == 28 && dob_mm == 'Feb') {
        return leapYearArr;
    } else {
        return yearArr;
    }
};

const RegisterPostAll = () => {

    const initialState = [
        {
            id: 0,
            name: '',
        }
    ];

    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [dob_dd, setDD] = React.useState("");
    const [dob_mm, setMM] = React.useState("");
    const [dob_yy, setYY] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [skill, setSkill] = React.useState("");
    const [skills, setSkillSet] = React.useState(initialState);
    const [qualification, setQualification] = React.useState("");
    const [description, setDescription] = React.useState("");
    const dayArr = ([...Array(32).keys()].slice(1));

    let showMonth = [];
    let showYear = [];
    const cancelCourse = () => {
        setName("");
        setGender("");
        setDD(""); setMM(""); setYY("");
        setPhone("");
        setEmail("");
        setQualification("");
        setSkillSet(initialState);
        setDescription("");
    }

    return (
        <div className="GoToNext">
            <Container>
                <Row>
                    <Col xs={3}> </Col>
                    <Col xs={8}>

                        <form id="registerContainer2" onSubmit={event => handleSubmit({ event, skills })}>
                            <Container>
                                <Row>
                                    <h2 className="freeRegText"> Freelancer Registration</h2>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <input id="name" name="name"
                                            value={name}
                                            onChange={event => setName(event.target.value)}
                                            type="text" placeholder="Name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <select id="gender" name="gender"
                                            value={gender}
                                            onChange={event => setGender(event.target.value)}
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
                                            value={dob_dd}
                                            onChange={event => setDD(event.target.value)}
                                            className="dob-row">
                                            <option value="selectDay">Day</option>
                                            {
                                                dayArr.map(day =>
                                                    <option key={day} value={day}> {day} </option>
                                                )
                                            }
                                        </select>
                                    </Col>
                                    <Col xs={3} className="mm-row">
                                        <select
                                            name="dob_mm"
                                            value={dob_mm}
                                            onChange={event => setMM(event.target.value)}
                                            className="dob-row">
                                            <option value="selectMonth">Month</option>
                                            {
                                                showMonth = handleSelectedDate({ dob_dd }),
                                                showMonth.map(mm =>
                                                    <option key={mm.id} value={mm.name}>{mm.name}</option>
                                                )
                                            }

                                            {/* <option value="2">2</option> */}
                                        </select>
                                    </Col>
                                    <Col xs={3}>
                                        <select
                                            name="dob_yyyy"
                                            value={dob_yy}
                                            onChange={event => setYY(event.target.value)}
                                            className="dob-row">
                                            <option value="selectYear">Year</option>
                                            {
                                                showYear = handleSelectedDateAndMonth ({dob_dd, dob_mm}),
                                                console.log ('show years' + showYear),
                                                showYear.map (year=>
                                                    <option key={year} value={year}>{year}</option>
                                                    )
                                            }
                                        </select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <input id="email" name="email"
                                            type="email"
                                            value={email}
                                            onChange={event => setEmail(event.target.value)}
                                            placeholder="Email" />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <input id="phone" name="phone"
                                            type="text"
                                            value={phone}
                                            onChange={event => setPhone(event.target.value)}
                                            placeholder="Phone (09) - 1122334455" />

                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <input id="qualification" name="qualification"
                                            value={qualification}
                                            onChange={event => setQualification(event.target.value)}
                                            type="text" placeholder="Qualification" />

                                    </Col>
                                </Row>
                                <SkillField skill={skill} setSkill={setSkill} skills={skills} setSkillSet={setSkillSet} />
                                <Row>
                                    <Col xs={12}>
                                        <textarea id="description" name="description"
                                            value={description}
                                            onChange={event => setDescription(event.target.value)}
                                            type="text" placeholder="Briefly describe yourself with at least 150 characters"
                                            rows="4" cols="45">
                                        </textarea>
                                    </Col>
                                </Row>
                                <Row className="secondButtonRow">
                                    <Col xs={1}></Col>
                                    <Col xs={3}>
                                        <button className='cancelBtn' type="button" onClick={event => cancelCourse()}
                                        >Cancel</button>
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