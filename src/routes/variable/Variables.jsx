import React from 'react'
import { useNavigate} from 'react-router-dom'
import Footer from '../../footer/Footer'
import './variables.css'
import Side from '../side/Side'
import Seo from '../../seo/Seo'



const Variables = () => {
  let navigate = useNavigate()
  const Navigate = () => {
     navigate('/datatypes')
   }
  return (
    
    <>
         <Seo
             title='Python Variables'
             description='Python variables '
             name='vmdtutorials.'
             type='article'
      
      />
      <Side/>
      <section className='variables'>
    
        <div>
          <h1>Python Variables</h1>
          <p>Consider a variable to be a name assigned to a specific object. Variables are used to store data values in Python.As a result, we do not need to declare variables or declare their type before using them. When we first assign a value to a variable, it is created.</p>
          
          <h6>example</h6>
          <div className='block'>
            <p className='grey'>x = "7"
              <p className='grey'> y = "2"</p>
           <p className='grey'> print(x)</p>
            <p className='grey'>print(y)</p>
          </p></div>
          <p> In some scenarios, a variable can change its value if the same variable is assigned a different value.</p>
          <h6>example</h6>
          <div className='block'>
          <p>  x = "7"</p>
           <p> x = "3"</p>
            print (x)
          </div>
          <p> The output will be 3 since x has been redeclared.</p>
          <h5> Casting</h5>
          <p> Casting in Python means specifying the data type of the variable.</p>
          <p> Don't worry, we will learn different types of data as we progress.</p>
          <h6>example</h6>
          
          <p className=''> x = str(3) # x will be '3'</p><p> y = int(3) # y will be 3
          </p>
          <p>In the case of String variables , the values can be in single or double quotes.</p>
          <h6>example</h6>
         <div><p className=''>x = 'John'  </p>
           <p> y = "Elizabeth"</p>
           </div> 
          <h5>Case-Sensitive</h5>
          <p> Variables in Python are case sensitive.</p>
          <h6>example</h6>
          <textarea className='textbox'>a = "John"</textarea>
          <p> Is not the same as.</p>
          <textarea className='textbox'>A = "John"</textarea>
          <h5>How to write variable names</h5>
          <p>Some variable names are very short, like ( x and y), as you have seen in the previous examples, although others are more descriptive.</p>
          <p>When writing variables, follow the following rules: </p>
          <ul>
            <li>.It must start with a letter or the underscore character.</li>
            <textarea className=''>_model = "zuzuki"</textarea>
            <li>.Must not start with a number.</li>
            <li>.It can only contain alphanumeric characters and underscores (A-Z, O-9, and _).</li>
            <textarea className='' name="" id="" cols="30" rows="4">modelname = "zuzuki" model_name = "zuzuki" modelname2 = "zuzuki"</textarea>
    </ul>
        <p> Now let's learn how to write variable names with more than 2 words.</p>
          <ul>
            <li><h6>Snake case</h6></li>
            <p>Each variable name is separated by an underscore.</p>
            <textarea name="" id="" cols="30" rows="2">model_name_two = "Toyota"</textarea>
            <li><h6>Camel case</h6></li>
            <p>Each variable name starts with a capital letter, excluding the first one.</p>
            <textarea name="" id="" cols="30" rows="3"> modelNameTwo = "Toyota"</textarea>
            <li><h6>Pascal case</h6></li>
            <p>Each variable name starts with a capital letter.</p>
            <textarea name="" id="" cols="30" rows="3"> ModelNameTwo = " Toyota"</textarea>
          </ul>
          <p>Variables can be assigned multiple values at once when declaring them.</p>
          <h6>example</h6>
          <p name="" id="" cols="30" rows="4">cow_color, dog_color, sheep_color = "black", "white", "whitesmoke" </p><p>print(cowColor) print(dogColor) print(sheepColor)</p> 
          <h6>output</h6>
          <p>black</p> <p>white </p> <p>whitesnmoke</p>
          <p>Also you can assign one value to multiple variables</p>
          <h6>example</h6>
          <textarea name="" id="" cols="30" rows="4">x = y = k = "7"</textarea>
          <h6>output</h6>
          <textarea name="" id="" cols="30" rows="3">7 7 7</textarea>

          <p>After learning how to write variables in Python, keep in mind that some words in Python are reserved. Using such terms will result in a crash of your code.The list below shows the most reserved words in Python. Python treats words like lambda as functions. As we progress through this course, you will come across additional reserved words.</p>
          <table>
  <tr>
    <th>assert</th>
    <th>and</th>
    <th>exec</th>
  </tr>
  <tr>
    <td>not</td>
    <td>finally</td>
    <td>return</td>
  </tr>
  <tr>
    <td>or</td>
    <td>for</td>
    <td>while</td>
  </tr>
  <tr>
    <td>else</td>
    <td>if</td>
    <td>pass</td>
  </tr>
  <tr>
    <td>break</td>
    <td>class</td>
    <td>def</td>
  </tr>
  <tr>
    <td>print</td>
    <td>global</td>
    <td>import</td>
  </tr>
  <tr>
    <td>or</td>
    <td>lambda</td>
    <td>except</td>
  </tr>
</table>

        </div>
        <button className='button3' onClick={() => navigate(-1)}> Previous page</button>
     <button className='button4' onClick={Navigate}>Next Page</button>
      </section>
      

    <Footer/>

  </>
  )
}

export default Variables