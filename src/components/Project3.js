import { Box, Typography } from '@mui/material';
import ss3 from '../assets/ss3.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Project3 = () => {
    return (
        <>
            <Box width='50%' display='flex' flexDirection='column' height='650px' position='relative' pt='45px' pl='45px' backgroundColor='#f36961' borderRadius='10px' overflow='hidden'>
                <Box display='flex' flexDirection='column' gap='10px' pr='30px'>
                    <Typography fontWeight='bold' fontSize='28px' color='#1c232e'>
                        Login Page
                    </Typography>

                    <Typography fontSize='17px' color='#3a424e' lineHeight='25px'>
                        Simple login page created using only HTML and CSS. No frameworks have been used. Consists of a login page and a forgot password page.                            </Typography>

                    <Box display='flex' alignItems='center' gap='5px' width='116px' borderBottom='solid 2px' borderColor='#29313d' sx={{ cursor: 'pointer' }}>
                        <Typography fontWeight='bold' fontSize='20px' color='#29313d'>
                            See Work
                        </Typography>

                        <ArrowRightAltIcon sx={{ color: '#29313d' }} />
                    </Box>
                </Box>

                <img src={ss3} alt='Login Page' width='100%' style={{ borderRadius: '10px', position: 'absolute', bottom: '-10px' }} />
            </Box>
        </>
    )
}

export default Project3
