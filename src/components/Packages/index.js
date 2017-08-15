import React, { Component } from 'react'
import Package from '../Package'
import './Packages.styl'

export default class Packages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPackagesVisible: false
    };
  }

  togglePackages() {
    this.setState({
      isPackagesVisible: !this.state.isPackagesVisible
    });
  }

  render() {
    const buttonText = this.state.isPackagesVisible ? 'Close' : 'Compare benefits';

    return (
      <div className="packages-container">
        {this.props.options && this.props.options.map(item =>
          <Package content={item} key={item.id} open={this.state.isPackagesVisible} />
        )}
        <div className="button-wrapper">
          <button onClick={() => this.togglePackages()}>{buttonText}</button>
        </div>
      </div>
    )
  }
}