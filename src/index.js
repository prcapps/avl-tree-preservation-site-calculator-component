import React, {Component} from 'react'
import './TreePreservationSiteCalculator.css';





// TODO - Move to component
class TreePreservationInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        address: '',
        parcel_size: 31798,
        existing_tree_canopy: '',
        resource_management_district: false,
        land_use: false,
        payment_in_lieu_area: 4770,
        // tree_canopy_classification: false,
        active_table_section: false
      };

      this.fee_in_lieu_assumption = {};
      this.fee_in_lieu_assumption.downtown = {};
      this.fee_in_lieu_assumption.downtown.land = 30.44;
      this.fee_in_lieu_assumption.downtown.administration = 0.25;
      this.fee_in_lieu_assumption.downtown.tree_installation = 0.75;

      this.fee_in_lieu_assumption.urban = {};
      this.fee_in_lieu_assumption.urban.land = 4.42;
      this.fee_in_lieu_assumption.urban.administration = 0.25;
      this.fee_in_lieu_assumption.urban.tree_installation = 0.75;


      this.fee_in_lieu_assumption.suburban = {};
      this.fee_in_lieu_assumption.suburban.land = 3.54;
      this.fee_in_lieu_assumption.suburban.administration = 0.25;
      this.fee_in_lieu_assumption.suburban.tree_installation = 0.75;


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  calculateTreeCanopyClassification(){

    const existing_tree_canopy = parseInt(this.state.existing_tree_canopy);
    console.log('percent', existing_tree_canopy, this.state.existing_tree_canopy);

    let tree_canopy_classification = false;
    if(this.state.resource_management_district === "Downtown"){
      // $B$7="Downtown","Class A", 
      tree_canopy_classification = "Class A";
    }
    else if(this.state.resource_management_district === "Urban"){
      // if(And($B$7="Urban",$B$8="Multi-Family & Office"), "Class B", 
      // if(And($B$7="Urban",$B$8="Commercial"),"Class B", 
      // if(And($B$7="Urban",$B$8="Industrial"),"Class B", 
      // if(and($B$7="Urban",$B$8="Residential Subdivision", $B$6>75),"Class C - Over 75% Canopy",
      // if(and($B$7="Urban",$B$8="Residential Subdivision",$B$6<41),"Class C - Under 40% Canopy",
      // if(and($B$7="Urban",$B$8="Institutional",$B$6>75),"Class C - Over 75% Canopy", 
      // if(and($B$7="Urban",$B$8="Institutional", $B$6<41),"Class C - Under 40% Canopy", 

      if(this.state.land_use === "Multi-Family & Office"){
        tree_canopy_classification = "Class B";
      }
      else if(this.state.land_use === "Commercial"){
        tree_canopy_classification = "Class B";        
      }
      else if(this.state.land_use === "Industrial"){
        tree_canopy_classification = "Class B";        
      }
      else if(this.state.land_use === "Residential Subdivision"){
        if(existing_tree_canopy > 75){
          tree_canopy_classification = "Class C - Over 75% Canopy";
        }
        else if(existing_tree_canopy < 41){
          tree_canopy_classification = "Class C - Under 40% Canopy";
        }
        else{
          tree_canopy_classification = "Class C - 41-75% Canopy";
        }
      }
      else if(this.state.land_use === "Institutional"){
        if(existing_tree_canopy > 75){
          tree_canopy_classification = "Class C - Over 75% Canopy";
        }
        else if(existing_tree_canopy < 41){
          tree_canopy_classification = "Class C - Under 40% Canopy";
        }
        else{
          tree_canopy_classification = "Class C - 41-75% Canopy";
        }
      }
    }
    else if(this.state.resource_management_district === "Suburban"){
        // IF(And($B$7="Suburban",$B$6>75), "Class C - Over 75% Canopy",
        // If(and($B$7="Suburban",$B$6<41), "Class C - Under 40% Canopy", "Class C - 41-75% Canopy"))

        if(existing_tree_canopy > 75){
          tree_canopy_classification = "Class C - Over 75% Canopy";
        }
        else if(existing_tree_canopy < 41){
          tree_canopy_classification = "Class C - Under 40% Canopy";
        }
        else{
          tree_canopy_classification = "Class C - 41-75% Canopy";
        }
    }
    return tree_canopy_classification
  }

  handleChange(event) {
    const payload = {};
    payload[event.target.name] = event.target.value;
    this.setState(payload);
    this.calculateTreeCanopyClassification();
  }

  handleSubmit(event) {
    console.log(this.state);
    alert('A name was submitted: ' + this.state.address);
    event.preventDefault();
  }

  render() {
    const tree_canopy_classification =this.calculateTreeCanopyClassification();
    

    return (

      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Location/Address:
            <input type="text" name='address' value={this.state.address} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Parcel Size:
            <input type="text" name='parcel_size' value={this.state.parcel_size} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Existing Tree Canopy:
            <input type="number" name='existing_tree_canopy' value={this.state.existing_tree_canopy} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Resource Management District:
            <select name='resource_management_district' value={this.state.resource_management_district} onChange={this.handleChange} >
              <option>Select</option>
              <option value='Urban'>
                Urban
              </option>
              <option value='Downtown'>
                Downtown
              </option>
              <option value='Suburban'>
                Suburban
              </option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Land Use / Project Type
            <select name='land_use' value={this.state.land_use} onChange={this.handleChange} >
              <option>Select</option>
              <option value='Multi-Family & Office'>
                Multi-Family & Office
              </option>
              <option value='Residential Subdivision'>
                Residential Subdivision
              </option>
              <option value='Institutional'>
                Institutional
              </option>
              <option value='Commercial'>
                Commercial
              </option>
              <option value='Industrial'>
                Industrial
              </option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Payment In Lieu Area (if applicable)
            <input type="text" name='payment_in_lieu_area' value={this.state.payment_in_lieu_area} onChange={this.handleChange} />
          </label>
        </div>
        <input type="submit" value="Submit" />
        <div>
        INPUT: {this.state.resource_management_district} : {this.state.land_use} <br />
        RESULT: { tree_canopy_classification }
        </div>
        <div>
          <legend>
             Table 7-19.2 | Class Based Canopy Requirement, Classes A & B*     
          </legend>
          <table>
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
            <tbody>
              <tr>
                <td rowSpan="7">
                  Class A
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.05).toFixed(0) } SF 
                  (5%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.0).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.05 + this.state.parcel_size * 0.0).toFixed(0) } SF 
                  (5%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.04).toFixed(0) } SF 
                  (4%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.02).toFixed(0) } SF 
                  (2%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.04 + this.state.parcel_size * 0.02).toFixed(0) } SF 
                  (6%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.03).toFixed(0) } SF 
                  (3%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.04).toFixed(0) } SF 
                  (4%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.07).toFixed(0) } SF 
                  (7%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.02).toFixed(0) } SF 
                  (2%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.06).toFixed(0) } SF 
                  (6%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.08).toFixed(0) } SF 
                  (8%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.01).toFixed(0) } SF 
                  (1%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.08).toFixed(0) } SF 
                  (8%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.09).toFixed(0) } SF 
                  (9%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.00).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.10).toFixed(0) } SF 
                  (10%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.10).toFixed(0) } SF 
                  (10%)
                </td>
              </tr>
              <tr>
                <td rowSpan="7">
                  Class B
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.10).toFixed(0) } SF 
                  (10%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.0).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.10).toFixed(0) } SF 
                  (10%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.08).toFixed(0) } SF 
                  (8%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.03).toFixed(0) } SF 
                  (3%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.11).toFixed(0) } SF 
                  (11%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.06).toFixed(0) } SF 
                  (6%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.06).toFixed(0) } SF 
                  (6%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.12).toFixed(0) } SF 
                  (12%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.04).toFixed(0) } SF 
                  (4%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.09).toFixed(0) } SF 
                  (9%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.13).toFixed(0) } SF 
                  (13%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.02).toFixed(0) } SF 
                  (2%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.12).toFixed(0) } SF 
                  (12%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.14).toFixed(0) } SF 
                  (14%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.00).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>

          <legend>
            Table 7-19.3 | Class Based Canopy Requirement, Class C***
          </legend>
          <table>
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
            <tbody>
              <tr>
                <td rowSpan="7">
                  Class C - Over 75% Canopy
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.0).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.12).toFixed(0) } SF 
                  (12%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.06).toFixed(0) } SF 
                  (6%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.18).toFixed(0) } SF 
                  (18%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.09).toFixed(0) } SF 
                  (9%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.12).toFixed(0) } SF 
                  (12%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.21).toFixed(0) } SF 
                  (21%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.06).toFixed(0) } SF 
                  (6%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.18).toFixed(0) } SF 
                  (18%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.24).toFixed(0) } SF 
                  (24%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.03).toFixed(0) } SF 
                  (3%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.24).toFixed(0) } SF 
                  (24%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.27).toFixed(0) } SF 
                  (27%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.00).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.30).toFixed(0) } SF 
                  (30%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.30).toFixed(0) } SF 
                  (30%)
                </td>
              </tr>
              <tr>
                <td rowSpan="7">
                  Class C - 41-75% Canopy
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.0).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.12).toFixed(0) } SF 
                  (12%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.05).toFixed(0) } SF 
                  (5%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.17).toFixed(0) } SF 
                  (17%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.09).toFixed(0) } SF 
                  (9%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.10).toFixed(0) } SF 
                  (10%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.19).toFixed(0) } SF 
                  (19%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.06).toFixed(0) } SF 
                  (6%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.21).toFixed(0) } SF 
                  (21%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.03).toFixed(0) } SF 
                  (3%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.20).toFixed(0) } SF 
                  (20%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.23).toFixed(0) } SF 
                  (23%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.00).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.25).toFixed(0) } SF 
                  (25%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.25).toFixed(0) } SF 
                  (25%)
                </td>
              </tr>
              <tr>
                <td rowSpan="7">
                  Class C - Under 40% Canopy
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.0).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.15).toFixed(0) } SF 
                  (15%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.12).toFixed(0) } SF 
                  (12%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.04).toFixed(0) } SF 
                  (4%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.16).toFixed(0) } SF 
                  (16%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.09).toFixed(0) } SF 
                  (9%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.8).toFixed(0) } SF 
                  (8%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.17).toFixed(0) } SF 
                  (17%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.06).toFixed(0) } SF 
                  (6%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.12).toFixed(0) } SF 
                  (12%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.18).toFixed(0) } SF 
                  (18%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.03).toFixed(0) } SF 
                  (3%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.16).toFixed(0) } SF 
                  (16%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.19).toFixed(0) } SF 
                  (19%)
                </td>
              </tr>
              <tr>
                <td>
                  { (this.state.parcel_size * 0.00).toFixed(0) } SF 
                  (0%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.20).toFixed(0) } SF 
                  (20%)
                </td>
                <td>
                  { (this.state.parcel_size * 0.20).toFixed(0) } SF 
                  (20%)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>

            <legend>
               Fee in Lieu - Assumptions   
            </legend>
            <table>
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
                    ${ this.fee_in_lieu_assumption.downtown.land }
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.urban.land }
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.suburban.land }
                  </td>
                </tr>
                <tr>
                  <td>
                    Administration
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.downtown.administration }
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.urban.administration }
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.suburban.administration }
                  </td>
                </tr>
                <tr>
                  <td>
                    Tree Installation
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.downtown.tree_installation }
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.urban.tree_installation }
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.suburban.tree_installation }
                  </td>
                </tr>
                <tr>
                  <td>
                    Fee per SF of Canopy
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.downtown.land + this.fee_in_lieu_assumption.downtown.administration + this.fee_in_lieu_assumption.downtown.tree_installation }
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.urban.land + this.fee_in_lieu_assumption.urban.administration + this.fee_in_lieu_assumption.urban.tree_installation }
                  </td>
                  <td>
                    ${ this.fee_in_lieu_assumption.suburban.land + this.fee_in_lieu_assumption.suburban.administration + this.fee_in_lieu_assumption.suburban.tree_installation }
                  </td>
                </tr>
              </tbody>
            </table>

            <div>
              Area to apply Fee in Lieu { this.state.payment_in_lieu_area } SF      
            </div>
                 
            
            <legend>
               Payment Calculations 
            </legend>
            <table>
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
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.downtown.land).toFixed(0) }
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.urban.land).toFixed(0) }
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.suburban.land).toFixed(0) }
                  </td>
                </tr>
                <tr>
                  <td>
                    Administration Fee
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.downtown.administration).toFixed(0) }
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.urban.administration).toFixed(0) }
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.suburban.administration).toFixed(0) }
                  </td>
                </tr>
                <tr>
                  <td>
                    Tree Installation Fee
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.downtown.tree_installation).toFixed(0) }
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.urban.tree_installation).toFixed(0) }
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * this.fee_in_lieu_assumption.suburban.tree_installation).toFixed(0) }
                  </td>
                </tr>
                <tr>
                  <td>
                    Total Fee
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * (this.fee_in_lieu_assumption.downtown.land + this.fee_in_lieu_assumption.downtown.administration + this.fee_in_lieu_assumption.downtown.tree_installation)).toFixed(0)  }
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * (this.fee_in_lieu_assumption.urban.land + this.fee_in_lieu_assumption.urban.administration + this.fee_in_lieu_assumption.urban.tree_installation)).toFixed(0)  }
                  </td>
                  <td>
                    ${ (this.state.payment_in_lieu_area * (this.fee_in_lieu_assumption.suburban.land + this.fee_in_lieu_assumption.suburban.administration + this.fee_in_lieu_assumption.suburban.tree_installation)).toFixed(0)  }
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </form>
    );
  }
}


export default class extends Component {
  render() {
    return <div className="TreePreservationSiteCalculator">
      <header className="App-header">
         <h1>
          TREE PRESERVATION CALCULATOR
        </h1>
      </header>
      <div>
        <TreePreservationInputForm></TreePreservationInputForm>
      </div>
    </div>
  }
}
