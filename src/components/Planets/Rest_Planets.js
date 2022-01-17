import React from "react";
import {Link} from 'react-router-dom';
import {
	Container,
	Row,
	Col,
	Jumbotron,
	Card,
	CardTitle,
	CardText,
	CardSubtitle,
	CardBody,
	List,
	Button
} from "reactstrap";
import "../../style/global.css";

const planetsMore = ({ data }) => {
	// const planets1 = data;
	// console.log("Planets", planets);

	const PlanetsProps = {
		title: 'All Planets'
	}

	const planets = data.map((planets) => {
		return (
			<>
				<Row key={planets.id}>
					<Col>
						<Card>
							<CardBody>
								<CardTitle tag="h5">
									<strong>Planets: </strong>
									{planets.name}
								</CardTitle>
								<CardSubtitle
									tag="h6"
									className="mb-2 text-muted"
								>
									Population: {planets.population}
								</CardSubtitle>
								<CardText>
									<List type="unstyled">
										<li>Diameter: {planets.diameter}</li>
										<li>Climate: {planets.climate}</li>
										<li>Gravity: {planets.gravity}</li>
										<li>Created: {planets.created}</li>
										<li>Terrain: {planets.terrain}</li>
										<li>Edited: {planets.edited}</li>
									</List>
								</CardText>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</>
		);
	})

	return (
		<>
			<Container fluid={true}>
				<Jumbotron>
					<h1 className="text-center">{PlanetsProps.title}</h1>
					<hr className="my-2" />
					<div className="text-center">{planets}</div>
					<Link to="/planets">
						<Button path="/planets" color="warning">Back</Button>
					</Link>
				</Jumbotron>
			</Container>
		</>
	);
};

export default planetsMore;
