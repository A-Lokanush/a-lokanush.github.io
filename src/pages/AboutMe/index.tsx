import { useEffect, useState } from "react";
import { Box, Divider, HStack, Heading, Image, Kbd, Link, StackDivider, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { IMAGES } from "../../content/about/images";

const AboutMe = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("white", "#121212");
  const fg = useColorModeValue('#121212', 'white');
  const sc = useColorModeValue("rgb(75, 168, 176)", "rgb(182, 249, 249)");
  const tc = useColorModeValue("#ff6700", "#ffb38a");
  const bool = window.innerWidth > 1000;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => (count + 1) % 4);
    }, 15000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <Box className={styles.page} background={bg} color={fg}>
      <Box className={styles.text}>
        <br />
        <Heading as='h2'>Hóla, I am Lokanush from <Link color={tc} href='https://goo.gl/maps/6f9AmPr1rdALvfst6' isExternal>Chennai, India</Link></Heading>
        <br />
        <HStack divider={<StackDivider borderColor='gray.600' />} spacing={4}>
          <Box>
            <Text fontSize={bool ? "lg" : "md"}>
              Final year at <Link color={sc} href='https://www.nitt.edu' isExternal>
                National Institute of Technology, Trichirappalli <ExternalLinkIcon mb='5px' />
              </Link> studying Computer Science and Engineering
            </Text>
            <br />
            <Divider borderColor='gray.250' />
            <br />
            <Text fontSize={bool ? "lg" : "md"}>
              MySQL, MongoDB and PostgreSQL are the DBs I have tried. Other tools I use are git, VS Code, Linux(Debian + i3) and Postman.
              I do DSA & CPs mostly using C++.
            </Text>
            <br />
            <Divider borderColor='gray.250' />
            <br />
            <Text fontSize={bool ? "lg" : "md"}>
              To reach me just drop a message on my socials listed here.
            </Text>
          </Box>
          <Box>
            <Text fontSize={bool ? "lg" : "md"}>
              I am proficient in HTML, CSS, JavaScript, TypeScript and Node. I have worked on frameworks like ReactJs, ExpressJs, Flask and NextJs.
            </Text>
            <br />
            <Divider borderColor='gray.250' />
            <br />
            <Text fontSize={bool ? "lg" : "md"}>
              Eager to collaborate on Open Source Projects. Download my Résume to know my full details.
            </Text>
          </Box>
        </HStack>
        {bool ? <HStack pt={10} spacing={10}>
          <Box>
            <Text>
              <Kbd>Shift</Kbd> + <Kbd>A</Kbd>
            </Text>
            <Text>To About Me</Text>
          </Box>
          <Box>
            <Text>
              <Kbd>Shift</Kbd> + <Kbd>P</Kbd>
            </Text>
            <Text>To Projects</Text>
          </Box>
          <Box>
            <Text>
              <Kbd>Shift</Kbd> + <Kbd>B</Kbd>
            </Text>
            <Text>To Blogs</Text>
          </Box>
          <Box>
            <Text>
              <Kbd>Shift</Kbd> + <Kbd>D</Kbd>
            </Text>
            <Text>View Resume</Text>
          </Box>
        </HStack> : null}
      </Box>
      <Box className={styles.card} css={{
        boxShadow: colorMode == 'light' ? '15px 15px 0 -2px white, 15px 15px #121212, -15px -15px 0 -2px white, -15px -15px #121212' : '15px 15px 0 -2px #121212, 15px 15px white, -15px -15px 0 -2px #121212, -15px -15px white',
        transition: 'box-shadow 1s, top 1s, left 1s'
      }}
        _hover={{
          boxShadow: colorMode == 'light' ? '0px 0px 0 15px white, 0px 0px 0 17px #121212, -5px -5px 0 -200px white, -5px -5px #121212' : '0px 0px 0 15px #121212, 0px 0px 0 17px white, -5px -5px 0 -200px #121212, -5px -5px white',
          transition: 'box-shadow 1s, top 1s, left 1s'
        }}
      >
        <Image onClick={() => setCount(count => (count + 1) % 4)} src={IMAGES[count]} alt='My Picture' />
      </Box>
    </Box>
  )
}

export default AboutMe;