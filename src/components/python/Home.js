import React from 'react'

import Logo from './vc.png'
import { Link } from 'react-router-dom'

import './home.css'
import Footer from '../../footer/Footer'
import Seo from '../../seo/Seo'


const Home = () => {
  

    return (
      <>
        
        <Seo
             title='VMDtutorials'
             description='vmdtutorials and blog '
             name='vmdtutorials.'
             type='article'
      
        />
   
        <main className='main'>
          <section className='section1'>
        {/* ===============Python Tutorial===========*/}
            <div className='intro'><img src={Logo} alt="" />
            <h1 style={{ color: 'green' }}>Python Tutorial</h1>
            <p>This Python tutorial is quite suituble for beginners , intermediate and experts.</p>
            <p> 
                If you are looking for exercise on various areas in Python then you are on the right place.</p>
                <p> 
                This tutorial will tackle OOP in detail with example provided.</p>
                <p> 
                Incase of any feedback feel free to send our team an email available at our contact page</p>
                
            </div>
            <div className='details'>
              <Link to='/getstarted' style={{ textDecoration: 'none', fontSize:'25px' }}>Get started</Link>
              <p>In our getting started tutorial, we'll go over what Python is, why you should use it over other programming languages, and what jobs are available for Python experts. </p><p>After finishing this section, you will have a basic understanding of the Python programming language.</p><p> You'll also understand how to install the Python development environment on your computer. </p>
           
           
            </div>
            <div className='details'>
              <Link to='/pythonfunction' style={{ textDecoration: 'none', fontSize:'25px' }}>Python Function</Link>
              <p>Functions in Python are very important because they allow one to reuse code rather than writing the same code over and over. After completing this section, you will understand how to create a reusable function and call it.</p>
            </div>
            <div className='details'>
              <Link to='' style={{ textDecoration: 'none', fontSize:'25px' }}>Python OOP</Link>
              <p>Classes in Python allow you to group data and configurability together, so creating a new class creates a different type of object, allowing you to create occurrences of that type. In this tutorial, we are going to learn how to create a new class and how to assign instances to it. </p>
           
           
            </div>
            <div className='details'>
              <Link to='' style={{ textDecoration: 'none', fontSize:'25px' }}>Python Modules</Link>
              <p> Python modules are files containing Python syntax and statements. Modules are typically made up of functions, classes, and variables that have been grouped together. This module can be imported and called from another Python file as needed.</p>
           <p>In this tutorial, we will look at the following Python modules:</p>
             <div  className='module-link'><Link to='' style={{ textDecoration: 'none', fontSize: '19px' }}>Numpy </Link><p>- Numpy is one of many Python modules, but unlike other modules, it works with multi-dimensional arrays and matrices.</p>
                <Link to='' style={{ textDecoration: 'none', fontSize: '19px' }}>Scipy</Link>
                <p>-From the name itself, you can tell that it deals with scientific computation.The scipy module makes use of NumPy underneath it to aid in scientific computation.</p>
              <Link to='' style={{ textDecoration: 'none', fontSize:'19px' }}>Pandas</Link></div> <p>-Pandas is an open-source data analysis and manipulation library.</p>
            </div>
            <div className='details'>
              <Link to='' style={{ textDecoration: 'none', fontSize:'25px' }}>File Handling</Link>
              <p>One of the most important aspects of programming is file management. Python, as a programming language, supports opening, creating, and closing files, as well as manipulating them by writing, reading, and appending one file to another.</p>
           
           
            </div>
        </section>
    
        </main>
    
   <Footer/>

      </>
  
  )
}

export default Home