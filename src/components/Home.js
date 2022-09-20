import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [resultApplied, setResultApplied] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAppliedData();
  }, []);

  // Get Post Applied Data
  const getAppliedData = async () => {
    try {
      const resultApplied = await axios.get(
        `http://localhost:8000/posts_applied`
      );
      console.log(resultApplied.data);
      setResultApplied(resultApplied.data);

      // console.log("get users loaded");
    } catch (error) {
      console.log("something is wrong from get users");
    }
  };

  return (
    <>
      {/* card_b Box */}
      <div className="card_bBox">
        <div className="card_b">
          <div>
            <div className="numbers">
             
              {resultApplied?.reverse().map((result_show, i) => {
                return (
                  <tr key={i}>{i < 1 ? <td>{result_show.id}</td> : ""}</tr>
                );
              })}
            </div>
            <div className="card_bName">Posts Applied</div>
          </div>
          <div className="iconBox">
            <ion-icon name="bookmarks-outline" />

          </div>
        </div>
        <div className="card_b">
          <div>
            <div className="numbers">
            {resultApplied?.map((result_show, i) => {
                return (
                  <tr key={i}>{i < 1 ? <td>{result_show.id}</td> : ""}</tr>
                );
              })}
            </div>
            <div className="card_bName">Paid Fee</div>
          </div>
          <div className="iconBox">
          <ion-icon name="cash-outline"></ion-icon>
          </div>
        </div>
        <div className="card_b">
          <div>
            <div className="numbers">1</div>
            <div className="card_bName">Unpaid Fee</div>
          </div>
          <div className="iconBox">
            <ion-icon name="wallet-outline"></ion-icon>
          </div>
        </div>
        <div className="card_b">
          <div>
            <div className="numbers">1</div>
            <div className="card_bName">Test Roll No</div>
          </div>
          <div className="iconBox">
          <ion-icon name="document-text-outline"></ion-icon>
          </div>
        </div>
      </div>
      {/* Orders Detail List  */}
      <div className="details">
        <div className="recentOrders">
          <div className="card_bHeaderh">
            <h2>Recent Posts</h2>
            <a href="#" id="btn__viewAll" className="btn">
              View All
            </a>
          </div>
          <table>
            <thead>
              <tr>
                <td>S.No</td>
                <td>Name</td>
                <td>Post</td>
                <td>Payments</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Health Department</td>
                <td>Assistant Programmer</td>
                <td>
                  <span className="status return">Not Paid</span>
                </td>
                <td>
                  <span
                    id="input-group-Htable-return"
                    className="input-group-text"
                  >
                    Expired
                  </span>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Development Authority (USDA)</td>
                <td>Assistant Programmer</td>
                <td>
                  <span className="status inprogress">Pending</span>
                </td>
                <td>
                  <span
                    id="input-group-Htable-inprogress"
                    className="input-group-text"
                  >
                    Roll No Slip
                  </span>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Divisional Forest Officer</td>
                <td>Assistant Programmer</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <span
                    id="input-group-Htable-pending"
                    className="input-group-text"
                  >
                    Applied
                  </span>
                </td>
              </tr>

              {resultApplied?.map((result_show, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 4}</td>
                    <td>Swat Board Jobs</td>
                    <td>{result_show.name}</td>
                    <td>
                      <span className="status delivered">Paid </span>
                    </td>
                    <td>
                      <span
                        id="input-group-Htable-paid"
                        className="input-group-text"
                      >
                        Applied
                      </span>
                    </td>
                  </tr>
                );
              })}

              {/*
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
            </tr> */}
            </tbody>
          </table>
        </div>
        {/* New Customers  */}
        <div className="recentCustomers">
          <div className="card_bHeader">
            <h2>Jobs Providers </h2>
          </div>
          <table>
            <tbody>
              <tr>
                <td width="60px">
                  <div className="imgBox">
                    <img src="./assets/images/image.jpg" />
                  </div>
                </td>
                <td>
                  <h4>
                    Health Department <br /> <span>Swat</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBox">
                    <img src="./assets/images/image.jpg" />
                  </div>
                </td>
                <td>
                  <h4>
                  Development Authority (USDA) <br /> <span>Peshawar</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBox">
                    <img src="./assets/images/image.jpg" />
                  </div>
                </td>
                <td>
                  <h4>
                Divisional Forest Officer <br /> <span>Karachi</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBox">
                    <img src="./assets/images/image.jpg" />
                  </div>
                </td>
                <td>
                  <h4>
                    Swat Board Jobs <br /> <span>Swat</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBox">
                    <img src="./assets/images/image.jpg" />
                  </div>
                </td>
                <td>
                  <h4>
                    KPITB Jobs <br /> <span>Lahore</span>
                  </h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div className="imgBox">
                    <img src="./assets/images/image.jpg" />
                  </div>
                </td>
                <td>
                  <h4>
                    ESET Jobs <br /> <span>Punjab</span>
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
