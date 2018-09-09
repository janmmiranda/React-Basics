import React from "react";

export default class CourseComponent extends React.Component {
  removeCourse(name) {
    name.preventDefault();
    console.log(name);
    return;
  }

  render() {
    return (
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{this.props.details.name}</h4>
        </div>
        <img
          className="card-img-top img-responsive center-block"
          src={this.props.details.imgUrl}
          alt="Card image cap"
          height="80px"
          width="60px"
        />
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            <li> Price: {this.props.details.price} </li>
            <li> Price: {this.props.details.duration} </li>
            <li> Rating: {this.props.details.rating} </li>
          </ul>
          <div className="btn-toolbar">
            <div className="btn-group">
              <a
                href={this.props.details.link}
                className="btn btn-secondary button-block btn-md"
              >
                Learn
              </a>
              <button
                className="btn btn-secondary button-block btn-md"
                value={this.props.details.name}
                onClick={this.removeCourse}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class ButtonComponent extends React.Component {
  handleClick() {
    console.log("Click happened");
  }
  render() {
    return (
      <button
        className="btn btn-secondary button-block btn-md"
        onClick={() => this.handleClick()}
      >
        Delete
      </button>
    );
  }
}
