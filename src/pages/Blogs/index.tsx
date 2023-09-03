import { Box, Image, SimpleGrid, Text, VStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import IMG_1 from "../../assets/4.jpg";
import styles from "./styles.module.css";

// const content = [
//   { title: 'Fancy Title', image: IMG_1, description: 'SOme really awesome title with some    conte text and some buttons    and buttons that will   fit on the screen and show' },
//   { title: 'Fancy Title', image: IMG_1, description: 'SOme really awesome title with some    conte text and some buttons    and buttons that will   fit on the screen and show' },
//   { title: 'Fancy Title', image: IMG_1, description: 'SOme really awesome title with some    conte text and some buttons    and buttons that will   fit on the screen and show' },
//   { title: 'Fancy Title', image: IMG_1, description: 'SOme really awesome title with some    conte text and some buttons    and buttons that will   fit on the screen and show' },
//   { title: 'Fancy Title', image: IMG_1, description: 'SOme really awesome title with some    conte text and some buttons    and buttons that will   fit on the screen and show' },
//   { title: 'Fancy Title', image: IMG_1, description: 'SOme really awesome title with some    conte text and some buttons    and buttons that will   fit on the screen and show' },
//   { title: 'Fancy Title', image: IMG_1, description: 'SOme really awesome title with some    conte text and some buttons    and buttons that will   fit on the screen and show' },
//   { title: 'Fancy Title', image: IMG_1, description: 'SOme really awesome title with some    conte text and some buttons    and buttons that will   fit on the screen and show' }
// ];

const Blogs = () => {
  // const { colorMode } = useColorMode();
  const bg = useColorModeValue("white", "#121212");
  const fg = useColorModeValue('#121212', 'white');
  const bool = window.innerWidth > 1000;

  return (
    <Box background={bg} color={fg} p={5} className={styles.page}>
      <SimpleGrid columns={bool ? 3 : 1} spacing={5} spacingY='5rem'>
        {/* {
          content.map((entry) => {
            return (
              <VStack spacing={5} textAlign='center'>
                <Box className={styles.card} css={{
                  boxShadow: colorMode == 'light' ? '15px 15px 0 -2px white, 15px 15px #121212, -15px -15px 0 -2px white, -15px -15px #121212' : '15px 15px 0 -2px #121212, 15px 15px white, -15px -15px 0 -2px #121212, -15px -15px white',
                  transition: 'box-shadow 1s, top 1s, left 1s'
                }}
                  _hover={{
                    boxShadow: colorMode == 'light' ? '0px 0px 0 15px white, 0px 0px 0 17px #121212, -5px -5px 0 -200px white, -5px -5px #121212' : '0px 0px 0 15px #121212, 0px 0px 0 17px white, -5px -5px 0 -200px #121212, -5px -5px white',
                    transition: 'box-shadow 1s, top 1s, left 1s'
                  }}
                >
                  <Image src={entry.image} alt={entry.title} />
                </Box>
                <Text fontSize='xl' fontWeight={900}>{entry.title}</Text>
                <Text>{entry.description}</Text>
              </VStack>
            )
          })} */}
      </SimpleGrid>
      <Text className={styles.uhoh}>
        Uh Oh... No blogs written as of now. <br/> Stay tuned for future updates
      </Text>
    </Box>
  )
}

export default Blogs;