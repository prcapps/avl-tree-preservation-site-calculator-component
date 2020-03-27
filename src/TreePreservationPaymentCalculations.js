import React, { Component } from 'react'

export default class TreePreservationPaymentCalculations extends Component {
  currencyFormat (num) {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  render () {
    const { payment_in_lieu_area, resource_management_district, assumption } = this.props

    const active_asssmption = assumption[resource_management_district.toLowerCase()]

    return (
      <table className="table table-bordered table-hover">
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
                Land Fee
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * active_asssmption.land) }
            </td>
          </tr>
          <tr>
            <td>
              Administration Fee
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * active_asssmption.administration) }
            </td>
          </tr>
          <tr>
            <td>
              Tree Installation Fee
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * active_asssmption.tree_installation) }
            </td>
          </tr>
          <tr>
            <td>
              Total Fee
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * (active_asssmption.land + active_asssmption.administration + active_asssmption.tree_installation)) }
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
