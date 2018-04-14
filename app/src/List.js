import React, { Component } from 'react'

class List extends Component {
  constructor() {
    super()
    this.state = { 
      data: []
    }
  }

  apiList() {

  const apiUrl = 'https://data.colorado.gov/resource/p3jp-z4tq.json'
  let dataGrab = (response) => {
    this.setState({data: response})
  }

  fetch(apiUrl)
    .then(res => res.json())
    .then(dataGrab)
    .catch((error) => console.log(error))
  }

  componentWillMount() {
    this.apiList()
  }

  render() {
    return (
      <div className="App">
        <div>{dataGrab.revenueTotal}</div>
        <div>{dataGrab.expensesTotal}</div>
        </div>
    )
  }
}

export default List