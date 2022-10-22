import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='container d-flex border-bottom border-2' >
        <img src='/logo.jpg' width={'150px'} ></img>
        <h3 className='mt-5'>Welcome to React SPA Development</h3>

      </div>
    )
  }
}
