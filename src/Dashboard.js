import React, { Component } from "react";
import Tablecol from "./DashboardCol";
import Modelm from "./Model";
import "./bootstrap.css";
import "./style.css";
import "./demo.css";
import "./custom.css";
import "./dataTable.css";
import "./fontAwesome.css";
const APIURL = "https://hachikokitchen.com/hachiko_dev/enquiry/enquiry_data";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enquiry: []
    };
  }

  componentWillMount() {
    fetch(APIURL)
      .then(resp => {
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              let err = { errorMessage: data.message };
              throw err;
            });
          } else {
            let err = {
              errorMessage: "Please try again in some time, Server Error!"
            };
            throw err;
          }
        }
        return resp.json();
      })
      .then(enquiry => this.setState({ enquiry }));
  }
  render() {
    const enquiry = this.state.enquiry.map(e => (
      <Tablecol key={e.lead_id} {...e} />
    ));
    return (
      <div>
        <div class="row purchace-popup">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a>Dashboard</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Enquiry
              </li>
            </ol>
          </nav>
        </div>

        <div class="row profile-page">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h3>Enquiry List</h3>
                <p class="msg" />
                <center>
                  <span id="progressLoginLoader" />
                </center>
                <div class="profile-body">
                  <div class="row">
                    <div class="col-xs-12 col-md-12">
                      <div class="container">
                        <div class="table-title">
                          <div class="row">
                            <div class="col-xs-2 col-sm-2">
                              <Modelm />
                            </div>
                            <div class="col-xs-2 col-sm-2" />
                            <div class="col-xs-2 col-sm-2" />
                            <div class="col-xs-2 col-sm-2" />
                            <div class="col-xs-4 col-sm-3">
                              <input
                                class="form-control"
                                type="text"
                                placeholder="Search.."
                              />
                            </div>
                            <div class="col-xs-2 col-sm-1">
                              <span id="searchLoader"> </span>
                            </div>
                          </div>
                          <form action="" id="leadsFilter" method="post">
                            <div class="row mt-3">
                              <div class="col-xs-12 col-md-2 mb-1">
                                <select
                                  class="custom-select"
                                  id="lead_stage"
                                  name="lead_stage"
                                >
                                  <option value="">Select Stage...</option>
                                  <option value="1">Lead (0) </option>
                                  <option value="2">Enquiry (0) </option>
                                  <option value="3">Measurement (0) </option>
                                  <option value="4">Design (1) </option>
                                  <option value="5">Quotation (0) </option>
                                  <option value="6">Work Order (1) </option>
                                  <option value="7">Purchase Order (1) </option>
                                  <option value="8">Dispatch (1) </option>
                                  <option value="9">Installation (1) </option>
                                  <option value="10">Quality Check (0) </option>
                                  <option value="11">Handover (1) </option>
                                </select>
                              </div>
                              <div class="col-xs-12 col-md-2 mb-1">
                                <select
                                  class="custom-select"
                                  id="lead_type"
                                  name="lead_type"
                                >
                                  <option value="">Select Type...</option>
                                  <option value="1">Hot (5) </option>
                                  <option value="2">Warm (1) </option>
                                  <option value="3">Cold (0) </option>
                                  <option value="4">Funnel (0) </option>
                                </select>
                              </div>
                              <div class="col-xs-12 col-md-2 mb-1">
                                <select
                                  class="custom-select"
                                  id="lead_status"
                                  name="lead_status"
                                >
                                  <option value="">Select Status...</option>
                                  <option value="1">Active (6) </option>
                                  <option value="2">Closed (0) </option>
                                  <option value="3">Hold (0) </option>
                                  <option value="4">Cancelled (0) </option>
                                </select>
                              </div>
                              <div class="col-xs-12 col-md-2 mb-1">
                                <select
                                  class="custom-select"
                                  id=""
                                  name="lead_category"
                                >
                                  <option value="">Select Category...</option>
                                  <option value="1">Digital</option>
                                  <option value="2">Print</option>
                                  <option value="3">Channel Partner</option>
                                  <option value="4">Star Team</option>
                                  <option value="5">Event</option>
                                  <option value="6">Direct</option>
                                  <option value="7">Co-Branding</option>
                                  <option value="9">BA</option>
                                  <option value="10">Existing Client</option>
                                  <option value="11">Staff</option>
                                  <option value="12">Outdoor</option>
                                </select>
                              </div>
                              <div class="col-xs-12 col-md-2 mb-1">
                                <select
                                  class="custom-select"
                                  id="grd_leadsource"
                                  name="tbl_leadsource"
                                >
                                  <option value="">Select Source...</option>
                                </select>
                              </div>
                              <div class="col-xs-12 col-md-2 mb-1">
                                <select
                                  class="custom-select"
                                  id="tbl_leadowner"
                                  name="tbl_leadowner"
                                >
                                  <option value="">Select Team...</option>
                                  <option value="7">
                                    Gandhali Deshpande (2)
                                  </option>
                                  <option value="12">
                                    Prashant Bhavsar (0)
                                  </option>
                                  <option value="13">Vinod Dhage (0)</option>
                                  <option value="27">Priya Sharma (0)</option>
                                  <option value="20">
                                    Sandeep Kulkarni (0)
                                  </option>
                                  <option value="21">Nikita Borade (3)</option>
                                  <option value="22">
                                    Rajkiran Chotele (0)
                                  </option>
                                  <option value="23">Hitesh Bhatia (0)</option>
                                  <option value="24">Vimal Hudlikar (0)</option>
                                  <option value="25">
                                    Vrushali Mahale (0)
                                  </option>
                                  <option value="26">
                                    Prasad Sonawane (0)
                                  </option>
                                  <option value="28">
                                    Hachiko Developer (1)
                                  </option>
                                  <option value="34">
                                    Dhanashri Patil (0)
                                  </option>
                                  <option value="35"> (0)</option>
                                  <option value="36">
                                    Bhagyashri1 Sonawne (0)
                                  </option>
                                  <option value="37">
                                    Yogesh Suryawanshi (5)
                                  </option>
                                  <option value="38">Kiran Kothule (0)</option>
                                  <option value="39">Yogesh Ahire (0)</option>
                                  <option value="40">Manohar Dhale (2)</option>
                                </select>
                              </div>
                              <div class="col-xs-12 col-md-2 mb-1">
                                <button
                                  class="btn btn-success"
                                  type="submit"
                                  name="search"
                                  value="search"
                                >
                                  Submit
                                </button>
                              </div>
                              <div class="col-xs-12 col-md-2 mb-1">
                                <button
                                  type="submit"
                                  name="reset"
                                  value="reset"
                                  class="btn text-primary"
                                >
                                  Reset
                                </button>
                              </div>
                              <div class="col-xs-12 col-md-2 mb-1">
                                <a href="#" class="btn text-primary">
                                  <i
                                    class="fa fa-refresh"
                                    style={{ fontSize: "15px" }}
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div id="ltbl" class="">
                          <div
                            class="table-responsive"
                            style={{ minHeight: "300px" }}
                          >
                            <table
                              id="leadtbl"
                              class="table table-striped table-hover"
                            >
                              <table
                                id="leadtbl"
                                class="table table-striped table-hover"
                              >
                                <thead>
                                  <tr>
                                    <th>#Id</th>
                                    <th>Action</th>
                                    <th>Status</th>
                                    <th>Stage</th>
                                    <th>Type</th>
                                    <th>Task</th>
                                    <th>Action</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Date</th>
                                    <th>Owner</th>
                                  </tr>
                                </thead>
                                <tbody id="leadTblBody">{enquiry}</tbody>
                              </table>
                            </table>
                          </div>
                          <div class="clearfix">
                            <div class="pagination-margin">
                              <div class="hint-text">
                                Showing <b>6</b> out of <b>6</b> entries
                              </div>
                              <div class="pagination" id="ajax_pagingsearc" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
