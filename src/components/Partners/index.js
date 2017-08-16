import React from 'react'
import './Partners.styl'

export default props =>
  <div className="partners">
    <h4>Our trusted partners</h4>
    <ul>
      {props.items && props.items.map((item, index) =>
        <li key={index}><a href={item.url} target="_blank"><img src={item.image} alt={item.url} /></a></li>
      )}
    </ul>
  </div>