import React from "react";
import style from "../styles/Housing.module.css";

function Tags({ tags }) {
    const tagIteration = tags.map((tag) => (
        <span key={Math.random()} className={style.tag}>
            {tag}
        </span>
    ));
    return <div>{tagIteration}</div>;
}

export default Tags;
