import styles from './Navi.module.css'

export default function Navi() {
    return (
        <>
        <input type="checkbox" id={styles.naviInput}/>
    <label id={styles.burger} for={styles.naviInput}>
        <div></div>
        <div></div>
        <div></div>
    </label>
  <nav className={styles.navi}>
  <ul className="navItems">
          <li><a href="/onion-soup">onion soup</a></li>
          <li><a href="/philly-cheesesteak">philly cheesesteak</a></li>
          <li><a href="/fettucine-alfredo">fettucine alfredo</a></li>
        </ul>
  </nav>
  </>
    )
}