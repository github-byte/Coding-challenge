import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    textFields: {
        '&>div': {
            height: 40,
            borderRadius: 20,
            marginTop: 8
        },
    }
}));

export default useStyles;
