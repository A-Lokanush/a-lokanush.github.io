import { useColorModeValue } from "@chakra-ui/react";

function useColorModeValueFn(lColor: string, dColor: string) {
    return useColorModeValue(lColor, dColor);
}

export const bg = useColorModeValueFn('white', '#121212')
export const fg = useColorModeValueFn('#121212', 'yellow')