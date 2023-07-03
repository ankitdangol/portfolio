import { Button } from "@mui/material"

const StatusPill = (props) => {
    return (
        <>
            <Button disableRipple variant="outlined" size="large" sx={{
                cursor: 'auto', color: '#676cdb', borderRadius: '25px', borderWidth: '3px', borderColor: '#676cdb', textTransform: 'inherit',
                '&.MuiButtonBase-root:hover': {
                    border: 'solid 3px #676cdb',
                    background: '#676cdb',
                    color: 'white'
                }
            }}>
                {props.skill}
            </Button>
        </>
    )
}

export default StatusPill
