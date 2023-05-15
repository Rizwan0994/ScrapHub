import React from 'react';
import { BusinessName } from './subcomponents/BusinessName';
import { Address } from './subcomponents/Address';
import { OfficeTel } from './subcomponents/OfficeTel';
import { Email } from './subcomponents/Email';
import { LeadContact } from './subcomponents/LeadContact';
import { Link } from 'react-router-dom';

class Lead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      subject: '',
      body: ''
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  handleSubjectChange = (event) => {
    this.setState({ subject: event.target.value });
  }

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value });
  }

  sendEmails = () => {
    const subject = this.state.subject;
    const body = this.state.body;

    fetch('http://localhost:4000/send-emails', {
      method: 'POST',
      body: JSON.stringify({ subject, body }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      this.toggleModal();
    })
    .catch(error => {
      console.error(error);
      alert('Error sending emails');
    });
  }

  render() {
    return (
      <React.Fragment>
        <tr>
          <td className="text-center">
            <BusinessName businessName={this.props.lead.businessName} />
            <Link to={`/form/${this.props.lead._id}`}><button type="button" className="btn btn-primary">Edit</button></Link>
          </td>
          <td className="text-center">
            <LeadContact leadContact={this.props.lead.leadContact} />
          </td>
          <td className="text-center">
            <Address address={this.props.lead.address}/>
            <Link to={`/view/${this.props.lead._id}`}><button type="button" className="btn btn-info">View Record</button></Link>
          </td>
          <td className="text-center">
            <OfficeTel officeTel={this.props.lead.officeTel} />
            <button onClick={() => this.props.onDelete(this.props.lead._id)} type="button" className="btn btn-danger float-right">Delete</button>
          </td>
          <td className="text-center">
            <Email email={this.props.lead.email} />
            {/* <button onClick={this.toggleModal} type="button" className="btn btn-success float-right">Send Email</button> */}
          </td>
          <td className="text-center">
            
            <button onClick={this.toggleModal} type="button" className="btn btn-primary float-right">Send Emails to All</button>
          </td>
        </tr>

        {this.state.showModal &&
          <div className="modal fade show" role="dialog" style={{display: "block"}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Send Email</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.toggleModal}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" className="form-control" id="subject" value={this.state.subject} onChange={this.handleSubjectChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea className="form-control" id="body" rows="5" value={this.state.body} onChange={this.handleBodyChange}></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.toggleModal}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.sendEmails}>Send</button>
                </div>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}

class LeadTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: []
    };
  }

  componentDidMount() {
    fetch('/api/leads')
      .then(res => res.json())
      .then(data => {
        this.setState({ leads: data });
      })
      .catch(error => console.error(error));
    }
    
    handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
    fetch(`/api/leads/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(data => {
    alert(data.message);
    this.setState(prevState => ({
    leads: prevState.leads.filter(lead => lead._id !== id)
    }));
    })
    .catch(error => {
    console.error(error);
    alert('Error deleting lead');
    });
    }
    }
    
    render() {
    return (
        
    <div className="table-responsive">
    <table className="table table-bordered table-hover">
    <thead>
    <tr>
    <th className="text-center">Business Name</th>
    <th className="text-center">Lead Contact</th>
    <th className="text-center">Address</th>
    <th className="text-center">Office Tel</th>
    <th className="text-center">Email</th>
    <th></th>
    </tr>
    </thead>
    <tbody>
    {this.state.leads.map(lead => (
    <Lead key={lead._id} lead={lead} onDelete={this.handleDelete} />
    ))}
    </tbody>
    </table>
    </div>
    );
    }
    }

    export default Lead;