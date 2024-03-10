import React, {useRef} from 'react';
import {TextField} from "@mui/material";
import styled from "@emotion/styled";
import styles from './AuthInput.module.scss'


export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'rgba(190, 220, 227, 1)',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'rgba(190, 220, 227, 1)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(190, 220, 227, 1)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(190, 220, 227, 1)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(190, 220, 227, 1)',
        },
    },
});



function AuthInput(props: any) {
    const ref = useRef();
    return (
        <CssTextField ref={ref} className={styles.AuthInput} {...props}/>
    );
}
export default AuthInput;