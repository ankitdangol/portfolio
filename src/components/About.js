import { Box, Typography, Button } from '@mui/material';
import techIcon from '../assets/techIcon.png';

const About = () => {
    return (
        <>
            <Box display='flex' justifyContent='space-between' alignItems='center' px='60px' mt='200px'>
                <Box width='50%' display='flex' flexDirection='column' gap='50px'>
                    <Box display='flex' flexDirection='column' gap='5px'>
                        <Typography fontWeight='bold' fontSize='38px' color='white'>
                            About
                        </Typography>

                        <Typography fontSize='24px'>
                            Few things about me
                        </Typography>
                    </Box>

                    <Typography lineHeight='30px' fontSize='17px'>
                        Enthusiastic and eager to contribute to team success through hard work and attention to detail. Motivated to learn, grow and excel. Not much experienced, but ready to take on challenges and get out of my comfort zone.
                    </Typography>

                    <Box display='flex' flexDirection='column' gap='20px'>
                        <Typography fontWeight='bold' fontSize='28px' color='#676cdb'>
                            Skills
                        </Typography>

                        <Box display='flex' flexDirection='column' gap='20px'>
                            <Box display='flex' gap='20px'>
                                <Button disableRipple variant="outlined" size="large" sx={{
                                    cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                                    '&.MuiButtonBase-root:hover': {
                                        border: 'solid 3px #676cdb',
                                        background: '#676cdb',
                                        color: 'white'
                                    }
                                }}>
                                    reactjs
                                </Button>

                                <Button disableRipple variant="outlined" size="large" sx={{
                                    cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                                    '&.MuiButtonBase-root:hover': {
                                        border: 'solid 3px #676cdb',
                                        background: '#676cdb',
                                        color: 'white'
                                    }
                                }}>
                                    javascript
                                </Button>

                                <Button disableRipple variant="outlined" size="large" sx={{
                                    cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                                    '&.MuiButtonBase-root:hover': {
                                        border: 'solid 3px #676cdb',
                                        background: '#676cdb',
                                        color: 'white'
                                    }
                                }}>
                                    html
                                </Button>

                                <Button disableRipple variant="outlined" size="large" sx={{
                                    cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                                    '&.MuiButtonBase-root:hover': {
                                        border: 'solid 3px #676cdb',
                                        background: '#676cdb',
                                        color: 'white'
                                    }
                                }}>
                                    css
                                </Button>

                                <Button disableRipple variant="outlined" size="large" sx={{
                                    cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                                    '&.MuiButtonBase-root:hover': {
                                        border: 'solid 3px #676cdb',
                                        background: '#676cdb',
                                        color: 'white'
                                    }
                                }}>
                                    git
                                </Button>
                            </Box>

                            <Box display='flex' gap='20px'>
                                <Button disableRipple variant="outlined" size="large" sx={{
                                    cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                                    '&.MuiButtonBase-root:hover': {
                                        border: 'solid 3px #676cdb',
                                        background: '#676cdb',
                                        color: 'white'
                                    }
                                }}>
                                    strapi
                                </Button>

                                <Button disableRipple variant="outlined" size="large" sx={{
                                    cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                                    '&.MuiButtonBase-root:hover': {
                                        border: 'solid 3px #676cdb',
                                        background: '#676cdb',
                                        color: 'white'
                                    }
                                }}>
                                    tailwindcss
                                </Button>

                                <Button disableRipple variant="outlined" size="large" sx={{
                                    cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                                    '&.MuiButtonBase-root:hover': {
                                        border: 'solid 3px #676cdb',
                                        background: '#676cdb',
                                        color: 'white'
                                    }
                                }}>
                                    materialui
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <img src={techIcon} alt='Programmer' width='45%' />
            </Box>
        </>
    )
}

export default About
