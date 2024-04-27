import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    textFields: {
        '&>div': {
            height: 40,
            borderRadius: 20,
            marginTop: 8,
            '&>input': {
                color: theme.palette.mode === 'light' ? theme.palette.text.secondary : theme.palette.text.primary
            }
        },
    }
}));

export default useStyles;
