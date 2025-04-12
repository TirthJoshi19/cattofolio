import { Button } from '@mui/material'
import styles from './utils.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Socials = ({insta, linkedIn}) => {
  return (
    <div className={styles.socialsmain}>
      <Link href={'https://www.instagram.com/tirth._web'}>
      <Button className={styles.socials} sx={{padding: '4%'}}>
        <Image src={'/assets/insta.png'} height={39} width={39} alt='instaimage'/>
      </Button>
      </Link>
      <Link href={'https://www.linkedin.com/in/tirth-joshi-11a656317/'}>
       <Button className={styles.socials} sx={{padding: '4%'}}>
        <Image src={'/assets/linkedin2.png'} height={39} width={39} alt='instaimage'/>
      </Button>
      </Link>
     
    </div>
  )
}

export default Socials
