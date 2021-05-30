import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron, List } from "reactstrap";
import "../../style/global.css";
export default function Starships({ data }) {
	return (
		<>
			<Container fluid={true}>
				<Jumbotron>
					<h1 className="text-center">Starships</h1>
					<hr className="my-2" />
					<div className="text-center">
						{data.map((starships, i) => {
							return (
								<Row key={i}>
									<Col>
										<List type="unstyled">
											<strong>Navs: </strong>
											<li>
												<h4 className="text-warning">
													{starships.name}
												</h4>
											</li>
											<strong>Model: </strong>
											<li>{starships.model}</li>
											<strong>Manufacturer: </strong>
											<li>{starships.manufacturer}</li>
											<strong>Max Speed: </strong>
											<li>{starships.max_atmosphering_speed}</li>
											<strong>Passengers: </strong>
											<li>{starships.passengers}</li>
											<strong>Capacity Max: </strong>
											<li>{starships.cargo_capacity}</li>
											<strong>Class Starship: </strong>
											<li>{starships.starship_class}</li>
											<strong>Credits: </strong>
											<li>{starships.cost_in_credits}</li>
											<strong>Hyperdrive: </strong>
											<li>{starships.hyperdrive_rating}</li>
											<strong>Length: </strong>
											<li>{starships.length}</li>
											<strong>Mglt: </strong>
											<li>{starships.MGLT}</li>
											<strong>Films: </strong>
											<li>
												{starships.films.map((starships1, i) => {
													return (
														<>
															<Row key={i}>
																<Col>
																	<List type="unstyled">
																		<Link to="/films">
																			<li>{starships1}</li>
																		</Link>
																	</List>
																</Col>
															</Row>
														</>
													);
												})}
											</li>
											<hr className="my-1 hrLine" />
										</List>
									</Col>
								</Row>
							);
						})}
					</div>
				</Jumbotron>
			</Container>
		</>
	);
}
