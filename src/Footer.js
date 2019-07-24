import React, { Component } from "react";
import "./bootstrap.css";
import "./style.css";
import "./demo.css";
import "./custom.css";
import "./dataTable.css";
import "./fontAwesome.css";

export class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="container-fluid clearfix">
          <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">
            Copyright © 2019
            <a href="#" target="_blank">
              Hachiko
            </a>
            . All rights reserved.
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
