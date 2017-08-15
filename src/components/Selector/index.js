import React from 'react'
import './Selector.styl'

export default props =>
  <nav className="ticket-selector">
    <ul>
      {props.items && props.items.map((item, index) =>
        <li key={index} className={ item.active ? 'active': '' }>
          <a href={`#${index}`}>
            {item.icon && <img src={item.icon} alt={`Icon for ${item.name}`}/>}
            {item.name}
          </a>
        </li>
      )}
    </ul>
  </nav>
