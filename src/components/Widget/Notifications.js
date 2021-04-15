import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import {MdNotifications} from 'react-icons/md';

Notifications.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      message: PropTypes.node,
      date: PropTypes.date,
    })
  ),
};

Notifications.defaultProps = {
  notificationsData: [],
};

function Notifications(props) {

  const {notificationsData} = props;  

  return (
    notificationsData &&
    notificationsData.length &&
    notificationsData.map(({ id, avatar, message, date }) => (
      <ListGroup flush>
        <ListGroupItem key={id }tag="button" action className="border-light">
        <MdNotifications />
        &nbsp;
        {message}
        <br/>
        <small className="text-muted">{date}</small>
        </ListGroupItem>    
      </ListGroup>  
    ))
  );
}

export default Notifications;
