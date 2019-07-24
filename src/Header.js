import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "./bootstrap.css";
import "./style.css";
import "./demo.css";
import "./custom.css";
import "./dataTable.css";
import "./fontAwesome.css";
import "./styles.css";

export class Header extends Component {
  render() {
    return (
      <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a
            class="navbar-brand brand-logo"
            href="http://hachikokitchen.com/hachiko_dev/dashboard"
          >
            <img
              src="http://hachikokitchen.com/hachiko_dev/assets/images/Hachiko_Logo.png"
              class="img-fluid"
              alt="logo"
            />
          </a>
          <a class="navbar-brand brand-logo-mini" href="#">
            <h1>H</h1>
          </a>
        </div>

        <div class="navbar-menu-wrapper d-flex align-items-center">
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item dropdown mx-auto">
              <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                  <i class="fa fa-comments-o text-white" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div class="scrollBar">
                    <div class="dropdown-item">
                      <p
                        class="mb-0 font-weight-normal float-left"
                        id="chat-count2"
                      >
                        You have 0 unread messages
                      </p>
                      <a
                        href="http://hachikokitchen.com/hachiko_dev/enquiry/getAllMsges"
                        class="badge badge-info badge-pill float-right"
                      >
                        View all
                      </a>
                    </div>

                    <hr />
                    <a
                      class="dropdown-item preview-item"
                      id="2"
                      style={{ width: "350px" }}
                    >
                      <div class="preview-thumbnail pull-left ">
                        <img
                          src="http://hachikokitchen.com/hachiko_dev/assets/images/default-user.png"
                          alt="image"
                          class="profile-pic"
                          style={{ height: "30px", width: "30px" }}
                        />
                      </div>
                      <div class="preview-item-content flex-grow mx-auto">
                        <h6 class="preview-subject ellipsis font-weight-medium text-dark">
                          Yogesh Suryawanshi{" "}
                          <span class="float-right font-weight-light small-text">
                            1 Minutes ago
                          </span>
                        </h6>
                        <p class="font-weight-light small-text">admin</p>
                        <p class="font-weight-light small-text">
                          Lead Name: hemant shirude
                        </p>
                      </div>
                    </a>
                    <hr />
                    <a
                      class="dropdown-item preview-item"
                      id="2"
                      style={{ width: "350px" }}
                    >
                      <div class="preview-thumbnail pull-left">
                        <img
                          src="http://hachikokitchen.com/hachiko_dev/assets/images/default-user.png"
                          alt="image"
                          class="profile-pic"
                          style={{ height: "30px", width: "30px" }}
                        />
                      </div>
                      <div class="preview-item-content flex-grow mx-auto">
                        <h6 class="preview-subject ellipsis font-weight-medium text-dark">
                          Yogesh Suryawanshi{" "}
                          <span class="float-right font-weight-light small-text">
                            1 Minutes ago
                          </span>
                        </h6>
                        <p class="font-weight-light small-text">yes sir</p>
                        <p class="font-weight-light small-text">
                          Lead Name: hemant shirude
                        </p>
                      </div>
                    </a>
                    <a
                      class="dropdown-item preview-item"
                      id="2"
                      style={{ width: "350px" }}
                    >
                      <div class="preview-thumbnail pull-left ">
                        <img
                          src="http://hachikokitchen.com/hachiko_dev/assets/images/default-user.png"
                          alt="image"
                          class="profile-pic"
                          style={{ height: "30px", width: "30px" }}
                        />
                      </div>
                      <div class="preview-item-content flex-grow mx-auto">
                        <h6 class="preview-subject ellipsis font-weight-medium text-dark">
                          Yogesh Suryawanshi{" "}
                          <span class="float-right font-weight-light small-text">
                            1 Minutes ago
                          </span>
                        </h6>
                        <p class="font-weight-light small-text">admin</p>
                        <p class="font-weight-light small-text">
                          Lead Name: hemant shirude
                        </p>
                      </div>
                    </a>
                    <hr />
                    <a
                      class="dropdown-item preview-item"
                      id="2"
                      style={{ width: "350px" }}
                    >
                      <div class="preview-thumbnail pull-left ">
                        <img
                          src="http://hachikokitchen.com/hachiko_dev/assets/images/default-user.png"
                          alt="image"
                          class="profile-pic"
                          style={{ height: "30px", width: "30px" }}
                        />
                      </div>
                      <div class="preview-item-content flex-grow mx-auto">
                        <h6 class="preview-subject ellipsis font-weight-medium text-dark">
                          Yogesh Suryawanshi{" "}
                          <span class="float-right font-weight-light small-text">
                            1 Minutes ago
                          </span>
                        </h6>
                        <p class="font-weight-light small-text">admin</p>
                        <p class="font-weight-light small-text">
                          Lead Name: hemant shirude
                        </p>
                      </div>
                    </a>
                    <hr />
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li class="nav-item dropdown mx-auto">
              <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                  <i class="fa fa-bell text-white" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div id="viewnotification" style={{ width: "300px" }}>
                    <a
                      href="http://hachikokitchen.com/hachiko_dev/notification/get_allnotification"
                      class="dropdown-item"
                    >
                      <p
                        class="mb-0 font-weight-normal float-left"
                        id="notimsg"
                      >
                        You have 0 new notifications
                      </p>
                      <span class="badge badge-pill badge-warning float-right">
                        View all
                      </span>
                    </a>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li class="nav-item dropdown d-none d-sm-inline-block mx-auto">
              <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                  <p class="text-white pt-3"> Hachiko Admin (Administrator)</p>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>

            <li class="nav-item dropdown d-none d-sm-inline-block mx-auto">
              <Dropdown>
                <Dropdown.Toggle variant="default" id="dropdown-basic">
                  <img
                    class="img-xs rounded-circle"
                    src="http://hachikokitchen.com/hachiko_dev/assets/images/faces/admin.svg"
                    alt="Profile image"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <a href="#menu">
            <button
              class="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
              type="button"
            >
              <span class="fa fa-bars" />
            </button>
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
