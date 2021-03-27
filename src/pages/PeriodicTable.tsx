import { useState } from 'react';
import categoryColor from '../categoryColor';
import elements from '../elements.json';
import moonIcon from '../assets/icons/moon-solid.svg';
import sunIcon from '../assets/icons/sun-solid.svg';

import styles from '../styles/pages/PeriodicTable.module.css';

export default function PeriodicTable() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }
    
    return (
        <div className={styles.periodicTableContainer} style={{
            backgroundColor: darkMode ? '#18191A' : '#fff'
        }}>
            <h1 className={styles.title} style={{
                color: darkMode ? '#fff' : '#000'
            }}>Periodic Table</h1>
            <div className={styles.elementsContainer}>
                {
                    Object.keys(Array.apply(0,Array(18))).map(Number)
                    .map((number) => {
                        return (
                            <div className={styles.columnLabel} style={{
                                color: darkMode ? '#fff' : '#000',
                                gridColumn: number + 2,
                                gridRow: 1
                            }}>{number + 1}</div>
                        );
                    })
                }
                {
                    Object.keys(Array.apply(0,Array(8))).map(Number)
                    .map((number) => {
                        return (
                            <div className={styles.rowLabel} style={{
                                color: darkMode ? '#fff' : '#000',
                                gridColumn: 1,
                                gridRow: number + 2
                            }}>{number + 1}</div>
                        );
                    })
                }
                {
                    elements.map((element) => {
                        return (
                            <div className={styles.element} style={{
                                backgroundColor: categoryColor.get(element.category) || '#8D99AE',
                                borderColor: darkMode ? '#fff' : '#000',
                                gridColumn: Number(element.xpos) + 1,
                                gridRow: Number(element.ypos) + 1
                            }}>
                                <div className={styles.elementSymbol}>{element.symbol}</div>
                                <div className={styles.elementName}>{element.number}</div>
                            </div>
                        );
                    })
                }
            </div>
            
            <div className={styles.floatingMenuContainer}>
                <button className={styles.darkModeButton} onClick={toggleDarkMode} style={{
                    backgroundColor: darkMode ? '#fff' : '#000',
                    borderColor: darkMode ? '#fff' : '#000'
                }}>
                    {
                        darkMode ? (
                            <img src={sunIcon} alt="Light mode"/>
                        ) : (
                            <img src={moonIcon} alt="Dark mode"/>
                        )
                    }
                </button>
            </div>
        </div>
    );
}