import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import SwipeableViews from 'react-swipeable-views';
import { groomsmen } from '../data/groomsmen';
import { bridesmaids } from '../data/bridesmaids';
import Typography from '@mui/material/Typography';

const WeddingParty = () => {
  const TabContent = (props) => {
    return (
      <div className="row pt-4">
        {props.people.map((person) => {
          return (
            <div className="col-12 col-sm-3" key={person.name}>
              <img src={person.image} alt={person.name} className="circle" />
              <p className="name-label">{person.name}</p>
            </div>
          );
        })}
      </div>
    );
  };
  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    dir: PropTypes.any,
  };
  const theme = useTheme();
  const [currTab, setCurrTab] = React.useState(0);
  const handleChange = (event, value) => {
    setCurrTab(value);
  };
  const handleChangeIndex = (index) => {
    setCurrTab(index);
  };
  const a11yProps = (index) => {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  };
  return (
    <div className="row">
      <div id="weddingparty" className="section-container col col-12">
        <h2 className="section-header">Wedding Party</h2>
        <Tabs
          value={currTab}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="Bridesmaids/Groomsmen tabs"
        >
          <Tab label="Bridesmaids" {...a11yProps(0)} />
          <Tab label="Groomsmen" {...a11yProps(1)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={currTab}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={currTab} index={0} dir={theme.direction}>
            <TabContent people={bridesmaids}></TabContent>
          </TabPanel>
          <TabPanel value={currTab} index={1} dir={theme.direction}>
            <TabContent people={groomsmen}></TabContent>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
};

export default WeddingParty;
