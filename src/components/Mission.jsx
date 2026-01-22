import styles from '../styles/Mission.module.css';
import background from '../assets/AppImages/background.jpg';
function Mission(){
    return(
        <>
            <div className={styles.container}>
                <img src={background} alt='background' className={styles.background}/>
                <div className={styles.box}>
                    <h2 className="h2">Our Mission</h2>
                    <h4 className="h4">Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
                </div>
            </div>
        </>
    );
}
export default Mission;