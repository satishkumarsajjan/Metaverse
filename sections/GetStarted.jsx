'use client';
import { motion as m } from 'framer-motion';
import { TypingText, ExploreCard, TitleText, StartSteps } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer, planetVariants } from '../utils/motion';

import { exploreWorlds, startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <m.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='/get-started.png'
          alt='getstarted'
          className='w-[90%] h-[90%] object-contain'
        />
      </m.div>
      <m.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title='| How Metaversus Works' textStyles='text-center' />
        <TitleText title={<>Get started with just a few clicks</>}></TitleText>
        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
            ></StartSteps>
          ))}
        </div>
      </m.div>
    </m.div>
  </section>
);

export default GetStarted;
