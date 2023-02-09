import uniqid from 'uniqid'
// eslint-disable-next-line import/no-extraneous-dependencies
import Tooltip from '@mui/material/Tooltip';
import './ResumeContainer.css'

const ResumeContainer = ({ item }) => (
  <Tooltip title={`Go to ${item.company}'s site`} placement="top">
    <a href={item.url}>
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
    </a>
  </Tooltip>
)

export default ResumeContainer
