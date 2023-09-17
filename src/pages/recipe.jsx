import { Heading } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { Container, Image, Text } from "@chakra-ui/react";

export function RecipePage() {
	const location = useLocation();
	const { receipename } = useParams();
	return (
		<Container>
			<Heading>
				{receipename}:{location.state.title}
			</Heading>
			<Image src={location.state.image} />
			<Text>{location.state.description}</Text>
		</Container>
	);
}
