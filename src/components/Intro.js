import { Box, Typography } from '@mui/material';

const Intro = () => {
    return (
        <>
            <Box display='flex' flexDirection='column' gap='10px' mt='160px' px='295px' textAlign='center'>
                <Typography fontSize='58px' fontWeight='bold' color='white'>
                    Front-End Web Developer
                </Typography>

                <Typography fontSize='17px'>
                    Hey! I am a front-end web developer mainly focused on React JS. I have been working with React for a year now and find it really enjoyable. I consider myself really strong in the problem-solving part of programming. Other than this, my interests lie in sports, music and travelling.
                </Typography>
            </Box>
        </>
    )
}

export default Intro
