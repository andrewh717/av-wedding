import React from 'react';
import { groomsmen } from '../data/groomsmen';
import { bridesmaids } from '../data/bridesmaids';

const WeddingParty = () => {
  const TabContent = (props) => {
    return (
      <div className="row pt-4">
        {props.people.map((person) => {
          return (
            <div className="col-12 col-sm-3" key={person.name}>
              <img src={person.image} alt={person.name} className="circle"/>
              <p className="name-label">{person.name}</p>
            </div>
          )
        })}
      </div>
    )
  }

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
              <TabContent people={groomsmen}/>
            </div>
            <div id="bridesmaids" className="tab-pane fade" role="tabpanel">
              <TabContent people={bridesmaids}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
