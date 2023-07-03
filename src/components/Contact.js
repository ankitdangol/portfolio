import { Box, Typography } from "@mui/material"
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import MessageForm from "./MessageForm"

const Contact = () => {
    return (
        <>
            <Box display='flex' justifyContent='space-between' alignItems='center' mt='150px' px='60px'>
                <Box display='flex' flexDirection='column' gap='50px' width='50%'>
                    <Box display='flex' flexDirection='column' gap='10px'>
                        <Typography fontWeight='bold' fontSize='38px' color='white'>
                            Contact Me
                        </Typography>

                        <Typography fontSize='24px'>
                            Reach out to me, 24/7
                        </Typography>
                    </Box>

                    <Box display='flex' flexDirection='column' gap='25px'>
                        <Box display='flex' flexDirection='column' gap='5px'>
                            <Typography fontSize='17px' fontWeight='bold'>
                                Email me:
                            </Typography>

                            <Typography color='#676cdb' fontWeight='bold' fontSize='28px' sx={{ cursor: 'pointer' }}>
                                ankitdangol2013@gmail.com
                            </Typography>
                        </Box>

                        <Box display='flex' flexDirection='column' gap='5px'>
                            <Typography fontSize='17px' fontWeight='bold'>
                                Call Me:
                            </Typography>

                            <Typography color='#676cdb' fontWeight='bold' fontSize='28px' sx={{ cursor: 'pointer' }}>
                                +977 9841340350
                            </Typography>
                        </Box>

                        <Box display='flex' flexDirection='column' gap='5px'>
                            <Typography fontSize='17px' fontWeight='bold'>
                                Follow Me:
                            </Typography>

                            <Box display='flex' gap='30px'>
                                <img src={linkedin} alt='LinkedIn' width='35px' style={{ cursor: 'pointer' }} />
                                <img src={github} alt='GitHub' width='35px' style={{ cursor: 'pointer' }} />
                                <img src={instagram} alt='Instagram' width='35px' style={{ cursor: 'pointer' }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <MessageForm />
            </Box>
        </>
    )
}

export default Contact
