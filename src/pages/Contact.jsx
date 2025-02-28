import React from "react";
import { Box, Heading, Text, Image, Container, Grid, GridItem, VStack, Button, HStack, Icon, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        position="relative"
        h={{ base: "60vh", md: "70vh" }}
        bgImage="url('http://stock.calucid.com/fetch/calucid/north-square-farmers-market/contact-us-banner')"
        bgSize="cover"
        bgPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} p={8} bg="rgba(0, 0, 0, 0.6)" borderRadius="md">
          <Heading color="white" fontSize={{ base: "2xl", md: "4xl" }} textAlign="center">
            Get in Touch with Us
          </Heading>
          <Text color="white" fontSize={{ base: "md", md: "lg" }} textAlign="center">
            Have questions? Reach out to us, and we'll be happy to help!
          </Text>
        </VStack>
      </Box>

      {/* Contact Info Section */}
      <Container maxW="6xl" py={16} textAlign="center">
        <Heading fontSize="3xl" mb={4}>Contact Information</Heading>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
          {[
            { icon: FaEnvelope, title: "Email Us", info: "info@northsquaremarket.com" },
            { icon: FaPhone, title: "Call Us", info: "(555) 123-4567" },
            { icon: FaMapMarkerAlt, title: "Visit Us", info: "123 Farmers Market Lane, North Square, NY 10001" },
          ].map((item, index) => (
            <GridItem key={index} p={5} bg="white" borderRadius="md" boxShadow="md" textAlign="center">
              <Icon as={item.icon} boxSize={12} color="green.500" mb={4} />
              <Heading fontSize="xl">{item.title}</Heading>
              <Text fontSize="md" color="gray.600" mt={2}>{item.info}</Text>
            </GridItem>
          ))}
        </Grid>
      </Container>

      {/* Social Media Links */}
      <Box bg="gray.100" py={16}>
        <Container maxW="6xl" textAlign="center">
          <Heading mb={6}>Follow Us on Social Media</Heading>
          <HStack spacing={8} justify="center">
            {[
              { icon: FaFacebook, name: "Facebook", link: "https://facebook.com/northsquaremarket" },
              { icon: FaInstagram, name: "Instagram", link: "https://instagram.com/northsquaremarket" },
              { icon: FaTwitter, name: "Twitter", link: "https://twitter.com/northsquaremarket" },
            ].map((social, index) => (
              <Button as="a" href={social.link} target="_blank" leftIcon={<Icon as={social.icon} boxSize={6} />} key={index} colorScheme="green" variant="outline" size="lg">
                {social.name}
              </Button>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* Contact Form */}
      <Container maxW="4xl" py={16}>
        <Heading textAlign="center" mb={8}>Send Us a Message</Heading>
        <Box bg="white" p={8} borderRadius="md" boxShadow="md">
          <form>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter your name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Write your message here..." rows={5} />
              </FormControl>
              <Button colorScheme="green" size="lg" mt={4}>Submit</Button>
            </VStack>
          </form>
        </Box>
      </Container>

      {/* FAQ Section */}
      <Box bg="gray.50" py={16}>
        {/* <Container maxW="6xl">
          <Heading textAlign="center" mb={8}>Frequently Asked Questions</Heading>
          <VStack spacing={6} textAlign="left">
            {[
              { q: "Where is the market located?", a: "We are located at 123 Farmers Market Lane, North Square, NY 10001." },
              { q: "How do I become a vendor?", a: "You can apply through our vendor application form on the website." },
              { q: "Is the market open year-round?", a: "No, we operate from April to October each year." },
              { q: "Can I bring my pet?", a: "Yes! Leashed pets are welcome at the market." },
            ].map((faq, index) => (
              <Box key={index} p={5} bg="white" borderRadius="md" boxShadow="sm">
                <Heading fontSize="lg" mb={2}>{faq.q}</Heading>
                <Text fontSize="md" color="gray.700">{faq.a}</Text>
              </Box>
            ))}
          </VStack>
        </Container> */}
        <Box textAlign="center" py={16}>
        <Heading fontSize="2xl" mb={4}>We'd Love to Hear from You!</Heading>
        <Text fontSize="lg" color="gray.700">
          Whether you have questions or just want to say hello, feel free to reach out.
        </Text>
        <HStack spacing={6} mt={6} justify="center">
          <Button as="a" href="mailto:info@northsquaremarket.com" colorScheme="green" size="lg">Email Us</Button>
          <Button as="a" href="tel:5551234567" colorScheme="blue" size="lg">Call Us</Button>
        </HStack>
      </Box>
      </Box>

      {/* <Box textAlign="center" py={16}>
        <Heading fontSize="2xl" mb={4}>We'd Love to Hear from You!</Heading>
        <Text fontSize="lg" color="gray.700">
          Whether you have questions or just want to say hello, feel free to reach out.
        </Text>
        <HStack spacing={6} mt={6} justify="center">
          <Button as="a" href="mailto:info@northsquaremarket.com" colorScheme="green" size="lg">Email Us</Button>
          <Button as="a" href="tel:5551234567" colorScheme="blue" size="lg">Call Us</Button>
        </HStack>
      </Box> */}
    </Box>
  );
};

export default Contact;
