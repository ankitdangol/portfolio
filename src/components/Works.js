import { Box, Typography } from '@mui/material'
import ss1 from '../assets/ss1.png'
import ss2 from '../assets/ss2.jpg'
import ss3 from '../assets/ss3.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Works = () => {
    return (
        <>
            <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography fontSize='38px' fontWeight='bold' color='white'>
                    Portfolio
                </Typography>

                <Typography fontSize='24px'>
                    See my latest work
                </Typography>
            </Box>

            <Box display='flex' flexDirection='column' px='60px' mt='50px' gap='50px'>
                <Box display='flex' justifyContent='space-between' alignItems='center' gap='25px'>
                    <Box display='flex' flexDirection='column' width='55%' gap='10px'>
                        <Typography fontSize='28px' fontWeight='bold' color='white'>
                            Task Management System
                        </Typography>

                        <Typography lineHeight='25px'>
                            Strapi integrated task management system designed to create tasks as tickets and track the progress of the task through status pills. Also consists of a forum where the task assigner and the assignee can communicate with each other. Data is CRUD through API endpoints created from Strapi.
                        </Typography>

                        <Box display='flex' alignItems='center' gap='5px' width='122px' borderBottom='solid' borderColor='#3aafc9' sx={{ cursor: 'pointer' }}>
                            <Typography fontWeight='bold' fontSize='20px' color='#3aafc9'>
                                See Work
                            </Typography>

                            <ArrowRightAltIcon sx={{ color: '#3aafc9' }} />
                        </Box>
                    </Box>

                    <Box width='45%' height='270px' borderRadius='10px' sx={{ backgroundColor: '#3aafc9', overflow: 'hidden', position: 'relative' }}>
                        <img src={ss1} width='97%' style={{ borderRadius: '10px', position: 'absolute', top: '40px', left: '35px' }} />
                    </Box>
                </Box>

                <Box display='flex' gap='50px'>
                    <Box width='50%' display='flex' flexDirection='column' height='666px' position='relative' pt='45px' pl='45px' backgroundColor='#f1b457' borderRadius='10px' overflow='hidden'>
                        <Box display='flex' flexDirection='column' gap='10px' pr='30px'>
                            <Typography fontWeight='bold' fontSize='28px' color='#1c232e'>
                                To-Do List
                            </Typography>

                            <Typography fontSize='17px' color='#3a424e' lineHeight='25px'>
                                Todo list created using HTML, CSS and JavaScript. The data is stored in and retrieved from local storage. The user can add tasks, delete them and mark them as done.
                            </Typography>

                            <Box display='flex' alignItems='center' gap='5px' width='122px' borderBottom='solid' borderColor='#29313d' sx={{ cursor: 'pointer' }}>
                                <Typography fontWeight='bold' fontSize='20px' color='#29313d'>
                                    See Work
                                </Typography>

                                <ArrowRightAltIcon sx={{ color: '#29313d' }} />
                            </Box>
                        </Box>

                        <img src={ss2} width='100%' style={{ borderRadius: '10px', position: 'absolute', bottom: '-10px' }} />
                    </Box>

                    <Box width='50%' display='flex' flexDirection='column' height='666px' position='relative' pt='45px' pl='45px' backgroundColor='#f36961' borderRadius='10px' overflow='hidden'>
                        <Box display='flex' flexDirection='column' gap='10px' pr='30px'>
                            <Typography fontWeight='bold' fontSize='28px' color='#1c232e'>
                                Login Page
                            </Typography>

                            <Typography fontSize='17px' color='#3a424e' lineHeight='25px'>
                                Simple login page created using only HTML and CSS. No frameworks have been used. Consists of a login page and a forgot password page.                            </Typography>

                            <Box display='flex' alignItems='center' gap='5px' width='122px' borderBottom='solid' borderColor='#29313d' sx={{ cursor: 'pointer' }}>
                                <Typography fontWeight='bold' fontSize='20px' color='#29313d'>
                                    See Work
                                </Typography>

                                <ArrowRightAltIcon sx={{ color: '#29313d' }} />
                            </Box>
                        </Box>

                        <img src={ss3} width='100%' style={{ borderRadius: '10px', position: 'absolute', bottom: '-10px' }} />
                    </Box>
                </Box>
            </Box>

            <Box display='flex' mx='540px' justifyContent='center' alignItems='center' gap='5px' mt='50px' borderBottom='solid' borderColor='#676cdb'>
                <Typography fontSize='22px' fontWeight='bold' color='#676cdb'>
                    Ask for More Projects
                </Typography>

                <ArrowRightAltIcon sx={{ color: '#676cdb' }} />
            </Box>
        </>
    )
}

export default Works
