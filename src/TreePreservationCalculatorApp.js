import React, { Component } from 'react'
import TreePreservationFeeInLieuAssumptions from './TreePreservationFeeInLieuAssumptions'
import TreePreservationPaymentCalculations from './TreePreservationPaymentCalculations'
import TreePreservationClassificationTables from './TreePreservationClassificationTables'

export default class TreePreservationCalculatorApp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      address: '70 Court Plaza, Asheville NC',
      parcel_size: 31798,
      existing_tree_canopy: 50,
      resource_management_district: 'Urban',
      land_use: 'Commercial',
      payment_in_lieu_area: 4770,
      // tree_canopy_classification: false,
      active_table_section: false
    }

    this.fee_in_lieu_assumption = {}
    this.fee_in_lieu_assumption.downtown = {}
    this.fee_in_lieu_assumption.downtown.land = 30.44
    this.fee_in_lieu_assumption.downtown.administration = 0.25
    this.fee_in_lieu_assumption.downtown.tree_installation = 0.75

    this.fee_in_lieu_assumption.urban = {}
    this.fee_in_lieu_assumption.urban.land = 4.42
    this.fee_in_lieu_assumption.urban.administration = 0.25
    this.fee_in_lieu_assumption.urban.tree_installation = 0.75

    this.fee_in_lieu_assumption.suburban = {}
    this.fee_in_lieu_assumption.suburban.land = 3.54
    this.fee_in_lieu_assumption.suburban.administration = 0.25
    this.fee_in_lieu_assumption.suburban.tree_installation = 0.75

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  calculateTreeCanopyClassification () {
    const existing_tree_canopy = parseInt(this.state.existing_tree_canopy)
    console.log('percent', existing_tree_canopy, this.state.existing_tree_canopy)

    let tree_canopy_classification = false
    if (this.state.resource_management_district === 'Downtown') {
      // $B$7="Downtown","Class A",
      tree_canopy_classification = 'Class A'
    } else if (this.state.resource_management_district === 'Urban') {
      // if(And($B$7="Urban",$B$8="Multi-Family & Office"), "Class B",
      // if(And($B$7="Urban",$B$8="Commercial"),"Class B",
      // if(And($B$7="Urban",$B$8="Industrial"),"Class B",
      // if(and($B$7="Urban",$B$8="Residential Subdivision", $B$6>75),"Class C - Over 75% Canopy",
      // if(and($B$7="Urban",$B$8="Residential Subdivision",$B$6<41),"Class C - Under 40% Canopy",
      // if(and($B$7="Urban",$B$8="Institutional",$B$6>75),"Class C - Over 75% Canopy",
      // if(and($B$7="Urban",$B$8="Institutional", $B$6<41),"Class C - Under 40% Canopy",

      if (this.state.land_use === 'Multi-Family & Office') {
        tree_canopy_classification = 'Class B'
      } else if (this.state.land_use === 'Commercial') {
        tree_canopy_classification = 'Class B'
      } else if (this.state.land_use === 'Industrial') {
        tree_canopy_classification = 'Class B'
      } else if (this.state.land_use === 'Residential Subdivision') {
        if (existing_tree_canopy > 75) {
          tree_canopy_classification = 'Class C - Over 75% Canopy'
        } else if (existing_tree_canopy < 41) {
          tree_canopy_classification = 'Class C - Under 40% Canopy'
        } else {
          tree_canopy_classification = 'Class C - 41-75% Canopy'
        }
      } else if (this.state.land_use === 'Institutional') {
        if (existing_tree_canopy > 75) {
          tree_canopy_classification = 'Class C - Over 75% Canopy'
        } else if (existing_tree_canopy < 41) {
          tree_canopy_classification = 'Class C - Under 40% Canopy'
        } else {
          tree_canopy_classification = 'Class C - 41-75% Canopy'
        }
      }
    } else if (this.state.resource_management_district === 'Suburban') {
      // IF(And($B$7="Suburban",$B$6>75), "Class C - Over 75% Canopy",
      // If(and($B$7="Suburban",$B$6<41), "Class C - Under 40% Canopy", "Class C - 41-75% Canopy"))

      if (existing_tree_canopy > 75) {
        tree_canopy_classification = 'Class C - Over 75% Canopy'
      } else if (existing_tree_canopy < 41) {
        tree_canopy_classification = 'Class C - Under 40% Canopy'
      } else {
        tree_canopy_classification = 'Class C - 41-75% Canopy'
      }
    }
    return tree_canopy_classification
  }

  handleChange (event) {
    const payload = {}
    payload[event.target.name] = event.target.value
    this.setState(payload)
    this.calculateTreeCanopyClassification()
  }

  handleSubmit (event) {
    alert('Thank you! Please check the tables below for the results')
    event.preventDefault()
  }

  render () {
    const tree_canopy_classification = this.calculateTreeCanopyClassification()
    const { resource_management_district } = this.state

    return (

      <form onSubmit={this.handleSubmit} className="container mb-5">
        <div className="form-row">
          <div className="form-group col-lg-4 col-md-6">
            <label htmlFor="address">
              Location/Address:
            </label>
            <input className="form-control" type="text" name="address" id="address" value={this.state.address} onChange={this.handleChange} />
          </div>
          <div className="form-group col-lg-4 col-md-6">
            <label htmlFor="parcel_size">
              Parcel Size:
            </label>
            <input type="text" name="parcel_size" className="form-control" id="parcel_size" value={this.state.parcel_size} onChange={this.handleChange} />
          </div>
          <div className="form-group col-lg-4 col-md-6">
            <label htmlFor="existing_tree_canopy">
              <a href='https://avl.maps.arcgis.com/apps/webappviewer/index.html?id=e8bb75d48f78449dbf44de5f2cd0bb73'>
                Existing Tree Canopy:
              </a>
            </label>
            <div className="input-group">
              <input type="number" name="existing_tree_canopy" className="form-control" id="existing_tree_canopy" value={this.state.existing_tree_canopy} onChange={this.handleChange} />
              <div className="input-group-append">
                <span className="input-group-text">%</span>
              </div>
            </div>
          </div>
          <div className="form-group col-lg-4 col-md-6">
            <label htmlFor="resource_management_district">
              <a href='https://avl.maps.arcgis.com/apps/webappviewer/index.html?id=e8bb75d48f78449dbf44de5f2cd0bb73'>
                Resource Management District:
              </a>
            </label>
            <select className="custom-select" name="resource_management_district" id="resource_management_district" value={this.state.resource_management_district} onChange={this.handleChange}>
              <option>Select</option>
              <option value="Urban">
                Urban
              </option>
              <option value="Downtown">
                Downtown
              </option>
              <option value="Suburban">
                Suburban
              </option>
            </select>
          </div>
          <div className="form-group col-lg-4 col-md-6">
            <label htmlFor="land_use">
              Land Use / Project Type
            </label>
            <select name="land_use" id="land_use" value={this.state.land_use} onChange={this.handleChange} className="custom-select">
              <option>Select</option>
              <option value="Multi-Family & Office">
                Multi-Family & Office
              </option>
              <option value="Residential Subdivision">
                Residential Subdivision
              </option>
              <option value="Institutional">
                Institutional
              </option>
              <option value="Commercial">
                Commercial
              </option>
              <option value="Industrial">
                Industrial
              </option>
            </select>
          </div>
          <div className="form-group col-lg-4 col-md-6">
            <label htmlFor="payment_in_lieu_area">
              Payment In Lieu Area (if applicable)
            </label>
            <input className="form-control" type="text" name="payment_in_lieu_area" id="payment_in_lieu_area" value={this.state.payment_in_lieu_area} onChange={this.handleChange} />
          </div>
        </div>
        <input type="submit" value="Submit" className="btn btn-lg btn-primary" />
        { tree_canopy_classification &&
          (
            <div>
              <hr className="my-5" />
              <h2>Tree Canopy Classification Results</h2>
              <div className="alert alert-primary" role="alert">
                <span className='display-4'>{ tree_canopy_classification }</span>
              </div>
            </div>
          )}
        { tree_canopy_classification &&
          <TreePreservationClassificationTables tree_canopy_classification={tree_canopy_classification} parcel_size={this.state.parcel_size} />
        }
        { this.state.resource_management_district != 'Select' &&
          <div>
            <hr className="my-5" />
            <div className="row">
              <div className="col-lg-6">
                <legend>
                        Fee in Lieu - Assumptions
                </legend>
                <div className="table-responsive">
                  <TreePreservationFeeInLieuAssumptions resource_management_district={this.state.resource_management_district} assumption={this.fee_in_lieu_assumption} />
                </div>
              </div>
              <div className="col-md-12 d-md-block d-md-block d-lg-none">
                <hr className="my-5" />
              </div>
              <div className="col-lg-6">
                <legend>
                        Payment Calculations
                </legend>

                <div className="table-responsive">
                  <TreePreservationPaymentCalculations resource_management_district={this.state.resource_management_district} payment_in_lieu_area={this.state.payment_in_lieu_area} assumption={this.fee_in_lieu_assumption}/>
                </div>
                <div>
                        Area to apply Fee in Lieu:
                  <strong>
                    { ' ' + this.state.payment_in_lieu_area + ' SF' }
                  </strong>
                </div>
              </div>
            </div>
          </div>
        }
      </form>
    )
  }
}
