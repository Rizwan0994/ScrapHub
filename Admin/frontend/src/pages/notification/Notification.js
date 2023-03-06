import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "../../components/card/Card";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser1 } from "../../services/authService";
import "./Notification.scss";

const Notification = () => {
   useRedirectLoggedOutUser("/login");
   //const dispatch = useDispatch();

   const [notification, setNotification] = useState(null);
   //const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
     console.log("Getting use the notification of User");
    //setIsLoading(true);
    async function getUserNotificationData() {
      const data = await getUser1();
       console.log(data);

       setNotification(data);
       //setIsLoading(false);
        // await dispatch(SET_USER(data));
        // await dispatch(SET_NAME(data.name));
     }
     getUserNotificationData();
   }, []);

  return (
    <div className="notification --my2">
      {/* {isLoading && <SpinnerImg />} */}
      <>
        <p>Notification for PickupSchedule</p>

        {notification&&notification.map((n,i)=>
        < Card key={i} cardClass={"card --flex-dir-column"}>
          
        <span className="notification-data">
          <p>
            <b>NearestYard : </b> {n?.nearestYard} 
          </p>
          <p>
            <b>SetDate : </b> {n?.sDate
}
          </p>
          <p>
            <b>SetTime : </b> {n?.sTime
}
          </p>
          <p>
            <b>ItemDetails : </b> {n?.itemDetails}
          </p>
          <p>
            <b>UserId : </b> {n?.userId}
          </p>
          </span>
      </Card>)}
          
        
      </>
    </div>
  );
};
export default Notification;
