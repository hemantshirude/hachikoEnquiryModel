import React from "react";

const Tablecol = ({
  lead_id,
  status_name,
  stage_name,
  type_name,
  task_name,
  first_name,
  last_name,
  email_address,
  phone_number,
  lead_date,
  user_first_name,
  user_last_name
}) => (
  <tr id="lr-4">
    <td>{lead_id}</td>
    <td>
      <div class="btn-group dropdown">
        <a href="#" class="dropdown-toggle">
          Action
        </a>
      </div>
      |<a href="#">View</a>|<a href="#">Chat</a>
    </td>
    <td>{status_name}</td>
    <td class="change_stagec" id="4">
      {stage_name}
    </td>
    <td class="change_type" id="4">
      <a href="#">{type_name}</a>
    </td>
    <td>
      <span data-toggle="tooltip" href="">
        {task_name}
      </span>
    </td>
    <td>
      <span name="11" data="41" id="4" class="pb-1">
        Next
      </span>
      &nbsp;&nbsp;
    </td>
    <td>
      {first_name} {last_name}
    </td>
    <td>{email_address}</td>
    <td>{phone_number}</td>
    <td>{lead_date}</td>
    <td>
      {user_first_name} {user_last_name}
    </td>
  </tr>
);

export default Tablecol;
