import React from 'react'
import './getstarted.css'
import { useNavigate } from 'react-router-dom'
import Side from '../side/Side'
import Seo from '../../seo/Seo'
import Footer from '../../footer/Footer'


const Getstarted = () => {
    let navigate = useNavigate()
    const Navigate = () => {
      navigate('/variable')
    }
    return (
        <> 
            <Seo
            title='Python Tutorial For Beginners'
            description='A beginner friendly Python Tutorial'
            name='vmdtutorials.'
            type='article'
            />

<Side/>
   
            <section className='introduction'>
        
      
                <div>
                    
                    <h1>Introduction</h1>
                    <p>The Python concept in this tutorial is written to create a welcoming environment for beginners, allowing them to understand basic to advanced Python information. The goal of this tutorial is to ensure that after reading it, a learner will be able to write Python code and run and execute it on any Python interpreter, whether online or on a local computer.</p>
                    <h1>Python Jobs</h1>
                    <p> I'm sure you're asking yourself questions as you start learning Python, one of which is, "What kind of job can I get as a Python expert?" Don't worry, because I'll go over a few jobs you can do as a Python expert. Data scientists, website developers, website testers, and machine learning engineers are all examples of Python jobs. These are just a few of the jobs available to Python experts. Companies such as Google, Amazon, and Netflix hire Python experts to perform daily tasks that require Python knowledge. To summarize, you already know that by taking this Python course, you are guaranteed a job in some areas of technology.</p>
                    <h1>Why You Should Learn Python.</h1>
                    <p>There are numerous programming languages available in the tech industry, but why should you choose Python over any other programming language? There are numerous answers to this question, but for the purposes of this tutorial, I will list a few reasons why you should use Python.</p>
                   <p>1. Python is simple to learn, with few keywords, nd well-defined syntax. </p>
                   
                    <p>2. Python code is readable with the naked eye.</p>
                    <p>3. Database: Python can connect to virtually any database.</p>
                   
                   
                   
                   
                   
                    <h1>Python Install</h1>
              
            <p>Many computers come with Python already installed.<br/> To check if Python is installed on your PC, open the command prompt and type</p>
            <textarea className='textbox'>python --version</textarea>
       <p> If you find Python is not installed , go to <a href='https://www.python.org/' target='_blank' rel="noreferrer" >Python</a> and download it for free and install it on your PC.</p>
            </div>
            <div>
                <h1>Python Syntax</h1>
              
                <p>A Python file can be written in a simple text editor like Notepad and the file saved with  a .py extension .The code can then be executed by running it through a Python interpreter.</p>
                <p className='head5'>Ways to execute a Python file.</p>
                <p> A Python file can be executed on a command line by typing <span>python hello.py</span> where hello.py is a Python file.</p>
                <p className='head5'>or</p>
                <p> By using an IDE like Visual studio code</p>
            </div>
            <div>
                <h1>First Python programme</h1>
                <p> Open the Python prompt and type something like this  <span>print('hello world ') and then press enter.</span></p>
               
                <p> You should be able to see <span> hell world </span> in your command line</p>
                <p>To exit the command line type <span>exit().</span> </p>

            </div>
            <div>
                <h1>Python Indentation </h1>
                <p>Lets start by defing the term term "indentation'</p>
                <p>According to Oxford, indentantion means "a blank or empty space at the beginning of a written or printed line or paragraph."</p>
                <p> Indentation is very important in Python, as Python uses indentation to define a block of code.</p>
                    <p className='head5'>Example</p>
             <div className='code'>
                <p className='blockcode1'> if 4 &gt; 2:</p>
                        <p className="blockcode2"> print("4 is greater than 2")</p>
                        </div>
                    
                <p>Python will give you an error if you skip indentation.</p>
                <p>The number of spaces is up to you as a programmer. Remember to use the same number of spaces each time.</p>
            </div>
            <div>
                <h1>Python Comments</h1>
                <p>Python comments are used to explain a little bit more about the code.</p>
                <p>Python comments start with #, and Python will ignore that line when executing.</p>
                <p className='head5'>Example</p>
                <p>#This is a comment</p>
                    <p>print('i have just written a comment')</p>
                    <p> A comment can be used to prevent code execution.</p>
                    <p>Python does not support multiline comments but if you want to write a multiline comment , start each line with # </p>
                    <textarea className='textbox2'>
                        #this the first comment and ...................            #this another comment and ..........
                    </textarea>
                    <p> Alternatively you can write multliline comments like this.</p>
                    <textarea className='textbox2'>
                        """"""This a multiline comment which is written in python. This comment is written in multiple lines.""""""
                    </textarea>
                    <p> So long as the string is not assigned to a variable, Python will treat it as a comment. </p>
            </div>
                <div>
              
                    <button onClick={Navigate} className='next'>Nex Page</button>
          </div>
            </section>
            <Footer/>
        
        </> 
  )
}

export default Getstarted