// import React from 'react';
// import PropTypes from 'prop-types';
// import { NOTIFICATION_SYSTEM_STYLE } from 'utils/constants';
// import NotificationSystem from 'react-notification-system';

// NotificationSystemCustom.propTypes = {
    
// };
// componentDidMount() {
//   this.checkBreakpoint(this.props.breakpoint);

//   setTimeout(() => {
//     if (!this.notificationSystem) {
//       return;
//     }

//     this.notificationSystem.addNotification({
//       title: <MdImportantDevices />,
//       message: 'Welome to Reduction Admin!',
//       level: 'info',
//     });
//   }, 1500);

//   setTimeout(() => {
//     if (!this.notificationSystem) {
//       return;
//     }

//     this.notificationSystem.addNotification({
//       title: <MdLoyalty />,
//       message:
//         'Reduction is carefully designed template powered by React and Bootstrap4!',
//       level: 'info',
//     });
//   }, 2500);
// }

// function NotificationSystemCustom(props) {
//     return (
//         <NotificationSystem
//         dismissible={false}
//         ref={notificationSystem =>
//           (this.notificationSystem = notificationSystem)
//         }
//         style={NOTIFICATION_SYSTEM_STYLE}
//       />
//     );
// }

// export default NotificationSystemCustom;