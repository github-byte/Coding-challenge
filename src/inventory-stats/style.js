import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    statsBox: {
        borderRadius: 8,
        padding: 10,
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.secondary.main : grey[200]
    }
}));

export default useStyles;
