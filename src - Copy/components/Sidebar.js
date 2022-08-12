import React from 'react'

function Sidebar() {
  return (
    <div>
      {/*sidebar wrapper */}
      <div className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div>
          <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 className="logo-text">React Dahboard</h4>
        </div>
        <div className="toggle-icon ms-auto"><i className="bx bx-arrow-to-left" />
        </div>
      </div>
      {/*navigation*/}
      <ul className="metismenu" id="menu">
        <li>
          <a href="#">
            <div className="parent-icon"><i className="bx bx-home-circle" />
            </div>
            <div className="menu-title">Dashboard</div>
          </a>
          
        </li>
        <li>
          <a href="#">
            <div className="parent-icon"><i className="bx bx-user" />
            </div>
            <div className="menu-title">View All Users</div>
          </a>
         
        </li>
       
        <li>
          <a href="widgets.html">
            <div className="parent-icon"><i className="bx bx-user-circle" />
            </div>
            <div className="menu-title">Profile</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div className="parent-icon"><i className="bx bx-log-out" />
            </div>
            <div className="menu-title">Logout</div>
          </a>
          
  </li>
      </ul>
      
      {/*end navigation*/}
    </div>
    {/*end sidebar wrapper */}
    {/*start header */}
    <header>
      <div className="topbar d-flex align-items-center">
        <nav className="navbar navbar-expand">
          <div className="mobile-toggle-menu"><i className="bx bx-menu" />
          </div>
    
          <div className="search-bar flex-grow-1">
            <div className="position-relative search-bar-box">
              <input type="text" className="form-control search-control" placeholder="Type to search..." /> <span className="position-absolute top-50 search-show translate-middle-y"><i className="bx bx-search" /></span>
              <span className="position-absolute top-50 search-close translate-middle-y"><i className="bx bx-x" /></span>
            </div>
          </div>
          <div className="top-menu ms-auto">
            <ul className="navbar-nav align-items-center">
             
              <li className="nav-item dropdown dropdown-large">
                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">	<i className="bx bx-category" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <div className="row row-cols-3 g-3 p-3">
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-cosmic text-white"><i className="bx bx-group" />
                      </div>
                      <div className="app-title">Teams</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-burning text-white"><i className="bx bx-atom" />
                      </div>
                      <div className="app-title">Projects</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-lush text-white"><i className="bx bx-shield" />
                      </div>
                      <div className="app-title">Tasks</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-kyoto text-dark"><i className="bx bx-notification" />
                      </div>
                      <div className="app-title">Feeds</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-blues text-dark"><i className="bx bx-file" />
                      </div>
                      <div className="app-title">Files</div>
                    </div>
                    <div className="col text-center">
                      <div className="app-box mx-auto bg-gradient-moonlit text-white"><i className="bx bx-filter-alt" />
                      </div>
                      <div className="app-title">Alerts</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown dropdown-large">
                <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> <span className="alert-count">7</span>
                  <i className="bx bx-bell" />
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a href="javascript:;">
                    <div className="msg-header">
                      <p className="msg-header-title">Notifications</p>
                      <p className="msg-header-clear ms-auto">Marks all as read</p>
                    </div>
                  </a>
                  <div className="header-notifications-list">
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-primary text-primary"><i className="bx bx-group" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">New Customers<span className="msg-time float-end">14 Sec
                              ago</span></h6>
                          <p className="msg-info">5 new user registered</p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-danger text-danger"><i className="bx bx-cart-alt" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">New Orders <span className="msg-time float-end">2 min
                              ago</span></h6>
                          <p className="msg-info">You have recived new orders</p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-success text-success"><i className="bx bx-file" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">24 PDF File<span className="msg-time float-end">19 min
                              ago</span></h6>
                          <p className="msg-info">The pdf files generated</p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="javascript:;">
                      <div className="d-flex align-items-center">
                        <div className="notify bg-light-warning text-warning"><i className="bx bx-send" />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="msg-name">Time Response <span className="msg-time float-end">28 min
                              ago</span></h6>
                          <p className="msg-info">5.1 min avarage time response</p>
                        </div>
                      </div>
                    </a>
                 
                  </div>
                  <a href="javascript:;">
                    <div className="text-center msg-footer">View All Notifications</div>
                  </a>
                </div>
              </li>
         
            </ul>
          </div>
          <div className="user-box dropdown">
            <a className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://via.placeholder.com/110x110" className="user-img" alt="user avatar" />
              <div className="user-info ps-3">
                <p className="user-name mb-0">Pauline Seitz</p>
                <p className="designattion mb-0">Web Designer</p>
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-user" /><span>Profile</span></a>
              </li>
             
              <li>
                <div className="dropdown-divider mb-0" />
              </li>
              <li><a className="dropdown-item" href="javascript:;"><i className="bx bx-log-out-circle" /><span>Logout</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    {/*end header */}
    </div>
  )
}

export default Sidebar