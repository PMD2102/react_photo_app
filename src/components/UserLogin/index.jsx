import { UserCard } from 'components/Card';
import firebase from 'firebase';
import React, { useState } from 'react';
import {
    MdExitToApp,
    MdPeople,
    MdInsertChart,
    MdMessage, MdPersonPin,
    MdSettingsApplications
} from 'react-icons/md';
import { ListGroup, ListGroupItem, NavLink, Popover, PopoverBody } from 'reactstrap';
import Avatar from '../Widget/Avatar';
import userImage from '../../assets/images/colorful-bg.jpg'

UserLogin.propTypes = { 
};

function UserLogin(props) {
    const [ isOpenUserCardPopover, setIsOpenUserCardPopover ] = useState(false);

    function toggleUserCardPopover() {
        setIsOpenUserCardPopover(!isOpenUserCardPopover);
      };

    return (
     <div>
        <NavLink id="Popover">
            <Avatar
            src={!firebase.auth().currentUser ? userImage :firebase.auth().currentUser.photoURL}
            onClick={toggleUserCardPopover}
            className="can-click"
            />
        </NavLink>
        <Popover
            placement="bottom-end"
            isOpen={isOpenUserCardPopover}
            toggle={toggleUserCardPopover}
            target="Popover"
            className="p-0 border-0"
            style={{ minWidth: 250 }}
        >
        <PopoverBody className="p-0 border-light">
          <UserCard
            avatar={!firebase.auth().currentUser ? '' :firebase.auth().currentUser.photoURL}
            title={ !firebase.auth().currentUser ? '' :firebase.auth().currentUser.displayName}
            subtitle={!firebase.auth().currentUser ? '' :firebase.auth().currentUser.email}
            className="border-light"
          >
            <ListGroup flush>
              <ListGroupItem tag="button" action className="border-light">
                <MdPersonPin /> Thông tin cá nhân
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdInsertChart /> Bài viết
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdMessage /> Bài viết chờ duyệt
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdSettingsApplications /> Bài viết đã lưu
              </ListGroupItem>
              <ListGroupItem tag="button" action className="border-light">
                <MdPeople /> Cộng đồng đã tham gia
              </ListGroupItem>
              <ListGroupItem 
                tag="button" 
                action 
                className="border-light"
                onClick={() => firebase.auth().signOut()}
              >
                <MdExitToApp /> Đăng xuất    
              </ListGroupItem>
            </ListGroup>
          </UserCard>
        </PopoverBody>
      </Popover>
      </div>
    );
}
export default UserLogin;