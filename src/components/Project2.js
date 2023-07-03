import { Box, Typography } from '@mui/material';
import ss2 from '../assets/ss2.jpg';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Project2 = () => {
    return (
        <>
            <Box width='50%' display='flex' flexDirection='column' height='650px' position='relative' pt='45px' pl='45px' backgroundColor='#f1b457' borderRadius='10px' overflow='hidden'>
                <Box display='flex' flexDirection='column' gap='10px' pr='30px'>
                    <Typography fontWeight='bold' fontSize='28px' color='#1c232e'>
                        To-Do List
                    </Typography>

                    <Typography fontSize='17px' color='#3a424e' lineHeight='25px'>
                        Todo list created using HTML, CSS and JavaScript. The data is stored in and retrieved from local storage. The user can add tasks, delete them and mark them as done.
                    </Typography>

                    <Box display='flex' alignItems='center' gap='5px' width='116px' borderBottom='solid 2px' borderColor='#29313d' sx={{ cursor: 'pointer' }}>
                        <Typography fontWeight='bold' fontSize='20px' color='#29313d'>
                            See Work
                        </Typography>

                        <ArrowRightAltIcon sx={{ color: '#29313d' }} />
                    </Box>
                </Box>

                <img src={ss2} alt='To-Do List' width='100%' style={{ borderRadius: '10px', position: 'absolute', bottom: '-10px' }} />
            </Box>
        </>
    )
}

export default Project2
