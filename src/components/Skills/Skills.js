import React from 'react';
import uniqid from 'uniqid'
// import Confetti from 'react-dom-confetti';
import { skills } from '../../portfolio'
import './Skills.css'



const Skills = () => {
  if (!skills.length) return null

  // const confettiState = () => {
  //   const [state, setState] = useState(false)
  // }

  // const config = {
  //   angle: "93",
  //   spread: "40",
  //   startVelocity: "60",
  //   elementCount: "37",
  //   dragFriction: "0.51",
  //   duration: "1120",
  //   stagger: "9",
  //   width: "13px",
  //   height: "10px",
  //   perspective: "500px",
  //   colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  // };

  

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
