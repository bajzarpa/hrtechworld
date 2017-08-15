import React from 'react'
import './Package.styl'

export default props =>
  <div className={props.open ? 'package open': 'package'}>
    <h3>
      {props.content.popular && <small>Most popular</small>}
      {props.content.name}
    </h3>
    <div className="price">€{props.content.price}</div>
    {props.content.description && <div className="description">{props.content.description}</div>}
    {props.content.until && <div className="until">Until {props.content.until}</div>}
    {props.content.promo && <div className="promo-input"><input type="text" placeholder={props.content.placeholder} /></div>}
    <div className="toggle-area">
      <ul>
        {props.content.benefits.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  </div>