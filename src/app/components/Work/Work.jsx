import { ProjectHeading, SubHead } from '@/app/utils/headings';
import styles from './work.module.css';
import Image from 'next/image';
import { IconButton } from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from 'next/link';

const Work = () => {
  return (
    <div className={`${styles.workmain} workmain`}>

      <div className="whitehead">
        <SubHead text="Some of my selected work" spanClass={'purplespan'} />
      </div>
      <WorkGrid />
    </div>
  );
};

const WorkGrid = () => {
  return (
    <div className={styles.worksect}>
      <Project />
    </div>
  );
};

const Project = () => {
  const imagesForG1 = ['/assets/adsonfolio.png', '/assets/adson2.png', '/assets/adson3.png'];
  const imagesForG2 = ['/assets/sivle1.png', '/assets/sivle2.png', ];
  const imagesForG3 = ['/assets/nazly1.png', '/assets/nazly2.png', '/assets/nazly3.png']

  return (
    <>
      <div className={styles.group1}>
        <div className={styles.wp}>
            <ViewButton url={'https://www.adsonbarros.great-site.net'}/>
          <div className={styles.imgcont}>
            <Images images={imagesForG1} />
          </div>
          <ProjectHeading text={'🌠 Adson Portfolio'}/>
        </div>
        <div className={styles.wp}>
            
            <ViewButton url={'https://www.sivlegraphics.com'}/>
          <div className={styles.imgcont}>
            <Images images={imagesForG2} />
          </div>
          <ProjectHeading text={'Sivle Design Agency'}/>
        </div>
        
      </div>
      <div className={styles.group2}>
        <div className={styles.wp}>
             <ViewButton />
          <div className={styles.imgcont}>
            <Images images={imagesForG2} />
          </div>
          <ProjectHeading text={'Awesome Folio (coming soon)'}/>
        </div>
        <div className={styles.wp}>
             <ViewButton url={'https://www.nazly-design.com'}/>
          <div className={styles.imgcont}>
            <Images images={imagesForG3} />
          </div>
          <ProjectHeading text={`Nazly's Portfolio`}/>
        </div>
      </div>
    </>
  );
};

const Images = ({ images, w = 40, h = 40 }) => {
  return images.map((image, index) => {
    return (
      <div className={styles.projectImageSect} key={index}>
        <Image src={image}  width={1000} height={1000}  className=" rounded-md" alt='just an image'/>
      </div>
    );
  });
};

const ViewButton = ({url})=> {
    return (
        <div className={styles.viewproject}>
          <Link href={url}>
            <IconButton >
                <ArrowOutwardIcon />
            </IconButton>
            </Link>
        </div>
    )
}

export default Work;
//w-[200px] h-[200px] md:w-[350px] md:h-[300px] lg:w-[200px] lg:h-auto