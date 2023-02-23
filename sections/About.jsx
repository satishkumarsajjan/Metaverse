'use client';
import { motion as m } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0'></div>
    <m.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText
        title='| About Metaversus'
        textStyles='text-center'
      ></TypingText>
      <m.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[14px] text-secondary-white text-center'
      >
        {' '}
        <span className='font-extrabold text-white'> Metaverse </span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className='font-extrabold text-white'>
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className='font-extrabold text-white'>VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className='font-extrabold text-white'>explore</span> the madness
        of the metaverse by scrolling down
      </m.p>
      <m.img
        src='/arrow-down.svg'
        alt='arrow down'
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </m.div>
  </section>
);

export default About;
