import React from "react";
import { Box, Heading, Text, Image, Container, Grid, GridItem, VStack, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        h={{ base: "60vh", md: "70vh" }}
        bgImage="url('http://stock.calucid.com/fetch/calucid/north-square-farmers-market/about-us-banner')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} p={8} bg="rgba(0, 0, 0, 0.6)" borderRadius="md">
          <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
            About North Square Farmers Market
          </Heading>
          <Text color="white" fontSize={{ base: "md", md: "lg" }} textAlign="center">
            A marketplace built on community, sustainability, and fresh, local produce.
          </Text>
        </VStack>
      </Box>

      {/* Market History & Mission */}
      <Container maxW="6xl" py={16}>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10} alignItems="center">
          <GridItem>
            <Image
              src="http://stock.calucid.com/fetch/calucid/north-square-farmers-market/farmers-talking"
              borderRadius="md"
              boxShadow="lg"
            />
          </GridItem>
          <GridItem>
            <Heading fontSize="3xl" mb={4}>Our Story</Heading>
            <Text fontSize="lg" color="gray.700">
              Founded over a decade ago, North Square Farmers Market started as a small gathering of local farmers and
              artisans. Today, it has grown into a vibrant hub that connects the community with fresh, sustainable, and
              locally-sourced goods. Our mission is to support local businesses, promote healthy living, and create a
              space for people to come together.
            </Text>
          </GridItem>
        </Grid>
      </Container>

      {/* Why Visit Section */}
      <Box bg="gray.100" py={16}>
        <Container maxW="6xl">
          <Heading textAlign="center" mb={8}>Why Visit North Square Farmers Market?</Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
            {[
              { title: "Fresh, Local Produce", img: "organic-farm-stand", desc: "Our farmers bring the freshest fruits and vegetables, grown with care." },
              { title: "Handmade Goods", img: "handmade-crafts", desc: "Explore unique, handcrafted goods from talented local artisans." },
              { title: "Community & Events", img: "market-community-events", desc: "Join us for live music, cooking demos, and family-friendly activities." },
            ].map((item, index) => (
              <GridItem key={index} p={5} bg="white" borderRadius="md" boxShadow="md" textAlign="center">
                <Image
                  src={`http://stock.calucid.com/fetch/calucid/north-square-farmers-market/${item.img}`}
                  borderRadius="md"
                  mb={4}
                />
                <Heading fontSize="xl">{item.title}</Heading>
                <Text fontSize="md" color="gray.600" mt={2}>{item.desc}</Text>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Meet the Team */}
      <Container maxW="6xl" py={16}>
        <Heading textAlign="center" mb={8}>Meet Our Team</Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {[
            { name: "Emma Carter", role: "Market Coordinator", img: "market-coordinator" },
            { name: "Daniel Lee", role: "Vendor Relations", img: "vendor-relations" },
            { name: "Sophia Brown", role: "Community Events Manager", img: "event-manager" },
          ].map((member, index) => (
            <GridItem key={index} textAlign="center">
              <Image
                src={`http://stock.calucid.com/fetch/calucid/north-square-farmers-market/${member.img}`}
                borderRadius="full"
                boxSize="150px"
                mb={4}
                mx="auto"
              />
              <Heading fontSize="lg">{member.name}</Heading>
              <Text fontSize="md" color="gray.600">{member.role}</Text>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box textAlign="center" py={16}>
        <Heading fontSize="2xl" mb={4}>Join Our Market Family</Heading>
        <Text fontSize="lg" color="gray.700">
          Whether you're a local farmer, artisan, or visitor, we welcome you to be part of our community.
        </Text>
        <HStack spacing={6} mt={6} justify="center">
          <Link to="/vendors">
            <Button colorScheme="green" size="lg">Become a Vendor</Button>
          </Link>
          <Link to="/visit">
            <Button colorScheme="blue" size="lg">Plan Your Visit</Button>
          </Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default About;
