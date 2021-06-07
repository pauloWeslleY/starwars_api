import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Row,
	Col,
	Jumbotron,
	List,
	Button,
	Card,
	CardTitle,
	CardText,
	CardGroup,
	CardSubtitle,
	CardBody,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";
import "../../style/global.css";

export default function Person(props) {
	const { className } = props;

	const [modal, setModal] = useState(false);
	const toggle = () => setModal(!modal);

	const [person, setPerson] = useState([]);
	const [personAll, setAllPerson] = useState([]);
	const [personAll3, setAllPerson3] = useState([]);
	const [personAll4, setAllPerson4] = useState([]);

	const [people1, setPeople1] = useState([]);
	const [people2, setPeople2] = useState([]);
	const [people3, setPeople3] = useState([]);
	const [people4, setPeople4] = useState([]);
	const [people5, setPeople5] = useState([]);
	const [people6, setPeople6] = useState([]);
	const [people7, setPeople7] = useState([]);
	const [people8, setPeople8] = useState([]);
	const [people9, setPeople9] = useState([]);
	useEffect(() => {
		async function getAllPerson() {
			let res = await fetch("https://swapi.dev/api/people/");
			let data = await res.json();
			setPerson(data.results);
		}
		async function getAllPerson2() {
			let res = await fetch("https://swapi.dev/api/people/?page=2");
			let data = await res.json();
			setAllPerson(data.results);
		}
		async function getAllPerson3() {
			let res = await fetch("https://swapi.dev/api/people/?page=3");
			let data = await res.json();
			setAllPerson3(data.results);
		}
		async function getAllPerson4() {
			let res = await fetch("https://swapi.dev/api/people/?page=4");
			let data = await res.json();
			setAllPerson4(data.results);
		}

		//! People Detail
		async function getPeople1() {
			let res = await fetch("https://swapi.dev/api/people/1/");
			let data = await res.json();
			setPeople1(data);
		}
		async function getPeople2() {
			let res = await fetch("https://swapi.dev/api/people/2/");
			let data = await res.json();
			setPeople2(data);
		}
		async function getPeople3() {
			let res = await fetch("https://swapi.dev/api/people/3/");
			let data = await res.json();
			setPeople3(data);
		}
		async function getPeople4() {
			let res = await fetch("https://swapi.dev/api/people/4/");
			let data = await res.json();
			setPeople4(data);
		}
		async function getPeople5() {
			let res = await fetch("https://swapi.dev/api/people/5/");
			let data = await res.json();
			setPeople5(data);
		}
		async function getPeople6() {
			let res = await fetch("https://swapi.dev/api/people/6/");
			let data = await res.json();
			setPeople6(data);
		}
		async function getPeople7() {
			let res = await fetch("https://swapi.dev/api/people/7/");
			let data = await res.json();
			setPeople7(data);
		}
		async function getPeople8() {
			let res = await fetch("https://swapi.dev/api/people/8/");
			let data = await res.json();
			setPeople8(data);
		}
		async function getPeople9() {
			let res = await fetch("https://swapi.dev/api/people/9/");
			let data = await res.json();
			setPeople9(data);
		}

		getPeople1();
		getPeople2();
		getPeople3();
		getPeople4();
		getPeople5();
		getPeople6();
		getPeople7();
		getPeople8();
		getPeople9();
		//! All People
		getAllPerson();
		getAllPerson2();
		getAllPerson3();
		getAllPerson4();

		// fetch('https://swapi.dev/api/people/?format=json')
		//    .then(response => response.json())
		//    .then(data => {
		//       console.log(data);
		//    });
	}, []);
	return (
		<>
			<Container fluid={true}>
				<Row>
					<Col>
						<Jumbotron>
							<h1 className="text-center">Person</h1>
							<div className="text-center">
								<Button outline color="warning" onClick={toggle}>
									All Person
								</Button>
							</div>
							<hr className="my-2" />
							<CardGroup>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people1.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people1.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass:</strong>
												<li>{people1.mass}</li>
												<strong>Gender:</strong>
												<li>{people1.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people1.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people1.created}</li>
												<strong>Edited:</strong>
												<li>{people1.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people2.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people2.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass: </strong>
												<li>{people2.mass}</li>
												<strong>Gender:</strong>
												<li>{people2.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people2.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people2.created}</li>
												<strong>Edited:</strong>
												<li>{people2.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people3.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people3.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass: </strong>
												<li>{people3.mass}</li>
												<strong>Gender:</strong>
												<li>{people3.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people3.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people3.created}</li>
												<strong>Edited:</strong>
												<li>{people3.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
							</CardGroup>
							<CardGroup>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people4.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people4.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass:</strong>
												<li>{people4.mass}</li>
												<strong>Gender:</strong>
												<li>{people4.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people4.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people4.created}</li>
												<strong>Edited:</strong>
												<li>{people4.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people5.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people5.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass:</strong>
												<li>{people5.mass}</li>
												<strong>Gender:</strong>
												<li>{people5.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people5.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people5.created}</li>
												<strong>Edited:</strong>
												<li>{people5.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people6.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people6.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass:</strong>
												<li>{people6.mass}</li>
												<strong>Gender:</strong>
												<li>{people6.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people6.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people6.created}</li>
												<strong>Edited:</strong>
												<li>{people6.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
							</CardGroup>
							<CardGroup>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people7.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people7.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass:</strong>
												<li>{people7.mass}</li>
												<strong>Gender:</strong>
												<li>{people7.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people7.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people7.created}</li>
												<strong>Edited:</strong>
												<li>{people7.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people8.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people8.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass:</strong>
												<li>{people8.mass}</li>
												<strong>Gender:</strong>
												<li>{people8.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people8.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people8.created}</li>
												<strong>Edited:</strong>
												<li>{people8.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
								<Card>
									<CardBody>
										<CardTitle tag="h5">{people9.name}</CardTitle>
										<CardSubtitle
											tag="h6"
											className="mb-2 text-muted"
										>
											Height: {people9.height}
										</CardSubtitle>
										<CardText>
											<List type="unstyled">
												<strong>Mass:</strong>
												<li>{people9.mass}</li>
												<strong>Gender:</strong>
												<li>{people9.gender}</li>
												<strong>HomeWorld:</strong>
												<li>
													<Link to="/planets">
														{people9.homeworld}
													</Link>
												</li>
												<strong>Created:</strong>
												<li>{people9.created}</li>
												<strong>Edited:</strong>
												<li>{people9.edited}</li>
											</List>
										</CardText>
									</CardBody>
								</Card>
							</CardGroup>
						</Jumbotron>

						{/* Modal All Person */}
						<Modal isOpen={modal} toggle={toggle} className={className}>
							<ModalHeader toggle={toggle}>All Person</ModalHeader>
							<ModalBody>
								<div>
									{person.map((people) => {
										return <h3 className="text-center" key={people.name}>{people.name}</h3>
									})}
									{personAll.map((personAll) => {
										return <h3 className="text-center" key={personAll.name}>{personAll.name}</h3>
									})}
									{personAll3.map((personAll3) => {
										return <h3 className="text-center" key={personAll3.name}>{personAll3.name}</h3>
									})}
									{personAll4.map((personAll4) => {
										return <h3 className="text-center" key={personAll4.name}>{personAll4.name}</h3>
									})}
								</div>
							</ModalBody>
							<ModalFooter>
								<Button outline color="warning" onClick={toggle}>
									Sair
								</Button>{" "}
							</ModalFooter>
						</Modal>
					</Col>
				</Row>
			</Container>
		</>
	);
}
