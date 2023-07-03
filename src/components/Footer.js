import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <>
            <Box display='flex' justifyContent='center' alignItems='center' gap='5px' color='white' fontSize='17px' backgroundColor='#29313d' mt='100px' p='20px'>
                Made with
                <FavoriteIcon sx={{ width: '15px' }} />
                by
                <Typography fontSize='17px' color='#676cdb' sx={{ textDecoration: 'underline', cursor: 'pointer' }}>
                    devfolio.io
                </Typography>
            </Box>
        </>
    )
}

export default Footer
