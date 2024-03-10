import React from "react";
import styles from './Button.module.scss'
import classNames from "classnames";
import { Button } from "antd";

function MyButton(props: any) {
    const ref = React.useRef();
    return (
        <Button className={classNames(styles.MyButton, props.styleClass)} ref={ref} {...props}/>
    );
}

export default MyButton;