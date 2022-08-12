import React from 'react'

function Home() {
  return (
    <>

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
      
    </>
  )
}

export default Home