import React from "react";
// import { useFetch } from "./hooks/UseFetch";

import Drop from "./Drop";
import style from "../styles/Dropdown.module.css";

function Dropdown({ dataID, dataHousing, dataAbout }) {
    if (dataAbout) {
        return (
            <section>
                {dataAbout.map((el) => {
                    return (
                        <Drop
                            key={el.id + Math.random()}
                            title={el.title}
                            description={el.description}
                            page="about"
                            id={el.id}
                        />
                    );
                })}
            </section>
        );
    } else {
        let toolsIteration;
        dataHousing.map((el) => {
            return (toolsIteration = el.equipments.map((tools) => (
                <li key={el.id + Math.random()} className={style.listTools}>
                    {tools}
                </li>
            )));
        });
        return (
            <section>
                <div key={Math.random()} className={style.dropdownRow}>
                    <Drop
                        key={dataID + Math.random()}
                        description={dataHousing[0].description}
                        page="housing"
                        tool={toolsIteration}
                        id={dataID}
                        title={"Description"}
                    />
                    <Drop
                        key={dataID + Math.random()}
                        description={dataHousing[0].equipments}
                        page="housing"
                        tool={toolsIteration}
                        id={dataID}
                        title={"Équipements"}
                        ul={true}
                    />
                </div>
            </section>
        );
    }
}
export default Dropdown;
