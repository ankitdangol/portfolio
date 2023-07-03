import { Box, Typography } from '@mui/material';
import ss1 from '../assets/ss1.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Project1 = () => {
    return (
        <>
            <Box display='flex' justifyContent='space-between' alignItems='center' gap='25px'>
                <Box display='flex' flexDirection='column' width='50%' gap='10px'>
                    <Typography fontSize='28px' fontWeight='bold' color='white'>
                        Task Management System
                    </Typography>

                    <Typography lineHeight='25px' fontSize='17px'>
                        Strapi integrated task management system designed to create tasks as tickets and track the progress of the task through status pills. Also consists of a forum where the task assigner and the assignee can communicate with each other. Data is CRUD through API endpoints created from Strapi.
                    </Typography>

                    <Box display='flex' alignItems='center' gap='5px' width='116px' borderBottom='solid 2px' borderColor='#3aafc9' sx={{ cursor: 'pointer' }}>
                        <Typography fontWeight='bold' fontSize='20px' color='#3aafc9'>
                            See Work
                        </Typography>

                        <ArrowRightAltIcon sx={{ color: '#3aafc9' }} />
                    </Box>
                </Box>

                <Box width='45%' height='270px' borderRadius='10px' sx={{ backgroundColor: '#3aafc9', overflow: 'hidden', position: 'relative' }}>
                    <img src={ss1} alt='Task Management System' width='97%' style={{ borderRadius: '10px', position: 'absolute', top: '40px', left: '35px' }} />
                </Box>
            </Box>
        </>
    )
}

export default Project1
