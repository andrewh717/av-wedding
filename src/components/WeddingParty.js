import React from 'react';

const WeddingParty = () => {
  return (
    <div>
      <div className="row">
        <div id="weddingparty" className="section-container col col-12">
          <h2 className="section-header">Wedding Party</h2>
          <ul className="nav nav-tabs nav-fill" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active tab" data-bs-toggle="tab" data-bs-target="#groomsmen" type="button" role="tab">
                Groomsmen
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link tab" data-bs-toggle="tab" data-bs-target="#bridesmaids" type="button" role="tab">
                Bridesmaids
              </button>
            </li>
          </ul>
          <div id="weddingparty-tab-content" className="tab-content">
            <div id="groomsmen" className="tab-pane fade show active" role="tabpanel">
              <div className="row pt-4">
                <div className="col col-sm-3">
                  <img src="assets/kevin.jpg" alt="Kevin" className="circle"/>
                  <p className="name-label">Kevin Hernandez</p>
                </div>
                <div className="col col-sm-3">
                  <img src="assets/joe.jpg" alt="Joe" className="circle"/>
                  <p className="name-label">Joseph Redling-Pace</p>
                </div>
                <div className="col col-sm-3">
                  <img src="assets/cheng.jpg" alt="Cheng" className="circle"/>
                  <p className="name-label">Chenghao Lin</p>
                </div>
                <div className="col col-sm-3">
                  <img src="assets/justin.jpg" alt="Justin" className="circle"/>
                  <p className="name-label">Justin Rhodes</p>
                </div>
              </div>
            </div>
            <div id="bridesmaids" className="tab-pane fade" role="tabpanel">
              women
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
