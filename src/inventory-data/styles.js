import { hexToRgb } from '@mui/material';
import { lime } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        borderRadius: 8,
        backgroundColor: hexToRgb("#212529"),
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
