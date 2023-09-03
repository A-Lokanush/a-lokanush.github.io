/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import styles from "./styles.module.css";

const SideContent = [
  { link: 'https://www.instagram.com/___la23.___/', icon: <InstagramIcon /> },
  { link: '#', icon: <TwitterIcon /> },
  { link: 'https://linkedin.com/in/lokanushananthan/', icon: <LinkedInIcon /> },
  { link: 'https://github.com/A-Lokanush', icon: <GithubIcon /> },
]

const Sidebar = () => {
  const fg = useColorModeValue('#121212', 'white');
  const bg = useColorModeValue('white', '#121212');

  return (
    <Box className={styles.sidebar} background={bg} p={1}>
      {SideContent.map((entry: any) => {
        return (
          <div><Link pl={1} pr={1} href={entry.link} fontSize="lg" isExternal color={fg}>{entry.icon}</Link></div>
        )
      })}
    </Box>
  )
}

export default Sidebar;