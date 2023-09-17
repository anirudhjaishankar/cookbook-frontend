import { useState } from "react";
import {
	Container,
	Heading,
	Input,
	InputGroup,
	InputLeftElement,
	Flex,
	Button,
	SimpleGrid,
} from "@chakra-ui/react";
import { ReceipeCard } from "./components/RecipeCard";
import { SearchIcon } from "@chakra-ui/icons";

const recipes = [
	{
		id: 1,
		name: "Channa masala",
		img: "https://minimalistbaker.com/wp-content/uploads/2016/02/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg",
		description: "Yummy snack for the perfect samosa paired evenings!",
		ingridients: [],
		instructions: [],
	},
	{
		id: 2,
		name: "sample 1",
		img: "https://minimalistbaker.com/wp-content/uploads/2016/02/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg",
		description: "Yummy snack for the perfect samosa paired evenings!",
		ingridients: [],
		instructions: [],
	},
	{
		id: 3,
		name: "sample 2",
		img: "https://minimalistbaker.com/wp-content/uploads/2016/02/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg",
		description: "Yummy snack for the perfect samosa paired evenings!",
		ingridients: [],
		instructions: [],
	},
	{
		id: 4,
		name: "sample 3",
		img: "https://minimalistbaker.com/wp-content/uploads/2016/02/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg",
		description: "Yummy snack for the perfect samosa paired evenings!",
		ingridients: [],
		instructions: [],
	},
];

function App() {
	let [search, setSearch] = useState("");
	let [recipeList, setRecipeList] = useState(recipes);

	function onSearch() {
		setRecipeList(
			recipes.filter((r) => r.name.toLowerCase().includes(search.toLowerCase()))
		);
	}

	return (
		<Container maxW="4xl">
			<Heading m="2rem" size="3xl" textAlign="center">
				Cookbook
			</Heading>
			<Flex justifyContent="center">
				<InputGroup maxW="lg">
					<InputLeftElement pointerEvents="none">
						<SearchIcon color="gray.300" />
					</InputLeftElement>
					<Input
						type="tel"
						placeholder="Recipe name"
						onChange={(e) => {
							setSearch(e.target.value);
						}}
						value={search}
					/>
				</InputGroup>
				<Button ml="1rem" onClick={onSearch}>
					Search
				</Button>
			</Flex>
			<SimpleGrid columns={3} m="1rem">
				{recipeList.map((recipe) => (
					<ReceipeCard
						key={recipe.id}
						id={recipe.id}
						image={recipe.img}
						title={recipe.name}
						description={recipe.description}
					/>
				))}
			</SimpleGrid>
		</Container>
	);
}

export default App;
