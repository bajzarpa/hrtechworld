import React from 'react'
import './Timeline.styl'

export default props =>
  <nav className="timeline">
    <ul>
      {props.options && props.options.map((item, index) =>
        <li className={item.hilight ? 'hilight': ''} key={index}>
          <a href={`#${index}`}>
            {item.name}
            {item.sold && <small>sold out</small>}
            {item.icon && <img src={item.icon} alt={item.name} />}
          </a>
        </li>
      )}
    </ul>
  </nav>