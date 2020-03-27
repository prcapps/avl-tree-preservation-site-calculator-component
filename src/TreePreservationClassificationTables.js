import React, { Component } from 'react'

export default class TreePreservationFeeInLieuAssumptions extends Component {
  render () {
    const { tree_canopy_classification, parcel_size } = this.props

    return (
      <div>
        { (tree_canopy_classification == 'Class A' || tree_canopy_classification == 'Class B') && (
          <div>
            <legend>
              Table 7-19.2 | Class Based Canopy Requirement, Classes A & B*
            </legend>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>
                      Tree Canopy Requirement Classification
                    </th>
                    <th>
                      Existing Tree Canopy Preserved
                    </th>
                    <th>
                      New Tree Canopy Required
                    </th>
                    <th>
                      Total Tree Canopy Requirement
                    </th>
                  </tr>
                </thead>
                { tree_canopy_classification == 'Class A' && (
                  <tbody>
                    <tr>
                      <td rowSpan="7">
                      Class A
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.05).toFixed(0) }
                        {' '}
                      SF
                      (5%)
                      </td>
                      <td>
                        { (parcel_size * 0.0).toFixed(0) }
                        {' '}
                      SF
                      (0%)
                      </td>
                      <td>
                        { (parcel_size * 0.05 + parcel_size * 0.0).toFixed(0) }
                        {' '}
                      SF
                      (5%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.04).toFixed(0) }
                        {' '}
                      SF
                      (4%)
                      </td>
                      <td>
                        { (parcel_size * 0.02).toFixed(0) }
                        {' '}
                      SF
                      (2%)
                      </td>
                      <td>
                        { (parcel_size * 0.04 + parcel_size * 0.02).toFixed(0) }
                        {' '}
                      SF
                      (6%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.03).toFixed(0) }
                        {' '}
                      SF
                      (3%)
                      </td>
                      <td>
                        { (parcel_size * 0.04).toFixed(0) }
                        {' '}
                      SF
                      (4%)
                      </td>
                      <td>
                        { (parcel_size * 0.07).toFixed(0) }
                        {' '}
                      SF
                      (7%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.02).toFixed(0) }
                        {' '}
                      SF
                      (2%)
                      </td>
                      <td>
                        { (parcel_size * 0.06).toFixed(0) }
                        {' '}
                      SF
                      (6%)
                      </td>
                      <td>
                        { (parcel_size * 0.08).toFixed(0) }
                        {' '}
                      SF
                      (8%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.01).toFixed(0) }
                        {' '}
                      SF
                      (1%)
                      </td>
                      <td>
                        { (parcel_size * 0.08).toFixed(0) }
                        {' '}
                      SF
                      (8%)
                      </td>
                      <td>
                        { (parcel_size * 0.09).toFixed(0) }
                        {' '}
                      SF
                      (9%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.00).toFixed(0) }
                        {' '}
                      SF
                      (0%)
                      </td>
                      <td>
                        { (parcel_size * 0.10).toFixed(0) }
                        {' '}
                      SF
                      (10%)
                      </td>
                      <td>
                        { (parcel_size * 0.10).toFixed(0) }
                        {' '}
                      SF
                      (10%)
                      </td>
                    </tr>
                  </tbody>
                )}
                { tree_canopy_classification == 'Class B' && (
                  <tbody>
                    <tr>
                      <td rowSpan="7">
                      Class B
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.10).toFixed(0) }
                        {' '}
                      SF
                      (10%)
                      </td>
                      <td>
                        { (parcel_size * 0.0).toFixed(0) }
                        {' '}
                      SF
                      (0%)
                      </td>
                      <td>
                        { (parcel_size * 0.10).toFixed(0) }
                        {' '}
                      SF
                      (10%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.08).toFixed(0) }
                        {' '}
                      SF
                      (8%)
                      </td>
                      <td>
                        { (parcel_size * 0.03).toFixed(0) }
                        {' '}
                      SF
                      (3%)
                      </td>
                      <td>
                        { (parcel_size * 0.11).toFixed(0) }
                        {' '}
                      SF
                      (11%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.06).toFixed(0) }
                        {' '}
                      SF
                      (6%)
                      </td>
                      <td>
                        { (parcel_size * 0.06).toFixed(0) }
                        {' '}
                      SF
                      (6%)
                      </td>
                      <td>
                        { (parcel_size * 0.12).toFixed(0) }
                        {' '}
                      SF
                      (12%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.04).toFixed(0) }
                        {' '}
                      SF
                      (4%)
                      </td>
                      <td>
                        { (parcel_size * 0.09).toFixed(0) }
                        {' '}
                      SF
                      (9%)
                      </td>
                      <td>
                        { (parcel_size * 0.13).toFixed(0) }
                        {' '}
                      SF
                      (13%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.02).toFixed(0) }
                        {' '}
                      SF
                      (2%)
                      </td>
                      <td>
                        { (parcel_size * 0.12).toFixed(0) }
                        {' '}
                      SF
                      (12%)
                      </td>
                      <td>
                        { (parcel_size * 0.14).toFixed(0) }
                        {' '}
                      SF
                      (14%)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        { (parcel_size * 0.00).toFixed(0) }
                        {' '}
                      SF
                      (0%)
                      </td>
                      <td>
                        { (parcel_size * 0.15).toFixed(0) }
                        {' '}
                      SF
                      (15%)
                      </td>
                      <td>
                        { (parcel_size * 0.15).toFixed(0) }
                        {' '}
                      SF
                      (15%)
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        )}
        { (tree_canopy_classification == 'Class C' || tree_canopy_classification == 'Class C - Over 75% Canopy' || tree_canopy_classification == 'Class C - 41-75% Canopy' || tree_canopy_classification == 'Class C - Under 40% Canopy') &&
            (
              <div>
                <legend>
                Table 7-19.3 | Class Based Canopy Requirement, Class C***
                </legend>
                <div className="table-responsive">
                  <table className="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>
                        Tree Canopy Requirement Classification
                        </th>
                        <th>
                        Existing Tree Canopy Preserved
                        </th>
                        <th>
                        New Tree Canopy Required
                        </th>
                        <th>
                        Total Tree Canopy Requirement
                        </th>
                      </tr>
                    </thead>
                    { tree_canopy_classification == 'Class C - Over 75% Canopy' && (
                      <tbody>
                        <tr>
                          <td rowSpan="7">
                        Class C - Over 75% Canopy
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.15).toFixed(0) }
                            {' '}
                        SF
                        (15%)
                          </td>
                          <td>
                            { (parcel_size * 0.0).toFixed(0) }
                            {' '}
                        SF
                        (0%)
                          </td>
                          <td>
                            { (parcel_size * 0.15).toFixed(0) }
                            {' '}
                        SF
                        (15%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.12).toFixed(0) }
                            {' '}
                        SF
                        (12%)
                          </td>
                          <td>
                            { (parcel_size * 0.06).toFixed(0) }
                            {' '}
                        SF
                        (6%)
                          </td>
                          <td>
                            { (parcel_size * 0.18).toFixed(0) }
                            {' '}
                        SF
                        (18%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.09).toFixed(0) }
                            {' '}
                        SF
                        (9%)
                          </td>
                          <td>
                            { (parcel_size * 0.12).toFixed(0) }
                            {' '}
                        SF
                        (12%)
                          </td>
                          <td>
                            { (parcel_size * 0.21).toFixed(0) }
                            {' '}
                        SF
                        (21%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.06).toFixed(0) }
                            {' '}
                        SF
                        (6%)
                          </td>
                          <td>
                            { (parcel_size * 0.18).toFixed(0) }
                            {' '}
                        SF
                        (18%)
                          </td>
                          <td>
                            { (parcel_size * 0.24).toFixed(0) }
                            {' '}
                        SF
                        (24%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.03).toFixed(0) }
                            {' '}
                        SF
                        (3%)
                          </td>
                          <td>
                            { (parcel_size * 0.24).toFixed(0) }
                            {' '}
                        SF
                        (24%)
                          </td>
                          <td>
                            { (parcel_size * 0.27).toFixed(0) }
                            {' '}
                        SF
                        (27%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.00).toFixed(0) }
                            {' '}
                        SF
                        (0%)
                          </td>
                          <td>
                            { (parcel_size * 0.30).toFixed(0) }
                            {' '}
                        SF
                        (30%)
                          </td>
                          <td>
                            { (parcel_size * 0.30).toFixed(0) }
                            {' '}
                        SF
                        (30%)
                          </td>
                        </tr>
                      </tbody>
                    )}
                    { tree_canopy_classification == 'Class C - 41-75% Canopy' && (
                      <tbody>
                        <tr>
                          <td rowSpan="7">
                        Class C - 41-75% Canopy
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.15).toFixed(0) }
                            {' '}
                        SF
                        (15%)
                          </td>
                          <td>
                            { (parcel_size * 0.0).toFixed(0) }
                            {' '}
                        SF
                        (0%)
                          </td>
                          <td>
                            { (parcel_size * 0.15).toFixed(0) }
                            {' '}
                        SF
                        (15%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.12).toFixed(0) }
                            {' '}
                        SF
                        (12%)
                          </td>
                          <td>
                            { (parcel_size * 0.05).toFixed(0) }
                            {' '}
                        SF
                        (5%)
                          </td>
                          <td>
                            { (parcel_size * 0.17).toFixed(0) }
                            {' '}
                        SF
                        (17%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.09).toFixed(0) }
                            {' '}
                        SF
                        (9%)
                          </td>
                          <td>
                            { (parcel_size * 0.10).toFixed(0) }
                            {' '}
                        SF
                        (10%)
                          </td>
                          <td>
                            { (parcel_size * 0.19).toFixed(0) }
                            {' '}
                        SF
                        (19%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.06).toFixed(0) }
                            {' '}
                        SF
                        (6%)
                          </td>
                          <td>
                            { (parcel_size * 0.15).toFixed(0) }
                            {' '}
                        SF
                        (15%)
                          </td>
                          <td>
                            { (parcel_size * 0.21).toFixed(0) }
                            {' '}
                        SF
                        (21%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.03).toFixed(0) }
                            {' '}
                        SF
                        (3%)
                          </td>
                          <td>
                            { (parcel_size * 0.20).toFixed(0) }
                            {' '}
                        SF
                        (20%)
                          </td>
                          <td>
                            { (parcel_size * 0.23).toFixed(0) }
                            {' '}
                        SF
                        (23%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.00).toFixed(0) }
                            {' '}
                        SF
                        (0%)
                          </td>
                          <td>
                            { (parcel_size * 0.25).toFixed(0) }
                            {' '}
                        SF
                        (25%)
                          </td>
                          <td>
                            { (parcel_size * 0.25).toFixed(0) }
                            {' '}
                        SF
                        (25%)
                          </td>
                        </tr>
                      </tbody>
                    )}
                    { tree_canopy_classification == 'Class C - Under 40% Canopy' && (
                      <tbody>
                        <tr>
                          <td rowSpan="7">
                        Class C - Under 40% Canopy
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.15).toFixed(0) }
                            {' '}
                        SF
                        (15%)
                          </td>
                          <td>
                            { (parcel_size * 0.0).toFixed(0) }
                            {' '}
                        SF
                        (0%)
                          </td>
                          <td>
                            { (parcel_size * 0.15).toFixed(0) }
                            {' '}
                        SF
                        (15%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.12).toFixed(0) }
                            {' '}
                        SF
                        (12%)
                          </td>
                          <td>
                            { (parcel_size * 0.04).toFixed(0) }
                            {' '}
                        SF
                        (4%)
                          </td>
                          <td>
                            { (parcel_size * 0.16).toFixed(0) }
                            {' '}
                        SF
                        (16%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.09).toFixed(0) }
                            {' '}
                        SF
                        (9%)
                          </td>
                          <td>
                            { (parcel_size * 0.8).toFixed(0) }
                            {' '}
                        SF
                        (8%)
                          </td>
                          <td>
                            { (parcel_size * 0.17).toFixed(0) }
                            {' '}
                        SF
                        (17%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.06).toFixed(0) }
                            {' '}
                        SF
                        (6%)
                          </td>
                          <td>
                            { (parcel_size * 0.12).toFixed(0) }
                            {' '}
                        SF
                        (12%)
                          </td>
                          <td>
                            { (parcel_size * 0.18).toFixed(0) }
                            {' '}
                        SF
                        (18%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.03).toFixed(0) }
                            {' '}
                        SF
                        (3%)
                          </td>
                          <td>
                            { (parcel_size * 0.16).toFixed(0) }
                            {' '}
                        SF
                        (16%)
                          </td>
                          <td>
                            { (parcel_size * 0.19).toFixed(0) }
                            {' '}
                        SF
                        (19%)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            { (parcel_size * 0.00).toFixed(0) }
                            {' '}
                        SF
                        (0%)
                          </td>
                          <td>
                            { (parcel_size * 0.20).toFixed(0) }
                            {' '}
                        SF
                        (20%)
                          </td>
                          <td>
                            { (parcel_size * 0.20).toFixed(0) }
                            {' '}
                        SF
                        (20%)
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            )}
      </div>
    )
  }
}
