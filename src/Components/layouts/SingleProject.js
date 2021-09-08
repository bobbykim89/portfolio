import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ProjectList from '../data/ProjectList';
import { motion } from 'framer-motion';

const motionVariants = {
  initial: {
    scale: 1,
    x: 0,
  },
  hover: {
    scale: 1.1,
    originX: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const barVariants = {
  initial: {
    width: '0%',
  },
  hover: {
    width: '100%',
    transition: {
      duration: 0.6,
      ease: 'linear',
    },
  },
};

const buttonMotion = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
    transition: {
      scale: {
        duration: 0.5,
      },
    },
  },
};

const SingleProject = () => {
  const { id } = useParams();
  const project = ProjectList.filter((item) => item.id === id)[0];
  const { name, description, technologies, git, page, image1, image2 } =
    project;

  const history = useHistory();

  return (
    <section className='bg-gray-800 w-screen md:w-full text-white font-montserrat py-20'>
      <motion.button
        onClick={() => history.goBack()}
        className='relative py-2 px-4 mx-4 border-white border mb-6'
        variants={motionVariants}
        initial='initial'
        whileHover='hover'
        animate='initial'
      >
        <div className='relative z-10'>
          <i className='fas fa-chevron-left mr-3' />
          Back to Previous Page
        </div>
        <motion.div
          className='absolute inset-0 bg-green-500 bg-opacity-80'
          variants={barVariants}
        />
      </motion.button>
      {project && (
        <div>
          <h1 className='font-inter text-4xl md:text-6xl mb-6 tracking-wider font-semibold mx-6'>
            {name}
          </h1>
          <div className='my-4 md:my-0 md:p-4 grid grid-cols-5 gap-1 md:gap-4'>
            <div className='col-span-4 overflow-hidden'>
              <img
                src={image1}
                alt=''
                className='inline-block object-fill h-full w-full'
              />
            </div>
            <div className='col-span-1 overflow-hidden'>
              <img
                src={image2}
                alt=''
                className='inline-block object-fill w-full h-full'
              />
            </div>
          </div>
          <div className='grid md:grid-cols-3 md:px-4 md:gap-4'>
            <div className='mx-4 md:mx-0 p-4 bg-gray-600 mb-4'>
              <h1 className='text-2xl font-inter mb-4 border-b pb-2'>
                Technologies
              </h1>
              {project &&
                technologies.map((tech, i) => (
                  <p className='text-gray-200 text-lg' key={i}>
                    <i className='fas fa-caret-right' /> {tech}
                  </p>
                ))}
            </div>
            <div className='md:col-span-2 p-4 mb-4'>
              <h1 className='text-2xl font-inter mb-4 border-b pb-2'>
                About this project
              </h1>
              <p className='text-gray-300'>{description}</p>
              <div className=' my-4 text-center '>
                {git && (
                  <motion.a
                    href={git}
                    target='_blank'
                    rel='noreferrer'
                    className='text-4xl inline-block mr-6 align-middle'
                    variants={buttonMotion}
                    initial='initial'
                    whileHover='hover'
                  >
                    <i className='fab fa-github' />
                  </motion.a>
                )}
                <motion.a
                  href={page}
                  target='_blank'
                  rel='noreferrer'
                  className='relative inline-block border rounded-full border-white px-4 py-2 align-middle overflow-hidden'
                  variants={buttonMotion}
                  initial='initial'
                  whileHover='hover'
                  animate='initial'
                >
                  <motion.div
                    className='inset-0 absolute bg-pink-500 bg-opacity-80'
                    variants={barVariants}
                  />
                  <span className='relative'>Go to page</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SingleProject;
