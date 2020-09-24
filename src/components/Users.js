import React from 'react';
import '../App.css';
import usersData from './Database';
import Modal from './Modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



class Users extends React.Component {

  constructor(props){
    super();
    this.state = { users: usersData, show: false, nameOfUser: ''};
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.setCalendar = this.setCalendar.bind(this);
  }

/* This is the Users Component which is exported and gets rendered inside the App component. 
  Here in the constructor function we set the initial state. */ 
  
  showModal = (element) => {
    this.setState({ show: true });
    this.setState({ nameOfUser: element.real_name});
  }


  hideModal = () => {
    this.setState({ show: false });

  }

  setCalendar = (elem) => {
    const dateStartString = Date.parse(elem.start_time.replace('PM', '').replace('AM', ''));
    const dateEndString = Date.parse(elem.end_time.replace('PM', '').replace('AM', ''));
    this.setState(() => ({date: [new Date(dateStartString), new Date(dateEndString)]}));
  }

   /*In the componentDidMount lifecycle method we fetch the data using the API '/listUsers' and store the data 
    as users in the state of the component using setState. */
  
    componentDidMount() {
    fetch('/listUsers').then(response => response.json())
      .then(data => this.setState(() => ({ users: data })));
  }

     /*In the componentDidMount lifecycle method we fetch the data using the API '/listUsers' and store the data 
        as users in the state of the component using setState. Now the users object has a property members 
        whose value is an array so we map through it and display button for the modal containing 
        Name of User, Location of user and id of user in the form of card. Now once all usernames with details are displayed with
        modal buttons we want to get which button is clicked with username. So when a modal button is clicked 
        then the user element is passed to showModal function where boolean value of show is set to true and the nameOfUser state is set
        to element.real_name. Once we have the nameOfUser we map through user.members and find that object which
        has real_name equal to the nameOfUser and store that object as activeUser. Now we use the activeUser
        object to display the opened Modal with name of user and we map through activeUser.activity_periods to display
        the start time and end time as buttons. Now when the start time and end time button is clicked the element is
        passed to setCalendar method which parses the start time and end time and converts it into a date range and 
        stores it in state as date. Now this range of date is passed to Calendar component as value and the props of
        Calendar selectRange is set to true. So in the modal when any start time and end time buttons are clicked
        the time range is displayed in the calendar component. The close button of the modal will set the boolean value
        of show to false and the modal will close */

  render() {
    
    const activeUser = this.state.users.members.find(elem => elem.real_name === this.state.nameOfUser);
    return (

      <div className="container-sm pt-3 pb-3 bg-secondary">
        <h4 className="text-center text-white my-3">
          List of Users: click respective button to view Activity Periods</h4>
          <div>{this.state.users.members.map( (element) =>(
                 <div class="card text-center m-3" key={element.id}>
                    <div class="card-body">
                      <h4 class="card-title">User Name: {element.real_name}</h4>
                         <p class="card-text">User Location: {element.tz}</p>
                         <p class="card-text">User Id: {element.id}</p>
                            <button className="btn btn-primary" 
                               value = {element.real_name} onClick={this.showModal.bind(this, element)}>
                                Check Activity Period of: {element.real_name}</button>
                     </div>
                 </div>))}
          </div>
           <div> {activeUser ? <Modal  show={this.state.show}  handleClose={this.hideModal}>
               <div>User: {activeUser.real_name}(Click on the time range to view in Calendar)<hr/> 
                 {activeUser.activity_periods.map(elem =>
                   (<div key={activeUser.activity_periods.indexOf(elem)}>
                     <div className="container" >
                       <button className="btn btn-primary my-1" 
                          onClick={this.setCalendar.bind(this, elem)}>
                            Start Time: {elem.start_time} End Time: {elem.end_time}</button>
                          </div>
                  </div>))}</div>
               {this.state.date ? <div className="container-sm my-1 bg-light">
                 <Calendar value={this.state.date} selectRange={true}/>
                                  </div>  : null}
                         </Modal>: null}        
              </div>
            </div>
                  
           )
        }
                 
      }
      

      export default Users
