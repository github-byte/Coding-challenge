import { alpha, styled } from '@mui/material/styles';
import { lime } from '@mui/material/colors';
import Switch from '@mui/material/Switch';

export const Toggle = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: lime[600],
        '&:hover': {
            backgroundColor: alpha(lime[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: lime[600],
    },
}));
