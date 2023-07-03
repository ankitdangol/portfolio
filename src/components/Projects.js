import { Box, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';

const Projects = () => {
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
                <Project1 />

                <Box display='flex' gap='50px'>
                    <Project2 />
                    <Project3 />
                </Box>
            </Box>

            <Box display='flex' mx='549px' justifyContent='center' alignItems='center' gap='5px' mt='50px' borderBottom='solid 2px' borderColor='#676cdb'>
                <Typography fontSize='22px' fontWeight='bold' color='#676cdb'>
                    Ask for More Projects
                </Typography>

                <ArrowRightAltIcon sx={{ color: '#676cdb' }} />
            </Box>
        </>
    )
}

export default Projects
