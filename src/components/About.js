import { Box, Typography, Button } from '@mui/material';
import techIcon from '../assets/techIcon.png';
import { BorderColor } from '@mui/icons-material';

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

                    <Typography lineHeight='30px'>
                        Enthusiastic and eager to contribute to team success through hard work and attention to detail. Motivated to learn, grow and excel. Not much experienced, but ready to take on challenges and get out of my comfort zone.
                    </Typography>

                    <Box display='flex' flexDirection='column' gap='20px'>
                        <Typography fontWeight='bold' fontSize='28px' color='#676cdb'>
                            Skills
                        </Typography>

                        <Box display='flex' flexDirection='column' gap='20px'>
                            <Box display='flex' gap='20px'>
                                <Button variant="outlined" size="large" sx={{ color: '#676cdb', borderRadius: '20px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit' }}>
                                    reactjs
                                </Button>

                                <Button variant="outlined" size="large" sx={{ color: '#676cdb', borderRadius: '20px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit' }}>
                                    javascript
                                </Button>

                                <Button variant="outlined" size="large" sx={{ color: '#676cdb', borderRadius: '20px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit' }}>
                                    html
                                </Button>

                                <Button variant="outlined" size="large" sx={{ color: '#676cdb', borderRadius: '20px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit' }}>
                                    css
                                </Button>

                                <Button variant="outlined" size="large" sx={{ color: '#676cdb', borderRadius: '20px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit' }}>
                                    git
                                </Button>
                            </Box>

                            <Box display='flex' gap='20px'>
                                <Button variant="outlined" size="large" sx={{ color: '#676cdb', borderRadius: '20px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit' }}>
                                    strapi
                                </Button>

                                <Button variant="outlined" size="large" sx={{ color: '#676cdb', borderRadius: '20px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit' }}>
                                    tailwindcss
                                </Button>

                                <Button variant="outlined" size="large" sx={{ color: '#676cdb', borderRadius: '20px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit' }}>
                                    materialui
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <img src={techIcon} width='45%' />
            </Box>
        </>
    )
}

export default About
