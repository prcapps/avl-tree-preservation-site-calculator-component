import React, { Component } from 'react'
import { render } from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render () {
    return <div className="container">
      <h1>avl-tree-preservation-site-calculator-component Demo</h1>

      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">City of Asheville: Tree Preservation Calculator</h1>
          <p className="lead">
			Fill out the form below to calculate a site’s tree canopy preservation requirements and option fee-in-lieu of compliance payment amount.
          </p>
        </div>
      </div>
      <hr className="my-5" />
      <Example/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
