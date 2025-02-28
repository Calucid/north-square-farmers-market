import React from "react";
import { Box, Heading, Text, Image, Container, Grid, GridItem, VStack, Button, HStack, Icon } from "@chakra-ui/react";
import { FaCar, FaTrain, FaParking } from "react-icons/fa";
import { Link } from "react-router-dom";

const Visit = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        h={{ base: "60vh", md: "70vh" }}
        bgImage="url('http://stock.calucid.com/fetch/calucid/north-square-farmers-market/market-entrance')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} p={8} bg="rgba(0, 0, 0, 0.6)" borderRadius="md">
          <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
            Plan Your Visit
          </Heading>
          <Text color="white" fontSize={{ base: "md", md: "lg" }} textAlign="center">
            Join us for fresh produce, local crafts, and a welcoming community every weekend.
          </Text>
        </VStack>
      </Box>

      {/* Location & Hours */}
      <Container maxW="6xl" py={16} textAlign="center">
        <Heading fontSize="3xl" mb={4}>Location & Hours</Heading>
        <Text fontSize="lg" color="gray.700" mb={6}>
          📍 **Downtown North Square**  
          123 Farmers Market Lane, North Square, NY 10001
        </Text>

        <Image
          src="http://stock.calucid.com/fetch/calucid/north-square-farmers-market/market-map"
          borderRadius="md"
          boxShadow="lg"
          mx="auto"
          mb={6}
        />

        <Text fontSize="lg" color="gray.700">
          🕒 **Market Hours:**  
          - **Saturdays:** 8:00 AM - 2:00 PM  
          - **Closed on Rainy Days** ☔  
        </Text>
      </Container>

      {/* How to Get Here */}
      <Box bg="gray.100" py={16}>
      <Container maxW="6xl" py={16}>
        <Heading textAlign="center" mb={8}>Frequently Asked Questions</Heading>
        <VStack spacing={6} textAlign="left">
          {[
            { q: "Is there an entrance fee?", a: "No, entry to the farmers market is completely free!" },
            { q: "Are pets allowed?", a: "Yes, we welcome leashed pets! Please be mindful of other visitors." },
            { q: "Can I pay with credit cards?", a: "Most vendors accept credit/debit, but we recommend bringing cash just in case." },
            { q: "Is there seating available?", a: "Yes, we have picnic tables and shaded seating areas." },
          ].map((faq, index) => (
            <Box key={index} p={5} bg="gray.50" borderRadius="md" boxShadow="sm">
              <Heading fontSize="lg" mb={2}>{faq.q}</Heading>
              <Text fontSize="md" color="gray.700">{faq.a}</Text>
            </Box>
          ))}
        </VStack>
      </Container>
      </Box>

      {/* FAQ Section */}


      {/* Call to Action */}
      <Box textAlign="center" py={16}>
        <Heading fontSize="2xl" mb={4}>See You at the Market!</Heading>
        <Text fontSize="lg" color="gray.700">
          Join us for a fun-filled day of fresh produce, handmade goods, and community spirit.
        </Text>
        {/* <HStack spacing={6} mt={6} justify="center">
          <Link to="/vendors">
            <Button colorScheme="green" size="lg">Become a Vendor</Button>
          </Link>
          <Link to="/contact">
            <Button colorScheme="blue" size="lg">Contact Us</Button>
          </Link>
        </HStack> */}
      </Box>
    </Box>
  );
};

export default Visit;
