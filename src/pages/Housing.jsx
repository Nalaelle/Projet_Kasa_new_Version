import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";
import style from "../styles/Housing.module.css";
import { useFetch } from "../components/hooks/UseFetch";

const Housing = () => {
    // hook pour la redirection error
    const navigate = useNavigate();
    // call api
    const { data } = useFetch("../data.json");
    const { id } = useParams();
    const houseID = id;

    const dataHousing = data.filter((el) => el.id === houseID);

    useEffect(() => {
        // function qui verifie si la propriété est trouvée
        function Verif() {
            let iteratateID = 0;
            data.map((el) => {
                if (!(el.id === houseID)) {
                    return (iteratateID = iteratateID + 1);
                }
                return null;
            });
            if (iteratateID >= 20) {
                navigate("/error");
            }
        }
        Verif();
    }, [data, houseID, navigate]);

    return dataHousing.map((el) => (
        <main key={Math.random()}>
            <Carrousel dataHousing={dataHousing} />
            <div key={el.id + Math.random()} className={style.infos}>
                <article className={style.location}>
                    <h1>{el.title}</h1>
                    <p>{el.location}</p>
                    <Tags tags={el.tags} />
                </article>
                <article className={style.owner}>
                    <div className={style.infosOwner}>
                        <p>{el.host.name}</p>
                        <img
                            src={el.host.picture}
                            alt={"Propriétaire " + el.host.name}
                        />
                    </div>
                    <Rating numberRating={el.rating} />
                </article>
            </div>
            <Dropdown dataID={houseID} dataHousing={dataHousing} />
        </main>
    ));
};

export default Housing;
