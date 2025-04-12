import styles from './utils.module.css';
import Image from 'next/image';


const Icon = ({icon, mobileHidden, desktopHidden, tabletHidden}) => {
  return (
    <div className={`${styles.iconbox} ${mobileHidden && styles.mobileHidden} ${desktopHidden && styles.desktopHidden} ${tabletHidden && styles.tabletHidden} skillicon`}>
      <div className={styles.icon}>
        <Image src={icon} width={65} height={65} alt='icon'/>
      </div>
    </div>
  )
}

export default Icon
