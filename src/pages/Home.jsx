import React from "react";
import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="green.700" color="white" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to North Square Farmers Market
          </Heading>
          <Text fontSize="xl" mb={6}>
            Fresh, Local, and Sustainable Produce from Your Community
          </Text>
          <Button as={Link} to="/about" colorScheme="yellow" size="lg">
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Featured Image */}
      <Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/north-square-farmers-market/farmers-market"
          alt="Farmers Market"
          width="100%"
          height="500px"
          objectFit="cover"
        />
      </Box>

      {/* About Section */}
      <Container maxW="container.lg" py={20}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Image
            src="http://stock.calucid.com/fetch/calucid/north-square-farmers-market/fresh-produce"
            alt="Fresh Produce"
            borderRadius="md"
          />
          <Stack spacing={6}>
            <Heading as="h2" size="xl">
              About Us
            </Heading>
            <Text fontSize="lg">
              North Square Farmers Market is dedicated to bringing fresh, locally sourced produce and artisanal goods to our community. We support local farmers and small businesses while providing high-quality, sustainable products.
            </Text>
            <Button as={Link} to="/about" colorScheme="green" size="lg">
              Read More
            </Button>
          </Stack>
        </SimpleGrid>
      </Container>

      {/* Featured Products */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Featured Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/north-square-farmers-market/organic-vegetables"
                alt="Organic Vegetables"
                borderRadius="md"
              />
              <Text fontSize="lg" mt={4}>
                Organic Vegetables
              </Text>
            </Box>
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/north-square-farmers-market/fresh-fruits"
                alt="Fresh Fruits"
                borderRadius="md"
              />
              <Text fontSize="lg" mt={4}>
                Fresh Fruits
              </Text>
            </Box>
            <Box textAlign="center">
              <Image
                src="http://stock.calucid.com/fetch/calucid/north-square-farmers-market/artisan-bread"
                alt="Artisan Bread"
                borderRadius="md"
              />
              <Text fontSize="lg" mt={4}>
                Artisan Bread
              </Text>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box bg="green.700" color="white" py={20} textAlign="center">
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={4}>
            Visit Us Today!
          </Heading>
          <Text fontSize="lg" mb={6}>
            Experience the best local produce and handmade goods at North Square Farmers Market.
          </Text>
          <Button as={Link} to="/visit" colorScheme="yellow" size="lg">
            Get Directions
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;