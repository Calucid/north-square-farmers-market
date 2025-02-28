import React from "react";
import { Box, Heading, Text, Image, Container, Grid, GridItem, VStack, Button, HStack, Icon } from "@chakra-ui/react";
import { FaLeaf, FaHandshake, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Vendors = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        h={{ base: "60vh", md: "70vh" }}
        bgImage="url('http://stock.calucid.com/fetch/calucid/north-square-farmers-market/vendors-market')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} p={8} bg="rgba(0, 0, 0, 0.6)" borderRadius="md">
          <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
            Become a Vendor at North Square Farmers Market
          </Heading>
          <Text color="white" fontSize={{ base: "md", md: "lg" }} textAlign="center">
            Join our thriving marketplace and connect with a community that values fresh, local goods.
          </Text>
          <Link to="/contact">
            <Button colorScheme="green" size="lg">Apply Now</Button>
          </Link>
        </VStack>
      </Box>

      {/* Why Become a Vendor? */}
      <Container maxW="6xl" py={16}>
        <Heading textAlign="center" mb={8}>Why Join Us?</Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {[
            { icon: FaLeaf, title: "Support Local", desc: "Be part of a farmers market that champions small businesses and sustainable agriculture." },
            { icon: FaHandshake, title: "Community Engagement", desc: "Connect with loyal customers who appreciate fresh, locally sourced goods." },
            { icon: FaShoppingBasket, title: "Sell More", desc: "Our high foot traffic location ensures excellent exposure for your products." },
          ].map((item, index) => (
            <GridItem key={index} p={5} bg="white" borderRadius="md" boxShadow="md" textAlign="center">
              <Icon as={item.icon} boxSize={12} color="green.500" mb={4} />
              <Heading fontSize="xl">{item.title}</Heading>
              <Text fontSize="md" color="gray.600" mt={2}>{item.desc}</Text>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* Featured Vendors */}
      <Box bg="gray.100" py={16}>
        <Container maxW="6xl">
          <Heading textAlign="center" mb={8}>Meet Some of Our Vendors</Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {[
              { name: "Green Acres Farm", img: "organic-farm", desc: "Certified organic vegetables and fruits." },
              { name: "Baker’s Delight", img: "artisan-bakery", desc: "Freshly baked sourdough and pastries." },
              { name: "Pure Honey Co.", img: "local-honey", desc: "Raw, unfiltered honey straight from the hive." },
            ].map((vendor, index) => (
              <GridItem key={index} p={5} bg="white" borderRadius="md" boxShadow="md" textAlign="center">
                <Image
                  src={`http://stock.calucid.com/fetch/calucid/north-square-farmers-market/${vendor.img}`}
                  borderRadius="md"
                  mb={4}
                />
                <Heading fontSize="xl">{vendor.name}</Heading>
                <Text fontSize="md" color="gray.600" mt={2}>{vendor.desc}</Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How to Apply
      <Container maxW="6xl" py={16} textAlign="center">
        <Heading fontSize="3xl" mb={4}>Interested in Becoming a Vendor?</Heading>
        <Text fontSize="lg" color="gray.700" mb={6}>
          We welcome farmers, bakers, artisans, and small business owners to be part of our vibrant market.
        </Text>
        <Link to="/apply">
          <Button colorScheme="green" size="lg">Apply Now</Button>
        </Link>
      </Container> */}

      {/* Vendor FAQ */}
      {/* <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          <Heading textAlign="center" mb={8}>Frequently Asked Questions</Heading>
          <VStack spacing={6} textAlign="left">
            {[
              { q: "How much does it cost to be a vendor?", a: "Vendor fees vary based on space size. Contact us for detailed pricing." },
              { q: "What kind of vendors can apply?", a: "We accept farmers, food producers, artisans, and handmade product creators." },
              { q: "Is there electricity available?", a: "Limited electrical outlets are available. Please indicate your needs on your application." },
              { q: "What are the setup and teardown times?", a: "Setup begins at 6:30 AM. Vendors must be ready by 8 AM and tear down after 2 PM." },
            ].map((faq, index) => (
              <Box key={index} p={5} bg="white" borderRadius="md" boxShadow="sm">
                <Heading fontSize="lg" mb={2}>{faq.q}</Heading>
                <Text fontSize="md" color="gray.700">{faq.a}</Text>
              </Box>
            ))}
          </VStack>
        </Container>
      </Box> */}

      {/* Call to Action */}
      <Box textAlign="center" py={16}>
        <Heading fontSize="2xl" mb={4}>Join Our Growing Vendor Community!</Heading>
        <Text fontSize="lg" color="gray.700">
          Be part of a marketplace that connects passionate vendors with enthusiastic customers.
        </Text>
        <HStack spacing={6} mt={6} justify="center">
    
          <Link to="/contact">
            <Button colorScheme="blue" size="lg">Contact Us</Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Vendors;
