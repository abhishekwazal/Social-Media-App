import {Box,Typography,useTheme,useMediaQuery} from "@mui/material"
import Form from "./Form"

const LoginPage = ()=>{
    const theme=useTheme()
    const isNonMobileScreens =useMediaQuery("(min-width:100px)")
    return (<Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography
                fonstweight="bold"
                fontSize="32px"
                color="primary"
                >
                Xplore
            </Typography>
        </Box>
        <Box width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m= "2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        >
            <Typography fontWeight="500" variant="h5" sx={{mb:"1.5rem"}}>
                welcome to Xplore, social media for sociopaths
            </Typography>
            <Form/>
        </Box>
    </Box>
    )
}

export default LoginPage