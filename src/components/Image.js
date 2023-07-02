import { Box } from '@mui/material';
import backgroundCurve from '../assets/backgroundCurve.png';
import avatar from '../assets/avatar.png';
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'

const Image = () => {
    return (
        <>
            <Box display='flex' justifyContent='center' mt='55px' pb='75px' position='relative' sx={{ background: `url(${backgroundCurve})`, backgroundSize: '40%', backgroundRepeat: 'no-repeat', backgroundPositionX: 'center', backgroundPositionY: '50px' }}>
                <img src={avatar} width='12%' style={{ borderRadius: '50%', border: 'solid', borderWidth: '5px', borderColor: '#676cdb', padding: '6px' }} />
                <Box display='flex' justifyContent='space-between' position='absolute' top='70px' gap='5px'>
                    <img src={linkedin} width='20%' style={{ cursor: 'pointer' }} />
                    <img src={github} width='20%' style={{ cursor: 'pointer' }} />
                    <img src={instagram} width='20%' style={{ cursor: 'pointer' }} />
                </Box>
            </Box>
        </>
    )
}

export default Image
