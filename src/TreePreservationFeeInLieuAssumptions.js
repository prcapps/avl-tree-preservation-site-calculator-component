import React, { Component } from 'react'

export default class TreePreservationFeeInLieuAssumptions extends Component {
  render () {
    const { assumption, resource_management_district } = this.props

    const active_asssmption = assumption[resource_management_district.toLowerCase()]

    return (
      <table className="table table-responsive table-bordered table-hover">
        <thead>
          <tr>
            <th>
              District Type
            </th>
            <th>
              { resource_management_district }
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
              { active_asssmption.land }
            </td>
          </tr>
          <tr>
            <td>
              Administration
            </td>
            <td>
              $
              { active_asssmption.administration }
            </td>
          </tr>
          <tr>
            <td>
              Tree Installation
            </td>
            <td>
              $
              { active_asssmption.tree_installation }
            </td>
          </tr>
          <tr>
            <td>
              Fee per SF of Canopy
            </td>
            <td>
              $
              { active_asssmption.land + active_asssmption.administration + active_asssmption.tree_installation }
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
