import React, { Component } from 'react'

export default class TreePreservationPaymentCalculationsFull extends Component {
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
                Land Fee
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.downtown.land) }
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.urban.land) }
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.suburban.land) }
            </td>
          </tr>
          <tr>
            <td>
              Administration Fee
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.downtown.administration) }
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.urban.administration) }
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.suburban.administration) }
            </td>
          </tr>
          <tr>
            <td>
              Tree Installation Fee
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.downtown.tree_installation) }
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.urban.tree_installation) }
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * assumption.suburban.tree_installation) }
            </td>
          </tr>
          <tr>
            <td>
              Total Fee
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * (assumption.downtown.land + assumption.downtown.administration + assumption.downtown.tree_installation)) }
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * (assumption.urban.land + assumption.urban.administration + assumption.urban.tree_installation)) }
            </td>
            <td>
              { this.currencyFormat(payment_in_lieu_area * (assumption.suburban.land + assumption.suburban.administration + assumption.suburban.tree_installation)) }
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
