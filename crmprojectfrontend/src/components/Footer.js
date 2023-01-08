import React from 'react';
import {Link} from 'react-router-dom';

export function Footer()
{
  return (
    <footer className="page-footer font-small teal pt-4">
      <div className={"container-fluid text-center text-md-left"}>
        <div className="row">
          <div className={"col-md-6 mt-md-0 mt-3"}>
            <h5 className={"text-uppercase font-weight-bold"}>Team Members</h5>
            <p>TeamLead: Muammad Saqlain-F190912</p>
            <p>Muammad Rizwan-F190994</p>
            <p>Muammad Saqlain-F190948</p>
          </div>
          <hr className={"clearfix w-100 d-md-none pb-3"}/>
          <div className={"col-md-6 mb-md-0 mb-3"}>
            <h5 className={"text-uppercase font-weight-bold"}>Supervisor</h5>
            <p>Dr.Muhammad Fiaz</p>
          </div>
      </div>
      </div>
      <div class="footer-copyright text-center py-3">© 2023 ScrapHub:

      </div>
    </footer>
    )
}