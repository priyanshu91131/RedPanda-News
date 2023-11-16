import React, { Component } from 'react'
import loading from './loading.gif'

export default class Load extends Component {
  render() {
    return (
      <div className='text-center' mystyle= {{length : "10 px", innerWidth : "10px"}}>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
