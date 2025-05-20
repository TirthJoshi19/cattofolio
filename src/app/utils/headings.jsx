import React from 'react'
import styles from './utils.module.css'
import Icon from './IconComp'

const MainHead = () => {
  return (
    <div className={styles.mainheadWide}>
      <div className={styles.icontextcontainer}>
        <h1>I am  Tirth</h1> <Icon mobileHidden={true} icon={'/assets/paw (2).png'} tabletHidden={true}/>

      </div>
      I love crafting digital solutions for brands.
      <Icon icon={'/assets/paw (2).png'} mobileHidden={false} desktopHidden={true}/>
    </div>
  )
}

export const SubHead = ({text, spanClass, className})=> {

  return (
    <div className={styles.subheadpar}>
      <h2 className={styles.subhead}>{text}<Span className={spanClass}/></h2>
    </div>
  )
}

const Span = ({className})=> {
  return <span className={className}>
    .
  </span>
}

export const ProjectHeading = ({text})=> {
  return (
    <div className={styles.projecthead}>
      <h2>
      {text}
    </h2>
    </div>
  )
}

export const ContactHeading = ()=> {
  return (
   

    <div className={styles.mainheadWide}>
      <div className={styles.icontextcontainer}>
        <div className="contacthead">
        Get in Touch <div className="iconcont">Now <Icon mobileHidden={true} icon={'/assets/sendmsg.png'}/></div>
</div>
      </div>
      
    </div>
  )
}

export const FormHeading = ()=> {
  return (
    <div className={styles.formheading}>
      <h3>Contact me!</h3>
    </div>
  )
}

export default MainHead
