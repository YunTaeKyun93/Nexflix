import React from 'react'
import styles from "../css/Loading.module.css";
import classNames from "classnames/bind";

const ss = classNames.bind(styles);
const Loading = () => {
  return (
    <div className={ss('logo')}>
        <div className={ss('netflix')}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h3>Netflix</h3>
        
    </div>
  )
}

export default Loading