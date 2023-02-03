import React, { useState } from "react";
import Arrow from "../assets/arrowDropdown.svg";
import style from "../styles/Dropdown.module.css";

function Drop({ title, description, page, tool, id, ul }) {
    const [dropdownValue, setDropdownValue] = useState(true);
    const [equipmentsValue, setEquipmentsValue] = useState(true);

    let arrowClassName;
    let handleValue;
    if (ul) {
        if (equipmentsValue) {
            arrowClassName = style.arrowClose;
        } else {
            arrowClassName = style.arrowOpen;
        }

        handleValue = () => {
            setEquipmentsValue(!equipmentsValue);
        };
    } else {
        if (dropdownValue) {
            arrowClassName = style.arrowClose;
        } else {
            arrowClassName = style.arrowOpen;
        }
        handleValue = () => {
            setDropdownValue(!dropdownValue);
        };
    }

    const List = () => {
        if (ul) {
            return (
                <ul
                    key={id + Math.random()}
                    className={`${equipmentsValue ? style.close : style.open} ${
                        style.containerTools
                    }`}
                >
                    {tool}
                </ul>
            );
        } else {
            return (
                <p
                    key={id + Math.random()}
                    className={dropdownValue ? style.close : style.open}
                >
                    {description}
                </p>
            );
        }
    };

    let dropdownClassName;
    if (page === "about") {
        dropdownClassName = style.dropdown;
    }
    if (page === "housing") {
        dropdownClassName = style.dropdownHouse;
    }

    return (
        <div
            key={Math.random()}
            className={dropdownClassName}
            onClick={handleValue}
        >
            <div key={Math.random()} className={style.strip}>
                <h3 key={Math.random()} className={style.title}>
                    {title}
                </h3>
                <img
                    tabIndex={0}
                    onKeyDown={(e) => {
                        e = e || window.event;
                        if (e.key === "Enter") {
                            handleValue();
                        }
                    }}
                    role="button"
                    key={Math.random()}
                    src={Arrow}
                    alt="Flèche d'ouverture"
                    className={arrowClassName}
                />
            </div>
            <List />
        </div>
    );
}

export default Drop;

// ********************************************************

// import React, { useState } from "react";
// import Arrow from "../assets/arrowDropdown.svg";
// import style from "../styles/Dropdown.module.css";

// function Drop({ title, description, page, tool, id }) {
//     const [dropdownValue, setDropdownValue] = useState(true);
//     const [equipmentsValue, setEquipmentsValue] = useState(true);

//     if (page === "about") {
//         return (
//             <div
//                 key={Math.random()}
//                 className={style.dropdown}
//                 onClick={() => {
//                     setDropdownValue(!dropdownValue);
//                 }}
//             >
//                 <div key={Math.random()} className={style.strip}>
//                     <h3 key={Math.random()} className={style.title}>
//                         {title}
//                     </h3>
//                     <img
//                         tabIndex={0}
//                         onKeyDown={(e) => {
//                             e = e || window.event;
//                             if (e.key === "Enter") {
//                                 setDropdownValue(!dropdownValue);
//                             }
//                         }}
//                         role="button"
//                         key={Math.random()}
//                         src={Arrow}
//                         alt="Flèche d'ouverture"
//                         className={
//                             dropdownValue ? style.arrowClose : style.arrowOpen
//                         }
//                     />
//                 </div>
//                 <p
//                     key={id + Math.random()}
//                     className={dropdownValue ? style.close : style.open}
//                 >
//                     {description}
//                 </p>
//             </div>
//         );
//     } else {
//         return (
//             <div key={Math.random()} className={style.dropdownRow}>
//                 <div key={id + Math.random()} className={style.dropdownHouse}>
//                     <div
//                         key={id + Math.random()}
//                         className={style.strip}
//                         onClick={() => {
//                             setDropdownValue(!dropdownValue);
//                         }}
//                     >
//                         <h3 key={id + Math.random()} className={style.title}>
//                             Description
//                         </h3>
//                         <img
//                             tabIndex={0}
//                             onKeyDown={(e) => {
//                                 e = e || window.event;
//                                 if (e.key === "Enter") {
//                                     setDropdownValue(!dropdownValue);
//                                 }
//                             }}
//                             role="button"
//                             key={id + Math.random()}
//                             src={Arrow}
//                             alt="Flèche d'ouverture"
//                             className={
//                                 dropdownValue
//                                     ? style.arrowClose
//                                     : style.arrowOpen
//                             }
//                         />
//                     </div>
//                     <p
//                         key={id + Math.random()}
//                         className={dropdownValue ? style.close : style.open}
//                     >
//                         {description}
//                     </p>
//                 </div>
//                 <div key={id + Math.random()} className={style.dropdownHouse}>
//                     <div
//                         key={id + Math.random()}
//                         className={style.strip}
//                         onClick={() => {
//                             setEquipmentsValue(!equipmentsValue);
//                         }}
//                     >
//                         <h3 className={style.title}>Équipements</h3>
//                         <img
//                             tabIndex={0}
//                             onKeyDown={(e) => {
//                                 e = e || window.event;
//                                 if (e.key === "Enter") {
//                                     setEquipmentsValue(!equipmentsValue);
//                                 }
//                             }}
//                             role="button"
//                             key={id + Math.random()}
//                             src={Arrow}
//                             alt="Flèche d'ouverture"
//                             className={
//                                 equipmentsValue
//                                     ? style.arrowClose
//                                     : style.arrowOpen
//                             }
//                         />
//                     </div>
//                     <ul
//                         key={id + Math.random()}
//                         className={`${
//                             equipmentsValue ? style.close : style.open
//                         } ${style.containerTools}`}
//                     >
//                         {tool}
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Drop;
