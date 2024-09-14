"use client"
import {
  Box,
  VStack,
  Heading,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react'

const TopicPage = () => {
  // トピックのデータサンプル（実際にはAPIなどから取得する）
  const topics = [
    {
      title: '【虎に翼】花江の孫の名前にネット戦慄「え！？」「ついに」由来は「間違いなく…」「最終形態」',
      source: 'スポーツ報知',
      time: '9/14(土) 14:25',
      image: 'https://www.shimabara-soumen.com/_p/1517/images/pc/1a93a64f.jpg', // 画像のパスを指定
    },
    {
      title: '「ママ～」泣き叫ぶ子ども…人気遊園地で“順番待ち”巡り高齢女性と子連れ女性が大乱闘...',
      source: 'FNNプライムオンライン',
      time: '9/14(土) 17:02',
      image: 'https://dodon-shimabara.com/wp-content/uploads/2023/09/%E3%81%8B%E3%82%93%E3%81%96%E3%82%89%E3%81%97-%E3%82%AA%E3%82%B9%E3%82%B9%E3%83%A1%E5%BA%97.jpg',
    },
    {
      title: '「マジ1ミリも見たくない」「ガッカリ」ジェシー熱愛で綾瀬はるかに辛辣コメント...',
      source: 'SmartFLASH',
      time: '9/14(土) 15:50',
      image: 'https://www.kirishima.co.jp/aji/2011/autumn/25/images/index/img_01.jpg',
    },
  ];

  return (
    <VStack spacing={4} align="start" w="full" p={5} bg="orange.50" px={10}>
      <Heading as="h1" size="lg" ml={4}>トピック</Heading>
      {topics.map((topic, index) => (
        <Flex key={index} borderRadius="lg" overflow="hidden" w="100%">
          <Image 
            src={topic.image} 
            alt={topic.title} 
            height="150px" 
            width="200px"
            objectFit="fill" 
          />
          <Box bg="white" p={5} borderRadius="lg" shadow="xl" w="100%">
            <Text fontSize="sm" color="gray.500" px={5}>{topic.source} {topic.time}</Text>
            <Text mt={2} fontWeight="bold">{topic.title}</Text>
          </Box>
        </Flex>
      ))}
    </VStack>
  );
};

export default TopicPage;
