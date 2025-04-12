'use client';
import styles from './Nav.module.css';
import { AppBar, Toolbar, IconButton, colors } from '@mui/material';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Icon from '@/app/utils/IconComp';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div>
        <Toolbar sx={{Width: '100vh'}}>
          <AppBar className={styles.navbar} position='static' sx={{zIndex: 999999}}>
            <div className="fb">
              <div className={styles.logodiv}>
                <Image
                  src={'/assets/T1.png'}
                  width={30}
                  height={45}
                  alt="logo"
                  className="invert"
                />
              </div>
              <IconButton
                onClick={(e) => {
                  setShowMenu((prev) => !prev);
                  
                }}
              >
                {!showMenu ? <MenuIcon sx={{color: 'white'}}/> : <CloseIcon sx={{color: 'white'}}/>}
              </IconButton>
            </div>
          </AppBar>
        </Toolbar>
      </div>
      <NavPanel showMenu={showMenu}/>
    </div>
  );
};

export const NavPanel = ({ showMenu, alt = 'image'}) => {
  return showMenu && <div className={styles.navpanel}>
    <div className={styles.menu}>
      <div className={styles.listcomp}>
        <li>Home</li> <Icon icon={'/assets/hand.png'}  mobileHidden={true}/>
      </div>
      <div className={styles.listcomp}>
        <li>Portfolio</li> <Icon icon={'/assets/Grid2.png'} mobileHidden={true}/>
      </div>
      <div className={styles.listcomp}>
        <li>Testimonials</li> <Icon icon={'/assets/star.png'} mobileHidden={true}/>
      </div>
      <div className={styles.listcomp}>
        <li>Contacto</li> <Icon icon={'/assets/person.png'} mobileHidden={true}/>
      </div>
      
      
    </div>
  </div>;
};

export default Nav;
