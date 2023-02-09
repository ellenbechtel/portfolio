import uniqid from 'uniqid'
import './ResumeContainer.css'

const ResumeContainer = ({ item }) => (

  <div className='item'>
    <h3>{item.name}</h3>
    <h6 className='company'>{item.company}</h6>

    <p className='item__description'>{item.description}</p>
    {item.stack && (
      <ul className='item__stack'>
        {item.stack.map((ite) => (
          <li key={uniqid()} className='item__stack-item'>
            {ite}
          </li>
        ))}
      </ul>
    )}
    
  </div>
)

export default ResumeContainer
