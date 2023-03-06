import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import NotifyForm from "./Notifyform";
import {

  selectIsLoading
} from "../../redux/features/product/productSlice";
import {
  createNotificationService

} from "..//notification/NotifyControllerSlice";

const initialState = {
    contact: "",
    Address: " ",
    nearestYard: " ",
    sDate: " ",
    sTime: " ",
    itemDetails: " ",
    collectorYard: " ",
    collectorId: " ",
};

const AddNotify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [notification, setnotification] = useState(initialState);

  const isLoading = useSelector(selectIsLoading);

  const { contact,  Address, nearestYard, sDate, sTime, itemDetails , collectorYard ,  collectorId} = notification;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setnotification({ ...notification, [name]: value });
  };



 

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nearestYard", nearestYard);
    formData.append("sDate", sDate);
    formData.append("sTime", sTime);
    formData.append("itemDetails",itemDetails );
    formData.append("collectorYard", collectorYard);
    formData.append("collectorId",  collectorId);
    formData.append(" contact",   contact);
    formData.append("Address",   Address);

    console.log(...formData);

    await dispatch(createNotificationService(formData));

    navigate("/dashboard");
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt"> Notify Collector</h3>
      <NotifyForm
     notification = {notification}
      handleInputChange={handleInputChange}
    saveProduct = {saveProduct}
      />
    </div>
  );
};

export default AddNotify;
