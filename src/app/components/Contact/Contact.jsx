'use client'
import { ContactHeading, FormHeading, SubHead } from '@/app/utils/headings'
import styles from './Contact.module.css'
import Socials from '@/app/utils/socials'
import { useForm } from 'react-hook-form'


const Contact = () => {
  return (
    <div className={styles.contactmain}>
      <div className={styles.contactheading}>
        <ContactHeading />
        <SubHead text={'Say meow'} className={styles.contacthello}/>
        <p className={styles.emailp}>Email: tirth.work19@gmail.com</p>
        <Socials />
      </div>
      <div className={styles.contactformdiv}>
      <FormHeading />
      <Form />
      </div>
    </div>
  )
}

const Form = ()=> {
    const {register, handleSubmit,
      formState: {errors}
    } = useForm()

    const onSubmit = (e)=> {
        e.preventDefault();
        // emailjs.sendForm('service_id', 'template_id', e.targ)
    }

    return (
        <form className={styles.contactform} onSubmit={handleSubmit(onSubmit)}> 
        
            <input type="text" {...register('name', {required: "Name is required"})}  placeholder='Your name' />
        {errors.name  && <div className='text-red-500'>{errors.name.message}</div>}
            <input type="text" {...register('email', {required: "Email is required", validate: (value)=> {
              if(!value.includes("@")){
                return "Email must include @"
              };
              return true
            }})}  placeholder='Your email' />
        {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
            <input type="text" {...register('message', {required: "Message is required"})}  placeholder='Your message' />
            {errors.message &&<div className='text-red-500'>{errors.message.message}</div>}
            <input type="submit" value={'Shoot'} id={styles.submit} />
        </form>
    )
}


export default Contact
