import React, { Component } from 'react'

export default class TreePreservationFeeInLieuAssumptionsFull extends Component {
  render () {
    const { assumption, resource_management_district } = this.props

    return (
      <table className="table table-responsive table-bordered table-hover">
        <thead>
          <tr>
            <th>
              District Type
            </th>
            <th>
              Downtown
            </th>
            <th>
              Urban
            </th>
            <th>
              Suburban
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Land
            </td>
            <td>
              $
              { assumption.downtown.land }
            </td>
            <td>
              $
              { assumption.urban.land }
            </td>
            <td>
              $
              { assumption.suburban.land }
            </td>
          </tr>
          <tr>
            <td>
              Administration
            </td>
            <td>
              $
              { assumption.downtown.administration }
            </td>
            <td>
              $
              { assumption.urban.administration }
            </td>
            <td>
              $
              { assumption.suburban.administration }
            </td>
          </tr>
          <tr>
            <td>
              Tree Installation
            </td>
            <td>
              $
              { assumption.downtown.tree_installation }
            </td>
            <td>
              $
              { assumption.urban.tree_installation }
            </td>
            <td>
              $
              { assumption.suburban.tree_installation }
            </td>
          </tr>
          <tr>
            <td>
              Fee per SF of Canopy
            </td>
            <td>
              $
              { assumption.downtown.land + assumption.downtown.administration + assumption.downtown.tree_installation }
            </td>
            <td>
              $
              { assumption.urban.land + assumption.urban.administration + assumption.urban.tree_installation }
            </td>
            <td>
              $
              { assumption.suburban.land + assumption.suburban.administration + assumption.suburban.tree_installation }
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
