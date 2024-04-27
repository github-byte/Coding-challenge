import { hexToRgb } from '@mui/material';
import { grey, lime } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        borderRadius: 8,
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[200],
        opacity: 0.9
    },
    borderClass: {
        borderBottom: `1px solid ${theme.palette.mode === "light" ? 'grey' : theme.palette.secondary.main} !important`,
    },
    tableMainCell: {
        backgroundColor: theme.palette.mode === "dark" ? theme.palette.background.dark : theme.palette.background.light,
        color: theme.palette.mode === "dark" ? lime[700] : "black",
        maxWidth: "80px",
        borderRadius: "8px",
        textAlign: "center"
    }
}));

export default useStyles;
