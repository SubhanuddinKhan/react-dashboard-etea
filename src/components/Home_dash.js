import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
     // Add hover class in selected list item
    
     

 
    
     function toggle_c() {
            // Add hover class in selected list item
      let list = document.querySelectorAll('.navigation_b li');
      function activeLink(){
          list.forEach((item)=>
          item.classList.remove('hovered'));
          this.classList.add('hovered');
      }
      list.forEach((item)=>
      item.addEventListener('mouseover',activeLink));
  
  
      // Menu Toggle
      let toggle = document.querySelector('.toggle');
      let navigation_b = document.querySelector('.navigation_b');
      let main = document.querySelector('.main');

        navigation_b.classList.toggle('active');
        main.classList.toggle('active');

    }
 
  return (
    <>
<div className="container_b">
  <div className="navigation_b">
    <ul>
      <li>
        <Link to="/">
          <span className="icon"><ion-icon name="logo-apple" /></span>
          <span className="title">Dashboard</span>
        </Link>
      </li>
      <li>
        <a href>
          <span className="icon"><ion-icon name="home-outline" /></span>
          <span className="title">Home</span>
        </a>
      </li>
      <li >
      <Link to="/register">
          <span className="icon"><ion-icon name="person-circle-outline" /></span>
          <span className="title">Profile</span>
          </Link>
      </li>
      <li>
        <a href>
          <span className="icon"><ion-icon name="school-outline" /></span>
          <span className="title">Education</span>
        </a>
      </li>
      <li>
        <a href>
          <span className="icon"><ion-icon name="briefcase-outline" /></span>
          <span className="title">Work Experience</span>
        </a>
      </li>
      <li>
        <a href>
          <span className="icon"><ion-icon name="newspaper-outline" /></span>
          <span className="title">Posts</span>
        </a>
      </li>
      <li>
        <a href>
          <span className="icon"><ion-icon name="log-out-outline" /></span>
          <span className="title">Signout</span>
        </a>
      </li>
    </ul>
  </div>
  {/* Main */}
  <div className="main">
    <div className="topbar">
      <div className="toggle" onClick={toggle_c}>
        <ion-icon name="menu-outline" />
      </div>
      {/* Search */}
      <div className="search">
        <label htmlFor="search">
          <input type="text" name="search" placeholder="Search here" />
          <ion-icon name="search-outline" />
        </label>
      </div>
      {/* userimage */}
      <div className="user">
        <img src="./assets/images/image.jpg" />
      </div>
    </div>
    {/* card_b Box */}
    <div className="card_bBox">
      <div className="card_b">
        <div>
          <div className="numbers">1,376</div>
          <div className="card_bName">Daily Views</div>
        </div>
        <div className="iconBox">
          <ion-icon name="eye-outline" />
        </div>
      </div>
      <div className="card_b">
        <div>
          <div className="numbers">77</div>
          <div className="card_bName">Sales</div>
        </div>
        <div className="iconBox">
          <ion-icon name="document-text-outline" />
        </div>
      </div>
      <div className="card_b">
        <div>
          <div className="numbers">76</div>
          <div className="card_bName">Users</div>
        </div>
        <div className="iconBox">
          <ion-icon name="document-text-outline" />
        </div>
      </div>
      <div className="card_b">
        <div>
          <div className="numbers">33</div>
          <div className="card_bName">Forms</div>
        </div>
        <div className="iconBox">
          <ion-icon name="book-outline" />
        </div>
      </div>
    </div>
    {/* Orders Detail List  */}
    <div className="details">
      <div className="recentOrders">
        <div className="card_bHeader">
          <h2>Recent Orders</h2>
          <a href="#" className="btn">View All</a>
        </div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Payments</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Laptop</td>
              <td>$1800</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Speakers</td>
              <td>$620</td>
              <td>Paid</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>Watch</td>
              <td>$200</td>
              <td>Due</td>
              <td><span className="status return">Return</span></td>
            </tr>
            <tr>
              <td>Laptop</td>
              <td>$900</td>
              <td>Paid</td>
              <td><span className="status inprogress">In Progress</span></td>
            </tr>
            <tr>
              <td>Laptop</td>
              <td>$1800</td>
              <td>Paid</td>
              <td><span className="status delivered">Delivered</span></td>
            </tr>
            <tr>
              <td>Speakers</td>
              <td>$620</td>
              <td>Paid</td>
              <td><span className="status pending">Pending</span></td>
            </tr>
            <tr>
              <td>Watch</td>
              <td>$200</td>
              <td>Due</td>
              <td><span className="status return">Return</span></td>
            </tr>
            <tr>
              <td>Laptop</td>
              <td>$900</td>
              <td>Paid</td>
              <td><span className="status inprogress">In Progress</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* New Customers  */}
      <div className="recentCustomers">
        <div className="card_bHeader">
          <h2>Recent Customers</h2>
        </div>
        <table>
          <tbody><tr>
              <td width="60px"><div className="imgBox">
                  <img src="./assets/images/image.jpg" />
                </div></td>
              <td><h4>Subhan <br /> <span>Italy</span></h4></td>
            </tr>
            <tr>
              <td width="60px"><div className="imgBox">
                  <img src="./assets/images/image.jpg" />
                </div></td>
              <td><h4>Subhan <br /> <span>Italy</span></h4></td>
            </tr>
            <tr>
              <td width="60px"><div className="imgBox">
                  <img src="./assets/images/image.jpg" />
                </div></td>
              <td><h4>Subhan <br /> <span>Italy</span></h4></td>
            </tr>
            <tr>
              <td width="60px"><div className="imgBox">
                  <img src="./assets/images/image.jpg" />
                </div></td>
              <td><h4>Subhan <br /> <span>Italy</span></h4></td>
            </tr>
            <tr>
              <td width="60px"><div className="imgBox">
                  <img src="./assets/images/image.jpg" />
                </div></td>
              <td><h4>Subhan <br /> <span>Italy</span></h4></td>
            </tr>
            <tr>
              <td width="60px"><div className="imgBox">
                  <img src="./assets/images/image.jpg" />
                </div></td>
              <td><h4>Subhan <br /> <span>Italy</span></h4></td>
            </tr>
          </tbody></table>  
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Home