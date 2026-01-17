import React from 'react';
import "./stylesheetabout/about.css";
import Lottie from 'react-lottie';
import animationData from '../../animations/striper2.json'; // Import your JSON animation file

const About = () => {
  return (
    <> 
      <div>
       
        <div className="two-column-container2">
          <div className="text-column2">
           
            <h1>About<div className='fontcolorchange'>Me</div></h1>
            <p> Hi Everyone, My Name is <div className='fontcolorchange'>Anand Patel</div> from Bhopal, Madhya Pradesh, India.</p>
            <p> I am a <div className='fontcolorchange'>Computer Science graduate</div> from SISTEC-R.</p> 
            <p> I have strong experience in <div className='fontcolorchange'>full-stack web development using the MERN stack</div>.</p>
            <p> I love building <div className='fontcolorchange'>responsive, user-friendly applications</div> and I'm always eager to learn more and improve my skills in this field.</p>
            <p> I have developed real-world projects like an <div className='fontcolorchange'>Alumni Platform and a Secure Hub</div>, and I'm looking to contribute to a fast-paced development team.</p>
          </div>
         
          <div className="image-column2">
          <div className='image-center2'>
            <Lottie 
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
              }}
            />
             </div>
          </div>

        </div>
        
                  
      </div>
      <div className='main-containerr'><hr/>
      <p> "Crafting the web is like painting on an infinite canvas, where every line of code adds a stroke of creativity to the masterpiece of the digital age."<hr/>
      <div className='fontcolorchange'>---Anand Patel---</div><hr/></p></div>
    </>
  );
}

export default About;
