import { Box, Typography, Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ADot from '../assets/ADot.png'

const Header = () => {
    return (
        <>
            <Box display='flex' backgroundColor='#1c232e' justifyContent='space-between' position='fixed' flexBasis={0} zIndex={100} top='0px' left='0px' right='0px' alignItems='center' py='20px' px='65px'>
                <Box display='flex' flex={1}>
                    <img src={ADot} alt='A.' />
                </Box>

                <Box display='flex' flex={1} justifyContent='center' gap='60px'>
                    <Typography fontWeight='bold' fontSize='17px' sx={{ cursor: 'pointer' }}>Portfolio</Typography>
                    <Typography fontWeight='bold' fontSize='17px' sx={{ cursor: 'pointer' }}>About</Typography>
                </Box>

                <Box display='flex' justifyContent='flex-end' flex={1}>
                    <Button size='large' variant="contained" endIcon={<ArrowRightAltIcon />} sx={{
                        py: '13px', px: '35px', backgroundColor: '#676cdb', textTransform: 'inherit',
                        '&.MuiButtonBase-root:hover': {
                            bgcolor: '#676cdb'
                        }
                    }}>
                        <Typography fontWeight='bold' fontSize='15px'>Contact</Typography>
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Header
