/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Navbar, Sidebar } from "../index";
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from "react";

interface AppLayoutProps {
	children: JSX.Element;
}

export type { AppLayoutProps };

const AppLayout = (props: AppLayoutProps) => {
	const navigate = useNavigate();
	const handleKeyPress = useCallback((event: any) => {
		if(event.shiftKey && event.key === 'A') { navigate('/', { replace: true }); }
		else if(event.shiftKey && event.key === 'P') { navigate('/projects', { replace: true }); }
		else if(event.shiftKey && event.key === 'B') { navigate('/blogs', { replace: true }); }
		else if(event.shiftKey && event.key === 'D') { window.open('https://drive.google.com/file/d/1IPlCQ3kuGY5A9hS2W2ZfIzC3j-Tgo3kJ/view?usp=sharing', '_blank'); }
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, [handleKeyPress]);

	const bg = useColorModeValue('white', '#121212');

	return (
		<>
			<Navbar />
			<Sidebar />
			<Box background={bg} className={styles.bg}></Box>
			<Box background={bg} className={styles.main}>
				{props.children}
			</Box>
		</>
	);
};

export default AppLayout;