// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import Card from "../../components/card/Card";
// import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
// import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
// import { getUser1 } from "../../services/authService";
// import styles from "./Notification.module.css";
// // import "./Notification.scss";

// const Notification = () => {
//   useRedirectLoggedOutUser("/login");
//   const dispatch = useDispatch();

//   const [notification, setNotification] = useState(null);
//   const [formData, setFormData] = useState(null);
//   const [showToggle, setShowToggle] = useState(false);

//   useEffect(() => {
//     async function getUserNotificationData() {
//       const data = await getUser1();
//       setNotification(data);
//       await dispatch(SET_USER(data));
//       await dispatch(SET_NAME(data.name));
//     }
//     getUserNotificationData();
//   }, []);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/notifycollectors", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       console.log(response);
//       //Reset form state
//       setFormData(null);
//       setShowToggle(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className={styles.notification}>
//         <p>Notification for PickupSchedule</p>
//         {notification &&
//           notification.map((n, i) => (
//             <Card key={i} cardClass={"card --flex-dir-column"}>
//               <span className="notification-data">
//                 <p>
//                   <b>NearestYard : </b> {n?.nearestYard}
//                 </p>
//                 <p>
//                   <b>SetDate : </b> {n?.sDate}
//                 </p>
//                 <p>
//                   <b>SetTime : </b> {n?.sTime}
//                 </p>
//                 <p>
//                   <b>ItemDetails : </b> {n?.itemDetails}
//                 </p>
//                 <p>
//                   <b>UserId : </b> {n?.userId}
//                 </p>
//               </span>
//               <button onClick={() => setShowToggle(true)}>Notify</button>
//               {showToggle && (
//                 <form onSubmit={handleFormSubmit}>
//                   <label htmlFor="collectorId">Collector ID:</label>
//                   <input
//                     type="text"
//                     id="collectorId"
//                     name="collectorId"
//                     onChange={(e) =>
//                       setFormData({ ...formData, collectorId: e.target.value })
//                     }
//                     required
//                   />
//                   <label htmlFor="collectorYard">Collector Yard:</label>
//                   <input
//                     type="text"
//                     id="collectorYard"
//                     name="collectorYard"
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         collectorYard: e.target.value,
//                       })
//                     }
//                     required
//                   />
//                   <label htmlFor="contact">Contact:</label>
//                   <input
//                     type="text"
//                     id="contact"
//                     name="contact"
//                     onChange={(e) =>
//                       setFormData({ ...formData, contact: e.target.value })
//                     }
//                     required
//                   />
//                   <label htmlFor="address">Address:</label>
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     onChange={(e) =>
//                       setFormData({ ...formData, address: e.target.value })
//                     }
//                     required
//                   />
//                   <label htmlFor="nearestYard">Nearest Yard:</label>
//                   <input
//                     type="text"
//                     id="nearestYard"
//                     name="nearestYard"
//                     value={n?.nearestYard}
//                     readOnly
//                   />
//                   <label htmlFor="sDate">Set Date:</label>
//                   <input
//                     type="date"
//                     id="sDate"
//                     name="sDate"
//                     value={n?.sDate}
//                     readOnly
//                   />
//                   <label htmlFor="sTime">Set Time:</label>
//                   <input
//                     type="time"
//                     id="sTime"
//                     name="sTime"
//                     value={n?.sTime}
//                     readOnly
//                   />
//                   <label htmlFor="itemDetails ">Item Details:</label>
// <input
// type="text"
// id="itemDetails"
// name="itemDetails"
// value={n?.itemDetails}
// readOnly
// />
// <label htmlFor="userId">User ID:</label>
// <input
// type="text"
// id="userId"
// name="userId"
// value={n?.userId}
// readOnly
// />
// <button type="submit">Send</button>
// </form>
// )}
// </Card>
// ))}
// </div>
// </>
// );
// };

// export default Notification;


import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser1 } from "../../services/authService";
import styles from "./Notification.module.css";

const Notification = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState(null);
  const [showToggle, setShowToggle] = useState(false);
  const [sentUserIds, setSentUserIds] = useState([]);

  useEffect(() => {
    async function getUserNotificationData() {
      const data = await getUser1();
      setNotification(data);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.name));
    }
    getUserNotificationData();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/notifycollectors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(response);
      //Reset form state
      setFormData(null);
      setShowToggle(false);
      //Add the sent user ID to the list
      setSentUserIds([...sentUserIds, formData.userId]);
      //Show success message
      alert(`Notification sent successfully for User ID ${formData.userId}`);
    } catch (error) {
      alert("Error sending Notification");
      console.error(error);

    }
  };

  return (
    <>
      <div className={styles.notification}>
        <p>Send Notification for PickupSchedule</p>
        {notification &&
          notification
            .filter((n) => !sentUserIds.includes(n?.userId))
            .map((n, i) => (
              <Card key={i} cardClass={"card --flex-dir-column"}>
                <span className="notification-data">
                  <p>
                    <b>NearestYard : </b> {n?.nearestYard}
                  </p>
                  <p>
                    <b>SetDate : </b> {n?.sDate}
                  </p>
                  <p>
                    <b>SetTime : </b> {n?.sTime}
                  </p>
                  <p>
                    <b>ItemDetails : </b> {n?.itemDetails}
                  </p>
                  <p>
                    <b>UserId : </b> {n?.userId}
                  </p>
                </span>
                <button
                  className="notification-button"
                  onClick={() => setShowToggle(!showToggle)}
                >
                  Notify
                </button>
                {showToggle && (
                  <form onSubmit={handleFormSubmit}>
                    <label htmlFor="collectorId">Collector ID:</label>
                    <input
                      type="text"
                      id="collectorId"
                      name="collectorId"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          collectorId: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor="collectorYard">Collector Yard:</label>
                    <input
                      type="text"
                      id="collectorYard"
                      name="collectorYard"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          collectorYard: e.target.value,
                        })
                      }
                      required
                    />
                    <label htmlFor="contact">Contact:</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      onChange={(e) =>
                        setFormData({ ...formData, contact: e.target.value })
                      }
                      required
                    />
                    <label htmlFor="address">Address:</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                    />
                    <label htmlFor="nearestYard">Nearest Yard:</label>
                    <input
                      type="text"
                      id="nearestYard"
                      name="nearestYard"
                      value={n?.nearestYard}
                      readOnly
                    />
                    <label htmlFor="sDate">Set Date:</label>
                    {/* Added validation for sDate */}
                    <input
                      type="date"
                      id="sDate"
                      name="sDate"
                      value={
                        n?.sDate &&
                        !isNaN(Date.parse(n.sDate)) &&
                        new Date(n.sDate).toISOString().substr(0, 10)
                      }
                      readOnly
                    />
                    <label htmlFor="sTime">Set Time:</label>
                    {/* Added validation for sTime */}


                    <input
                      type="time"
                      id="sTime"
                      name="sTime"
                      value={
                        n?.sTime &&
                        !isNaN(Date.parse(`1970-01-01T${n.sTime}:00`)) &&
                        n.sTime
                      }
                      readOnly
                    />
                    <label htmlFor="itemDetails ">Item Details:</label>
                    <input
                      type="text"
                      id="itemDetails"
                      name="itemDetails"
                      value={n?.itemDetails}
                      readOnly
                    />
                    <label htmlFor="userId">User ID:</label>
                    <input
                      type="text"
                      id="userId"
                      name="userId"
                      value={String(n?.userId)}
                      readOnly
                    />
                  <button style={{ display: 'block', width: '100%', maxWidth: '300px', margin: '0 auto', padding: '10px 20px', fontSize: '1.2em', textAlign: 'center', color: '#fff', backgroundColor: '#0c1011', border: 'none', borderRadius: '4px', transition: 'background-color 0.3s ease' }} type="submit" onMouseOver={(e) => e.target.style.backgroundColor = '#3E8E41'} 
                  onMouseOut={(e) => e.target.style.backgroundColor = '#0c1011'}>
  Send
</button>


                  </form>
                )}
              </Card>
            ))}
      </div>
    </>
  );
};

export default Notification;