const Booking = (props) => {
  alert("the form data is " + sessionStorage.getItem("client"));

  const [scheduleData] = useState(sampleData);

  return (
    <div>
      {/* <Header {...props}/> */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <h2 className="breadcrumb-title">Booking</h2>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Booking
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="booking-doc-info">
                    <Link
                      to="/patient/doctor-profile"
                      className="booking-doc-img"
                    >
                      <img src={IMG01} alt="User" />
                    </Link>
                    <div className="booking-info">
                      <h4>
                        <Link to="/patient/doctor-profile">
                          C.E.O Alfred Mathu
                        </Link>
                      </h4>
                      <div className="rating"></div>
                      <p className="text-muted mb-0">
                        <i className="fas fa-map-marker-alt"></i> Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-6">
                  <h4 className="mb-1">{scheduleData[0].date}</h4>
                  <p className="text-muted">{scheduleData[0].day}</p>
                </div>
              </div>
              <div className="card booking-schedule schedule-widget">
                <div className="schedule-header">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="day-slot">
                        <ul>
                          {scheduleData.map((item, index) => (
                            <li
                              key={index}
                              className={index === 0 ? "active" : ""}
                            >
                              <Link to={`#${item.day}`}>
                                <span>{item.day}</span>
                                <span className="slot-date">
                                  {item.date}{" "}
                                  <small className="slot-year">
                                    {item.year}
                                  </small>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule-cont">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="time-slot">
                        <ul className="clearfix">
                          {scheduleData.map((item, index) => (
                            <li
                              key={index}
                              className={index === 0 ? "active" : ""}
                            >
                              <div id={item.day}>
                                <h4 className="mb-1">{item.date}</h4>
                                <p className="text-muted">{item.day}</p>
                                <ul className="clearfix">
                                  {item.slots.map((slot, slotIndex) => (
                                    <li key={slotIndex}>
                                      <Link className="timing" to="#0">
                                        <span>{slot.startTime}</span>{" "}
                                        <span>{slot.amPm}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div className="submit-section proceed-btn text-end">
                <Link
                  to="/booking-success"
                  className="btn btn-primary submit-btn"
                >
                  Confirm booking{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer {...props} />
    </div>
  );
};

export default Booking;
