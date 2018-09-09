import React from "react";
import ReactDOM from "react-dom";
//import CourseComponent, { ButtonComponent } from "./course.component";

var CourseItem = React.createClass({
  removeCourse: function(name) {
    name.preventDefault();
    this.props.removeCourse(this.props.details.name);
    return;
  },

  render: function() {
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
});

export default class CourseListComponent extends React.Component {
  constructor() {
    super();
    this.handleRemoveCourse = this.handleRemoveCourse.bind(this);
    this.state = {
      courseList: [
        {
          name: "Angular",
          price: 30000,
          duration: "6 months",
          rating: "3.0",
          imgUrl: "https://angular.io/assets/images/logos/angular/angular.svg",
          link: "https://angular.io/"
        },
        {
          name: "React",
          price: 20000,
          duration: "2 months",
          rating: "5.0",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
          link: "https://reactjs.org/"
        },
        {
          name: "VueJS",
          price: 10000,
          duration: "4 months",
          rating: "4.0",
          imgUrl: "https://vuejs.org/images/logo.png",
          link: "https://vuejs.org/"
        }
      ]
    };
  }

  handleRemoveCourse(name) {
    var courseIndex = this.state.courseList.findIndex(c => c.name == name);

    this.setState({
      courseList: [
        ...this.state.courseList.slice(0, courseIndex),
        ...this.state.courseList.slice(courseIndex + 1)
      ]
    });
    return;
  }

  AddOnClick() {
    let nameVal = ReactDOM.findDOMNode(this.refs.inName).value;
    let priceVal = ReactDOM.findDOMNode(this.refs.inPrice).value;
    let duraVal = ReactDOM.findDOMNode(this.refs.inDura).value;
    let ratingVal = ReactDOM.findDOMNode(this.refs.inRating).value;
    let urlVal = ReactDOM.findDOMNode(this.refs.inUrl).value;
    if (nameVal.length > 0) {
      var tempCourse = {
        name: nameVal,
        price: priceVal,
        duration: duraVal,
        rating: ratingVal,
        imgUrl: urlVal,
        link: "https://www.google.com/search?q=" + nameVal
      };
      this.setState({ courseList: [...this.state.courseList, tempCourse] });
    } else {
      alert("Please fill in inputs to add a new course");
    }
  }

  render() {
    var list = this.state.courseList.map(c => (
      <CourseItem details={c} removeCourse={this.handleRemoveCourse} />
    ));

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top align-items-center">
          <div className="collapse navbar-collapse center">
            <form className="form-inline">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <input
                    className="form-control space"
                    ref="inName"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="nav-item active">
                  <input
                    className="form-control space"
                    ref="inPrice"
                    placeholder="Price"
                    required
                  />
                </li>
                <li className="nav-item active">
                  <input
                    className="form-control space"
                    ref="inDura"
                    placeholder="Duration"
                    required
                  />
                </li>
                <li className="nav-item active">
                  <input
                    className="form-control space"
                    ref="inRating"
                    placeholder="Rating"
                    required
                  />
                </li>
                <li className="nav-item active">
                  <input
                    className="form-control space"
                    ref="inUrl"
                    placeholder="Image Url"
                    required
                  />
                </li>
                <li className="nav-item active">
                  <button
                    className="btn btn-outline-secondary my-2 my-sm-0 space"
                    type="button"
                    value="Add"
                    onClick={this.AddOnClick.bind(this)}
                  >
                    Add
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </nav>
        <div className="card-columns mb-3 text-center">{list}</div>
      </div>
    );
  }
}
