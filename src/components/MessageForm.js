import { Box, FormControl, TextField, Button, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const MessageForm = () => {
    return (
        <>
            <Box width='42%' p='50px' pt='60px' backgroundColor='#29313d'>
                <FormControl fullWidth>
                    <Box borderBottom='solid 2px #3a424e' pb='10px' mb='35px'>
                        <TextField fullWidth variant='standard' placeholder='Your Name' InputProps={{ disableUnderline: true }} sx={{ input: { color: '#b1b3b7' } }} />
                    </Box>

                    <Box borderBottom='solid 2px #3a424e' pb='10px' mb='35px'>
                        <TextField fullWidth variant='standard' placeholder='Email Address' InputProps={{ disableUnderline: true }} sx={{ input: { color: '#b1b3b7' } }} />
                    </Box>

                    <Box borderBottom='solid 2px #3a424e' pb='100px' mb='35px'>
                        <TextField fullWidth variant='standard' placeholder='Write Message...' InputProps={{ disableUnderline: true }} sx={{ input: { color: '#b1b3b7' } }} />
                    </Box>

                    <Box width='50%'>
                        <Button size='large' variant="contained" endIcon={<ArrowRightAltIcon />} sx={{
                            py: '20px', px: '35px', backgroundColor: '#676cdb', textTransform: 'inherit',
                            '&.MuiButtonBase-root:hover': {
                                bgcolor: '#676cdb'
                            }
                        }}>
                            <Typography fontWeight='bold' fontSize='18px'>Send Message</Typography>
                        </Button>
                    </Box>
                </FormControl>
            </Box >
        </>
    )
}

export default MessageForm
