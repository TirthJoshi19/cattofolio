import { SubHead } from '@/app/utils/headings'
import styles from './Skills.module.css'
import Icon from '@/app/utils/IconComp'

const Skills = () => {
  const skillsArr = [{name: 'Web development', icon: '/assets/react.png'}, {name: 'Design', icon: '/assets/design.png'}, {name: 'Programming', icon: '/assets/code.png'}, {name: 'WordPress', icon: '/assets/wpress.png'}]
  return (
    <div className={styles.skillsmain}>
      <SubHead text={'My Skills'} spanClass={''}/>
      {skillsArr.map((skill, index)=> {
        return <Skill name={skill.name} key={index} icon={skill.icon}/>
      })}
    </div>
  )
}

const Skill = ({name, icon})=> {
  return <div className={styles.skill}>
    <h3>{name}</h3>
    <Icon icon={icon} mobileHidden={true} desktopHidden={false} tabletHidden={false}/>
  </div>
}

export default Skills
