import React from "react";
import Dropdown from "../components/Dropdown";
import style from "../styles/About.module.css";
import { useFetch } from "../components/hooks/UseFetch";

const About = () => {
    const { data } = useFetch("../infos.json");

    return (
        <main className={style.main}>
            <div className={style.imgBanner}></div>
            <Dropdown dataAbout={data} />
        </main>
    );
};

export default About;
