import React, { useState } from 'react';
import { MdNotificationsNone, MdNotificationsActive } from 'react-icons/md';
import { ListGroup, ListGroupItem, NavItem, NavLink, Popover, PopoverBody } from 'reactstrap';
import { notificationsData } from 'data/header';
import withBadge from 'hocs/withBadge';
import Notifications from 'components/Widget/Notifications';
import './NotificationsUI.scss'
import { Button } from 'reactstrap';
const MdNotificationsActiveWithBadge = withBadge({
    size: 'md',
    color: 'primary',
    style: {
      top: -10,
      right: -10,
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    children: <small>5</small>,
  })(MdNotificationsActive);


NotificationsUI.propTypes = {};

function NotificationsUI(props) {
    const [isNotificationConfirmed, setIsNotificationConfirmed] = useState(false);
    const [isOpenNotificationPopover, setIsOpenNotificationPopover] = useState(false);

    const toggleNotificationPopover = () => {
        setIsOpenNotificationPopover(!isOpenNotificationPopover);
    
        if (!isNotificationConfirmed) {
          setIsNotificationConfirmed(true);
        }
      };
    return (
        <div>
            <NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
                {isNotificationConfirmed ? (
                <MdNotificationsNone
                    size={25}
                    className="text-secondary can-click"
                    onClick={toggleNotificationPopover}
                />
                ) : (
                <MdNotificationsActiveWithBadge
                    size={25}
                    className="text-secondary can-click animated swing infinite"
                    onClick={toggleNotificationPopover}
                />
                )}
            </NavLink>
            <Popover
                placement="bottom"
                isOpen={isOpenNotificationPopover}
                toggle={toggleNotificationPopover}
                target="Popover1"
            >
                <PopoverBody>
                <Notifications notificationsData={notificationsData} />
                <ListGroup>
                    <ListGroupItem tag="button" action className="border-light">
                         Xem tất cả thông báo
                    </ListGroupItem>
                </ListGroup>
                </PopoverBody>
            </Popover>
            </NavItem>
        </div>
    );
}

export default NotificationsUI;