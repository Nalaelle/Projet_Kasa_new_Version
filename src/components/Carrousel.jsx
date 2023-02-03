import React, { useState } from "react";
import Arrow from "../assets/arrowDropdown.svg";
import style from "../styles/Carrousel.module.css";

const Carrousel = ({ dataHousing }) => {
    const [countPicture, setCountPicture] = useState(1);
    let arrayPicture = [];

    dataHousing.map((el) => {
        if (el.pictures) {
            for (let i in el.pictures) {
                arrayPicture.push(el.pictures[i]);
            }
            return { arrayPicture };
        } else return null;
    });

    const counteurImg = arrayPicture.length;
    // accessibilité : tabIndex / onKeyUp

    function handleCountLeft() {
        countPicture > 1 && setCountPicture(countPicture - 1);
        if (countPicture === 1) {
            setCountPicture(countPicture - 1 + counteurImg);
        }
    }

    function handleCountRight() {
        countPicture < counteurImg && setCountPicture(countPicture + 1);
        if (countPicture === counteurImg) {
            setCountPicture(countPicture + 1 - counteurImg);
        }
    }

    return (
        <section className={style.carrousel}>
            <img
                src={Arrow}
                alt=" fleche de direction précedente"
                onClick={handleCountLeft}
            />
            <div className={style.imageCentral}>
                <img
                    src={arrayPicture[countPicture - 1]}
                    alt="Photograpies de l'appartement"
                />
                <span className={style.counter}>
                    {countPicture} / {arrayPicture.length}
                </span>
            </div>
            <img
                src={Arrow}
                alt=" fleche de direction suivante"
                onClick={handleCountRight}
            />
        </section>
    );
};
export default Carrousel;
