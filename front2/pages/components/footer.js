import React from 'react'
import NavMobile from './header_mobile.js'
import styles from '.././../styles/Footer.module.css'


export default function footer() {
  return (
    <>
        <NavMobile/>
        <footer className={styles.footer}>
        <div className={styles.row}>
            <a href="https://www.departement13.fr/" target="_blank" className={styles.column}>
            <img src="/img/Bouches-du-Rhone_13_logo.png" alt="d13" />
            </a>
            <a href="https://voyage-prive.com/" target="_blank" className={styles.column}>
            <img src="/img/Voyage_Prive.svg.png" alt="voyage privé" />
            </a>
            <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" className={styles.column}>
            <img src="/img/AWS.png" alt="aws" />
            </a>
        </div>
        <div className={styles.row}>
            <a href="https://www.myprovence.fr/" target="_blank" className={styles.column}>
            <img className={styles.smaller} src="/img/provencetourisme.png" alt="my provence"  />
            </a>
            <a href="https://inco-group.co/" target="_blank" className={styles.column}>
            <img className={styles.smaller} src="/img/inco.png" alt="inco"  />
            </a>
            <a href="https://code4marseille.fr/" target="_blank" className={styles.column}>
            <img className={styles.smaller} src="/img/code4marseille.png" alt="code4marseille"  />
            </a>
        </div>
        </footer>
    </>
  )
}
