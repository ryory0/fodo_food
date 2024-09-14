"use client"
import {
  VStack,
  Box,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  OrderedList,
  SimpleGrid,
  Flex,
  Divider,
  Icon,
  Avatar,
} from '@chakra-ui/react'
import { CheckCircleIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

type Recipe = {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  process: string[];
};

const RecipeDetail = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipes: Recipe[] = [
        {
          id: 1,
          title: "にんじんのポタージュ",
          imageUrl: "https://image.delishkitchen.tv/recipe/151250772267368947/1.jpg?version=1697429161",
          description: "にんじんと玉ねぎを使ったクリーミーなポタージュです。",
          ingredients: [
            "にんじん - 3本",
            "玉ねぎ - 1個",
            "バター - 20g",
            "コンソメ - 1個",
            "水 - 500ml",
            "牛乳 - 200ml",
            "塩・こしょう - 適量",
          ],
          process: [
            "にんじんと玉ねぎを薄切りにする。",
            "鍋にバターを入れて溶かし、玉ねぎを炒める。",
            "にんじんを加えて炒め、コンソメと水を加えて煮る。",
            "野菜が柔らかくなったらミキサーで滑らかにする。",
            "鍋に戻し、牛乳を加えて温め、塩・こしょうで味を調える。",
          ],
        },
        {
          id: 2,
          title: "サラダそうめん",
          imageUrl: "https://www.kyounoryouri.jp/upfile/r/new_xl_1529308734_3360.jpg",
          description: "さっぱりしたそうめんサラダ。",
          ingredients: ["そうめん - 200g", "トマト - 1個", "きゅうり - 1本"],
          process: ["そうめんを茹でる", "トマトときゅうりを切る", "全てを混ぜる"],
        },
      ];

      const selectedRecipe = recipes.find((recipe) => recipe.id === parseInt(params.id));
      setRecipe(selectedRecipe || null);
    };

    fetchRecipe();
  }, [params.id]);

  if (!recipe) return <Text>Loading...</Text>;

  return (
    <VStack spacing={8} align="start" w="full" p={5} bg="orange.50" px={10}>
      <Heading as="h1" size="lg" ml={4} fontFamily="serif">{recipe.title}</Heading>

      <SimpleGrid columns={[1, 2]} spacing={4} w="full" px={5}>
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          borderRadius="lg"
          boxShadow="xl"
          w="full"
          maxH={500}
          objectFit="cover"
        />

        <Box bg="white" p={5} borderRadius="lg" shadow="xl">
            {/* Avatarとユーザーネームの表示 */}
            <Flex align="center" mb={4}>
                <Avatar name="ユーザー名" src="https://bit.ly/dan-abramov" size="md" mr={3} />
                <Heading as="h3" size="sm" fontFamily="sans-serif">ユーザー名</Heading>
            </Flex>
          <Text fontSize="lg" fontFamily="sans-serif">{recipe.description}</Text>
        </Box>
      </SimpleGrid>

      <Divider />

      <SimpleGrid columns={[1, 2]} spacing={6} w="full" px={5}>
        <Box bg="white" p={5} borderRadius="lg" shadow="xl">
          <Heading as="h2" size="md" mb={4}>材料</Heading>
          <List spacing={3}>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <Icon as={CheckCircleIcon} color="green.500" mr={2} />
                {ingredient}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box bg="white" p={5} borderRadius="lg" shadow="xl">
          <Heading as="h2" size="md" mb={4}>作り方</Heading>
          <OrderedList spacing={3}>
            {recipe.process.map((step, index) => (
              <ListItem key={index}>
                {step}
              </ListItem>
            ))}
          </OrderedList>
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default RecipeDetail;
