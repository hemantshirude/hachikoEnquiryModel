import React, { Component } from "react";

import "./bootstrap.css";
import "./style.css";
import "./demo.css";
import "./custom.css";
import "./dataTable.css";
import "./fontAwesome.css";

export class Sidebar extends Component {
  render() {
    return (
      <div id="menu">
        <nav class="sidebar sidebar-offcanvas" id="offcanvas">
          <ul class="nav">
            <li class="nav-item nav-profile">
              <div class="nav-link">
                <a href="#" class="btn btn-hachiko btn-block create_lead">
                  New Lead
                  <i class="fa fa-plus" />
                </a>
              </div>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">
                <i class="menu-icon fa fa-pie-chart" aria-hidden="true" />
                <span class="menu-title">Dashboard</span>
              </a>
            </li>

            <li class="nav-item active">
              <a class="nav-link" href="#">
                <i class="menu-icon fa fa-info-circle" />
                <span class="menu-title">Enquiry</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#quot"
                aria-expanded="false"
                aria-controls="settings"
              >
                <i class="menu-icon fa fa-list-alt" aria-hidden="true" />
                <span class="menu-title">Quotation</span>
                <i class="menu-arrow" />
              </a>
              <div class="collapse" id="quot">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Manage Quotation
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Manage Items
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Manage Sub-Item
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item active">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#quot"
                aria-expanded="false"
                aria-controls="settings"
              >
                <i class="menu-icon fa fa-list-alt" aria-hidden="true" />
                <span class="menu-title">Reports</span>
                <i class="menu-arrow" />
              </a>
              <div class="collapse show" id="reports1">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Enquiry Report
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Pending Task Report
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Followup Report
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Quotation Report
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Work Orders
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="menu-icon fa fa-money" />
                <span class="menu-title">Manage Payment</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="menu-icon fa fa-industry" />
                <span class="menu-title">Production</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-toggle="collapse"
                href="#settings"
                aria-expanded="false"
                aria-controls="settings"
              >
                <i class="menu-icon fa fa-cog" />
                <span class="menu-title">Settings</span>
                <i class="menu-arrow" />
              </a>
              <div class="collapse" id="settings">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item ">
                    <a class="nav-link" href="#">
                      <span class="menu-title">Refrences</span>
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link" href="#">
                      <span class="menu-title">Lead Option</span>
                    </a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link" href="#">
                      <span class="menu-title">Users</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      My Profile
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span class="menu-title">Suppliers</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span class="menu-title">Components</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <span class="menu-title">Material</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
