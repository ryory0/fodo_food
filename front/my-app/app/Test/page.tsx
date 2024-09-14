"use client";

import { Box, Image, VStack, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);
const MotionOverlay = motion(Box);

const ExpandableImage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <VStack spacing={4} align="center" mt={10}>
      <AnimatePresence>
        {isExpanded && (
          <MotionOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            bg="black"
            position="fixed"
            top={0}
            left={0}
            width="100vw"
            height="100vh"
            zIndex={10}
            onClick={toggleExpand} // 背景をクリックしても閉じる
          />
        )}
      </AnimatePresence>

      <MotionBox
        onClick={toggleExpand}
        bg="gray.800"
        borderRadius="md"
        overflow="hidden"
        width={isExpanded ? "80%" : "40%"}
        height={isExpanded ? "auto" : "200px"}
        cursor="pointer"
        position="relative"
        layout
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        zIndex={20} // 画像がオーバーレイよりも上に表示されるようにする
      >
        <Image
          src="https://via.placeholder.com/800x400" // 画像のURLを変更してください
          alt="Sample Image"
          objectFit="cover"
          width="100%"
          height="100%"
        />
        {isExpanded && (
          <Box
            position="absolute"
            bottom="0"
            left="0"
            width="100%"
            bg="rgba(0, 0, 0, 0.5)"
            color="white"
            p={4}
          >
            <Text fontSize="lg" fontWeight="bold">
              5 Food Apps Delivering the Best of Your City
            </Text>
            <Text mt={2}>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Ante praesent dui sodales rhoncus eu? 
              Hac pellentesque non est. Auctor diam dictum per ut fames.
            </Text>
          </Box>
        )}
      </MotionBox>
    </VStack>
  );
};

export default ExpandableImage;
