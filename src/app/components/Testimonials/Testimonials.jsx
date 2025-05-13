'use client'
import { SubHead } from '@/app/utils/headings'
import styles from './Testimonials.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@mui/material'

const Testimonials = () => {

  const [testimonial, setTestimonial] = useState(0)

  const testimonialData = [{
    name: 'Sivle Graphics',
    text: 'Redesigned my AI generated portfolio because I did not have much time, I am very content with the result.',
    index: 0, 
    pic: '/assets/sivle.png',
    highlight: 'Website Recomp was great'
  },
  {
    name: 'Adson Barros',
    text: 'Designed a very beautiful website for me, it showcases my work well & looks pretty. Now it will be useful for attracting more clients.',
    index: 1, 
    pic: '/assets/Adson.jpg',
    highlight: 'Made a great portfolio'
  },
  {
    name: 'Elike Solutions',
    text: 'Fixed the issues I had on my website, also provided a solution for presenting dynamic pricing',
    index: 2, 
    pic: '/assets/Elike Solutions.png',
    highlight: 'Fixed Issues I had',
  },
  {
    name: 'Tyler Bach',
    text: 'Developed an E-commerce website for me to sell my merchandise. The development was pretty quick and seemless.',
    index: 3, 
    pic: '/assets/tyler-500.png',
    highlight: 'I am impressed by the work',
  }
]

  return (
    <div className={styles.testimonialmain}>
      <SubHead text={'Testimonials by clients'} spanClass={'purplespan'}/>
      
      <Testimonial highlight={testimonialData[testimonial].highlight} text={testimonialData[testimonial].text} image={testimonialData[testimonial].pic} testimonial={testimonial} setTestimonial={setTestimonial} name={testimonialData[testimonial].name}/>
    </div>
  )
}

const Testimonial = ({highlight, text, image, testimonial, setTestimonial, name})=> {

  const handleOnclickNext = ()=> {
    if(testimonial == 3){
      setTestimonial(0);
      return;
    }
    setTestimonial((prev)=> prev + 1)
  }

  const handleOnclickPrev = ()=> {
    if(testimonial <= 0){
      setTestimonial(2);
      return;
    }
    setTestimonial((prev)=> prev -1)
  }


  return (
    <div className={styles.testimonial}>
      <div className={styles.testimonialText}>
        <div className="textcont">
          <h3><span className='doublequotes'>"</span>{highlight}<span className='doublequotes'>"</span></h3>
        <p>{text}</p>
        </div>
        <div className={styles.testimonialnavigation}>
          <Button onClick={()=> {
            handleOnclickPrev();
          }} variant='outlined' sx={{borderColor: '#1f1926', color: '#1f1926'}}>Prev</Button>
          <Button onClick={()=> {
            handleOnclickNext()
          }} variant='contained' sx={{bgcolor: '#1f1926'}}>Next</Button>
        </div>
      </div>
      <div className={styles.testimonialImage}>
        <Image src={image} height={300} width={250} className='rounded-md' alt='image' />
          <h3>{name}</h3>
      </div>
    </div>
  )
}

export default Testimonials
