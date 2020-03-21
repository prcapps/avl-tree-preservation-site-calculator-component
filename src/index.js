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

      <form onSubmit={this.handleSubmit} class="container mb-5">
      	<hr class="my-5"></hr>
      	<div class="form-row">
	        <div class="form-group col-lg-4 col-md-6">
	          <label for="address">
	            Location/Address:
	          </label>
	          <input class="form-control" type="text" name='address' id="address" value={this.state.address} onChange={this.handleChange} />
	        </div>
	        <div class="form-group col-lg-4 col-md-6">
	          <label for="parcel_size">
	            Parcel Size:
	          </label>
	          <input type="text" name='parcel_size' class="form-control" id="parcel_size" value={this.state.parcel_size} onChange={this.handleChange} />
	        </div>
	        <div class="form-group col-lg-4 col-md-6">
	          <label for="existing_tree_canopy">
	            Existing Tree Canopy:
	          </label>
	          <div class="input-group">
	          	<input type="number" name="existing_tree_canopy" class="form-control" id="existing_tree_canopy" value={this.state.existing_tree_canopy} onChange={this.handleChange}/>
          	  <div class="input-group-append">
  							<span class="input-group-text">sqft</span>
							</div>
						</div>
	        </div>
					<div class="form-group col-lg-4 col-md-6">
        		<label for="resource_management_district">
          		Resource Management District:
          	</label>
          	<select class="custom-select" name='resource_management_district' id="resource_management_district" value={this.state.resource_management_district} onChange={this.handleChange} >
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
          </div>
	        <div class="form-group col-lg-4 col-md-6">
          	<label for="land_use">
            	Land Use / Project Type
            </label>
            <select name='land_use' id="land_use" value={this.state.land_use} onChange={this.handleChange} class="custom-select">
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
	        </div>
	        <div class="form-group col-lg-4 col-md-6">
	          <label for="payment_in_lieu_area">
	            Payment In Lieu Area (if applicable)
	          </label>
	          <input class="form-control" type="text" name='payment_in_lieu_area' id="payment_in_lieu_area" value={this.state.payment_in_lieu_area} onChange={this.handleChange} />
	        </div>	        	        
	      </div>
        <input type="submit" value="Submit" class="btn btn-lg btn-primary"/>
        <hr class="my-5"></hr>
        <div class="">
        INPUT: {this.state.resource_management_district} : {this.state.land_use} <br />
        RESULT: { tree_canopy_classification }
        </div>
        <hr class="my-5"></hr>
        <div>
          <legend>
             Table 7-19.2 | Class Based Canopy Requirement, Classes A & B*     
          </legend>
          <div class="table-responsive">
	          <table class="table table-bordered table-hover">
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
        </div>
        <hr class="my-5"></hr>
        <div>
          <legend>
            Table 7-19.3 | Class Based Canopy Requirement, Class C***
          </legend>
          <div class="table-responsive">
	          <table class="table table-hover table-bordered">
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
        </div>
        <hr class="my-5"></hr>
        <div class="row">
        <div class="col-lg-6">
            <legend>
               Fee in Lieu - Assumptions   
            </legend>
            <div class="table-responsive">
	            <table class="table table-responsive table-bordered table-hover">
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
	           </div>
            <div>
              Area to apply Fee in Lieu { this.state.payment_in_lieu_area } SF      
            </div>
          </div> 
          <div class="col-md-12 d-md-block d-md-block d-lg-none">
          	<hr class="my-5"></hr>
         	</div> 
          <div class="col-lg-6">
            <legend>
               Payment Calculations 
            </legend>
            <div class="table-responsive">
	            <table class="table table-bordered table-hover">
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
	        </div>
        </div>
      </form>
    );
  }
}


export default class extends Component {
  render() {
    return <div className="TreePreservationSiteCalculator">
    <link rel='dns-prefetch' href='//cdn.datatables.net' />
<link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />
<link rel='dns-prefetch' href='//www.ashevillenc.gov' />
<link rel='dns-prefetch' href='//www.google.com' />
<link rel='dns-prefetch' href='//stackpath.bootstrapcdn.com' />
<link rel='dns-prefetch' href='//cdn.jsdelivr.net' />
<link rel='dns-prefetch' href='//translate.google.com' />
<link rel='dns-prefetch' href='//platform.twitter.com' />
<link rel="alternate" type="application/rss+xml" title="The City of Asheville &raquo; Feed" href="https://www.ashevillenc.gov/feed/" />
<link rel="alternate" type="application/rss+xml" title="The City of Asheville &raquo; Comments Feed" href="https://www.ashevillenc.gov/comments/feed/" />
<link rel="alternate" type="text/calendar" title="The City of Asheville &raquo; iCal Feed" href="https://www.ashevillenc.gov/events/?ical=1" />
<link rel='stylesheet' id='tribe-common-skeleton-style-css'  href='https://www.ashevillenc.gov/wp-content/plugins/the-events-calendar/common/src/resources/css/common-skeleton.min.css?ver=4.10.2' type='text/css' media='all' />
<link rel='stylesheet' id='tribe-tooltip-css'  href='https://www.ashevillenc.gov/wp-content/plugins/the-events-calendar/common/src/resources/css/tooltip.min.css?ver=4.10.2' type='text/css' media='all' />
<link rel='stylesheet' id='wp-block-library-css'  href='https://www.ashevillenc.gov/wp-includes/css/dist/block-library/style.min.css?ver=5.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='jquery-datatables-css'  href='https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css?ver=5.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='datatables-buttons-css'  href='https://cdn.datatables.net/buttons/1.4.2/css/buttons.dataTables.min.css?ver=5.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='datatables-select-css'  href='https://cdn.datatables.net/select/1.2.3/css/select.dataTables.min.css?ver=5.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='datatables-fixedheader-css'  href='https://cdn.datatables.net/fixedheader/3.1.3/css/fixedHeader.dataTables.min.css?ver=5.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='datatables-fixedcolumns-css'  href='https://cdn.datatables.net/fixedcolumns/3.2.3/css/fixedColumns.dataTables.min.css?ver=5.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='datatables-responsive-css'  href='https://cdn.datatables.net/responsive/2.2.0/css/responsive.dataTables.min.css?ver=5.3.2' type='text/css' media='all' />
<link rel='stylesheet' id='wpfront-notification-bar-css'  href='https://www.ashevillenc.gov/wp-content/plugins/wpfront-notification-bar/css/wpfront-notification-bar.css?ver=1.7.1' type='text/css' media='all' />
<link rel='stylesheet' id='bootstrap-style-css'  href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' type='text/css' media='all' />
<link rel='stylesheet' id='lindua-style-css'  href='https://www.ashevillenc.gov/wp-content/themes/avl/css/lindua.css' type='text/css' media='all' />
<link rel='stylesheet' id='icomoon-style-css'  href='https://www.ashevillenc.gov/wp-content/themes/avl/css/icomoon.css' type='text/css' media='all' />
<link rel='stylesheet' id='algolia-autocomplete-css'  href='https://www.ashevillenc.gov/wp-content/plugins/search-by-algolia-instant-relevant-results/includes/../css/algolia-autocomplete.css?ver=2.11.3' type='text/css' media='screen' />
<link rel='stylesheet' id='avl-style-css'  href='https://www.ashevillenc.gov/wp-content/themes/avl/style.css?ver=1584663251' type='text/css' media='all' />
<link rel='stylesheet' id='header-style-css'  href='https://www.ashevillenc.gov/wp-admin/admin-ajax.php?action=get_header_style' type='text/css' media='all' />
<link rel='stylesheet' id='fancybox-style-css'  href='https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css' type='text/css' media='all' />


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
