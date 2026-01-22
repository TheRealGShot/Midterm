import styles from '../styles/TOTM.module.css';
import img1 from '../assets/AppImages/berryblitz.jpg';
import img2 from '../assets/AppImages/spiced-rum.jpg';
import img3 from '../assets/AppImages/img-donut.jpg';
import img4 from '../assets/AppImages/bedford-bizarre.jpg';
function TOTM(){
    return(
            <div className={styles.container}>
                <h2 className="h2">Tea of the Month</h2>
                <h4 className="h4">What's Steeping at The Tea Cozy?</h4>
                <div className={styles.box}>
                    <div>
                        <img src={img1} className={styles.img}/>
                        <h4 className="h4">Fall Berry Blitz Tea</h4>
                    </div>
                    <div>
                        <img src={img2} className={styles.img}/>
                        <h4 className="h4">Spiced Rum Tea</h4>
                    </div>
                    <div>
                        <img src={img3} className={styles.img}/>
                        <h4 className="h4">Seasonal Donuts</h4>
                    </div>
                    <div>
                        <img src={img3} className={styles.img}/>
                        <h4 className="h4">Myrtle Ave Tea</h4>
                    </div>
                    <div>
                        <img src={img4} className={styles.img}/>
                        <h4 className="h4">Bedford Bizzare Tea</h4>
                    </div>
                </div>
            </div>
    );
}
export default TOTM;