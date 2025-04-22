import MainHead from '@/app/utils/headings'
import styles from './Hero.module.css'
import Nav from '../Navbar/Nav';

const Hero = () => {
  return (
        <div className='bgp'>
        {/* <Nav /> */}
        
    <div className={styles.main}>
      <div className={styles.herotext}>
        <MainHead />
      </div>
      <div className={styles.outline}>
        <p>Tirth Joshi</p>
      </div>
    </div>
    </div>
  )
}

export default Hero
