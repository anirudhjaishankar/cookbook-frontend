import {
	Card,
	CardBody,
	Image,
	Stack,
	Heading,
	Text,
	Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function ReceipeCard({ id, image, title, description }) {
	return (
		<Card maxW="sm" m="0.5rem">
			<CardBody>
				<Image src={image} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text>{description}</Text>
				</Stack>
				<Link to={"/receipe/" + id} state={{ image, title, description }}>
					<Button mt="1rem">View</Button>
				</Link>
			</CardBody>
		</Card>
	);
}
