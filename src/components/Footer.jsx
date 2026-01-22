import styles from '../styles/Footer.module.css';
function Footer(){
    return(
        <>
            <div className={styles.box}>
                <h2 className="h2">The Tea Cozy</h2>
                <h5 className="h5">contact@theteacozy.com</h5>
                <h5 className="h5">917-555-8904</h5>
            </div>
            <h5 className={styles.copy}>copyright The Tea Cozy 2017</h5>
        </>
    );
}
export default Footer;