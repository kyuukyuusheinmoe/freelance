import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SkillField.css';
import _ from 'lodash';

const SkillField = ({skill, setSkill,skills, setSkillSet}) => {
   
    // const [skills, setSkillSet] = React.useState(initialState);
    // let [skill, setSkill] = React.useState("");

    if (skills.length > 1) {
        return (
            <div className="SkillField" id='skill-field'>
                {<InputWithSkill skill={skill} skillSet={skills} setSkill={setSkill} setSkillSet={setSkillSet} />}
                {(skill) ? <ShowSearchResults searchSkill={skill} setSkill={setSkill} skillSet={skills} setSkillSet={setSkillSet} /> : null}
            </div>);
    } else {
        return (
            <div className="SkillField">
                <InputWithoutSkill skill={skill} setSkill={setSkill} />
                {(skill) ? <ShowSearchResults searchSkill={skill} setSkill={setSkill} skillSet={skills} setSkillSet={setSkillSet} /> : null}
            </div>)
    }
}



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
    return skillSets;
}

const ShowSearchResults = ({ searchSkill, setSkill, skillSet, setSkillSet }) => {

    let searchResult = showSearchResult(searchSkill);
    if (searchResult) {
        return (
            <div className="ShowSearchResult">
                <ul className="skill-list">
                    {
                        searchResult.map(result =>
                            <li key={result.id} className="skill-item"
                            > <a onClick={event => handleClick({ skillSet, setSkillSet, result, setSkill })
                            }> {result.name} </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    } else {
        return null;
    }
}

const handleClick = ({ skillSet, setSkillSet, result, setSkill }) => {
    const duplicateKey = skillSet.filter(skill => skill.id == result.id);
    if (duplicateKey.length > 0) {
        return alert('You skill is already chosen');
    } else {
        let newList = [...skillSet, result];
        setSkillSet(newList);
        setSkill('');
    }
}

const handleCloseTag = ({skillSet, skill, setSkillSet}) => {
    let newList = skillSet.filter (eachSkill => eachSkill.id != skill.id );
    setSkillSet(newList);
    console.log ('skill length' + newList.length);
}


const InputWithoutSkill = ({ skill, setSkill }) => {
    return (<Row className="withoutskill">
        <Col xs={12}>
            <input id="skill" name="skill"
                type="text" placeholder="Skills"
                value={skill}
                className = 'skill-input'
                onChange={event => setSkill(event.target.value)}
            />

        </Col>
    </Row>);
}

const InputWithSkill = ({ skillSet, skill, setSkill, setSkillSet }) => {
    return (<Row className="withskill">
        {skillSet.map(skill => (skill.id > 0) ?
            <span className="show-skill" key={skill.id}> {skill.name}
                <a className="close-tag" onClick={event=> handleCloseTag({skillSet, skill, setSkillSet})}> x </a>
            </span>
            : null)}

        <Col xs={12 - (3 * skillSet.length)}>
            <input id="skill" name="skill"
                className="skill-input"
                type="text" placeholder="Skills"
                value={skill}
                onChange={event => setSkill(event.target.value)}
            />

        </Col>
    </Row>);
}

export default SkillField;