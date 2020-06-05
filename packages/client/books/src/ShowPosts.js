import React from 'react';
import './ShowPosts.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aye_Chan_Moe from './images/ACM.PNG';
import Su_Nandar from './images/SND.PNG';
import Thwe_Thwe_Aung from './images/TTA.PNG';


function ShowPosts() {
    const [books, setBooks] = React.useState([]);
    React.useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(result => {
                console.log('result books' + result);
                setBooks(result);
            });
    }, []);

    console.log('books in show post');
    books.map(book => (
        console.log('book name' + book.name)));

    return (
        <div className="ShowPosts">
            {/* <ul>
                    {books.map(book => (
                        <li key={book.id}>{book.name} {book.DoB} {book.gender} {book.name2}</li>))}
                </ul> */}
            {books.map(book => (
                <div className="posts" key={book.id}>
                    <Row>
                        <Col xs={3}>
                            <img src={Aye_Chan_Moe} alt="Profile Picture" className="profile-picture" />
                        </Col>
                        <Col className="description-col">
                            <h4 className='about-me'> ABOUT ME</h4>
                            <p className="description-text">{book.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}> </Col>
                        <Col className="skills-row">
                            <span className='skills-text'> Skills :</span>
                            {(book.skills) ? (book.skills.map(skill => (skill.id > 0) ?
                                <span className="show-post-skill" key={skill.id}> {skill.name}
                                </span>
                                : null)) : null}
                        </Col>
                    </Row>

                    <Row className="name-skill-row">
                        <span className="freelance-name"> {book.name}</span>
                    </Row>

                    <Row>
                        <Col xs={3} className="freelance-profile">
                            <a> View Profile</a>
                        </Col>
                        <Col>
                            <button className="hireBtn" value="hire"> Hire </button>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
}

export default ShowPosts;