import styles from '../styles/Locations.module.css';
import locationImg from '../assets/AppImages/img-locations-background.jpg';

function Locations(){
    return(
        <>
            <div className={styles.container}>
                <img src={locationImg} alt="locationImg" className={styles.locationImg}/>
                <h2 className={styles.title}>Locations</h2>
                <div className={styles.box}>
                    <div className={styles.block}>
                        <h3 className="h3">Downtown</h3>
                        <p className="p">384 West 4th St</p>
                        <p className="p">Suit 108</p>
                        <p className="p">Portland, Main</p>
                    </div>
                    <div className={styles.block}>
                        <h3 className="h3">East Bayside</h3>
                        <p className="p">3433 Phisherman's Avanue</p>
                        <p className="p">(Northwest Corner)</p>
                        <p className="p">Portland, Main</p>
                    </div>
                    <div className={styles.block}>
                        <h3 className="h3">Oakdale</h3>
                        <p className="p">515 Crescent Avenue</p>
                        <p className="p">Second Floor</p>
                        <p className="p">Portland, Main</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Locations;