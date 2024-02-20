import React from "react";

function Contact() {
    return (
        <div className="container-fluid bg-dark">
            <div className="row d-flex">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Open modal to Contact Pr0digalP</button>
            </div>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
        <section className="row">
        <ul className=" nav text-center d-flex justify-content-between justify-content-sm-around">
          <li className="nav-item py-3 fs-4"><a href="mailto:prodigalprogrammer7@gmail.com" className="text-danger p-3">Email</a></li>
          <li className="py-3 fs-4"><a className="text-danger p-3" href="https://github.com/prodigalProgrammer">GitHub</a></li>
          <li className="py-3 fs-4"><a className="text-danger p-3" href="#">Resume</a></li>
          <li className="py-3 fs-4"><a className="text-danger p-3" href="https://uk.linkedin.com/in/monrone">LinkedIn</a></li>
        </ul>
</section>
        </div>
    );
}

export default Contact;