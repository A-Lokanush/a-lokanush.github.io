/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, HStack, Divider, Text, VStack, useColorMode, useColorModeValue, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Kbd } from "@chakra-ui/react";
import styles from "./styles.module.css";
import { content } from "../../content/projects/projectDetails";

const Projects = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("white", "#121212");
  const fg = useColorModeValue('#121212', 'white');

  return (
    <Accordion defaultIndex={2} allowMultiple bg={bg}>
      {
        content.map((section) => {
          return (
            <AccordionItem>
              <AccordionButton>
                <Box fontWeight="bold" fontSize='lg' as="span" flex='1' textAlign='left'>
                  {section.sectionName}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <VStack background={bg} divider={<Divider borderColor='gray.250' />} spacing={16} className={styles.main} p={5} pb={10}>
                  {
                    section.projects.map((prj) => {
                      return (
                        <Box className={styles.prj}>
                          <VStack className={styles.content}>
                            <Text fontSize='2xl' fontWeight={800} pb={3} textTransform='uppercase'>{prj.title}</Text>
                            <Text className={styles.description}>{prj.description}</Text>
                            <HStack spacing={5} className={styles.stack} fontSize='sm'>
                              {prj.stack.map((item: any) => {
                                return (<Kbd textTransform='uppercase' p={1}>{item}</Kbd>)
                              })}
                            </HStack>
                            <HStack pt={3} spacing={10} fontWeight="bold" className={styles.link}>
                              {prj.prjLink !== "@" ? <Box className={styles.button} background={bg} color={fg} p={1.5} css={{
                                border: colorMode == 'light' ? '1px solid black' : '1px solid #B1B1B1',
                                transition: 'box-shadow 1s, top 1s, left 1s',
                                boxShadow: colorMode == 'light' ? '10px 10px 0 -2px #121212, 10px 10px #B1B1B1' : '10px 10px 0 -2px #B1B1B1, 10px 10px #121212'
                              }}
                                _hover={{
                                  boxShadow: colorMode == 'light' ? '0px 0px 0 5px #B1B1B1, 0px 0px 0 7px #121212, -5px -5px 0 -200px #B1B1B1, -5px -5px #121212' : '0px 0px 0 5px #121212, 0px 0px 0 7px #B1B1B1, -5px -5px 0 -200px #121212, -5px -5px #B1B1B1',
                                  transition: 'box-shadow 1s, top 1s, left 1s'
                                }}
                              ><a href={prj.prjLink} target="_blank">Checkout Project</a></Box> : null}
                              
                              {prj.githubLink !== "@" ? <Box className={styles.button} background={fg} color={bg} p={1.5} css={{
                                border: colorMode == 'dark' ? '1px solid black' : '1px solid #D3D3D3',
                                transition: 'box-shadow 1s, top 1s, left 1s',
                                boxShadow: colorMode == 'dark' ? '10px 10px 0 -2px #121212, 10px 10px #D3D3D3' : '10px 10px 0 -2px #D3D3D3, 10px 10px #121212'
                              }}
                                _hover={{
                                  boxShadow: colorMode == 'light' ? '0px 0px 0 5px #D3D3D3, 0px 0px 0 7px #121212, -5px -5px 0 -200px #D3D3D3, -5px -5px #121212' : '0px 0px 0 5px #121212, 0px 0px 0 7px #D3D3D3, -5px -5px 0 -200px #121212, -5px -5px #D3D3D3',
                                  transition: 'box-shadow 1s, top 1s, left 1s'
                                }}><a href={prj.githubLink} target="_blank">Checkout Github</a></Box> : null}
                            </HStack>
                          </VStack>
                          {/* <Box className={styles.card} css={{
                            boxShadow: colorMode == 'light' ? '15px 15px 0 -2px white, 15px 15px #121212, -15px -15px 0 -2px white, -15px -15px #121212' : '15px 15px 0 -2px #121212, 15px 15px white, -15px -15px 0 -2px #121212, -15px -15px white',
                            transition: 'box-shadow 1s, top 1s, left 1s'
                          }}
                            _hover={{
                              boxShadow: colorMode == 'light' ? '0px 0px 0 15px white, 0px 0px 0 17px #121212, -5px -5px 0 -200px white, -5px -5px #121212' : '0px 0px 0 15px #121212, 0px 0px 0 17px white, -5px -5px 0 -200px #121212, -5px -5px white',
                              transition: 'box-shadow 1s, top 1s, left 1s'
                            }}
                          >
                            <Image src={prj.prjPhotos} alt={`${prj.title}`} />
                          </Box> */}
                        </Box>);
                    })
                  }
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          );
        })
      }
    </Accordion>
  )
}

export default Projects;