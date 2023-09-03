/* eslint-disable @typescript-eslint/no-explicit-any */
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Link as ChakraLink, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import styles from "./styles.module.css";

const NavContent = [
    { index: 0, name: "About Me", link: "/" },
    { index: 1, name: "Projects", link: "/projects" },
    { index: 2, name: "Blogs", link: "/blogs" },
    { index: 3, name: "Download Résume", link: "https://drive.google.com/file/d/1IPlCQ3kuGY5A9hS2W2ZfIzC3j-Tgo3kJ/view?usp=sharing" }
];

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('white', '#121212');
    const fg = useColorModeValue('#121212', 'white');
    const bool = window.innerWidth > 1000;

    return (
        <>
            <Box className={styles.navbar} background={bg} pb={1.5}>
                {NavContent.map((entry: any) => {
                    return (
                        <span className={styles.entry}>
                            {entry.index !== 3 ? <ChakraLink as={ReactRouterLink} to={entry.link} color={fg} background={bg} p={bool ? 2.5 : 1.5}>
                                {entry.name}
                            </ChakraLink> : <ChakraLink href={entry.link}
                                isExternal color={bg} background={fg} p={bool ? 2.5 : 1.5}>
                                {entry.name}
                            </ChakraLink>
                            }
                        </span>
                    );
                })}
                {bool ? <Button borderRadius={0} onClick={toggleColorMode} color={fg} background={bg}>
                    {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
                </Button> : null}
            </Box>
            {!bool ? <div className={styles.float}><Button size="sm" borderRadius={0} onClick={toggleColorMode} color={fg} background={bg}>
                {colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
            </Button></div> : null}
        </>
    )
}

export default Navbar;