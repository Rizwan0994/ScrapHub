import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import ProductForm from "../../components/product/productForm/ProductForm";
import {
  createProduct,
  selectIsLoading,
} from "../../redux/features/product/productSlice";

const initialState = {
  name: "",
  category: "",
  quantity: "",
  price: "",
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState(initialState);
  const [productImage, setProductImage] = useState("");
   const [imagePreview, setImagePreview] = useState(null);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({}); // Track form validation errors

  const isLoading = useSelector(selectIsLoading);

  const { name, category, price, quantity } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const generateKSKU = (category) => {
    const letter = category.slice(0, 3).toUpperCase();
    const number = Date.now();
    const sku = letter + "-" + number;
    return sku;
  };

  const validateForm = () => {
    let errors = false;
  
    const nameRegex = /^[a-zA-Z0-9\s]+$/; // Regular expression to allow only alphanumeric characters and spaces
    if (!name) {
      alert("Name is required");
      errors = true;
    } else if (!nameRegex.test(name)) {
      alert("Name can only contain letters, numbers, and spaces");
      errors = true;
    }
  
    if (!category) {
      alert("Category is required");
      errors = true;
    }
  
    if (!quantity) {
      alert("Quantity is required");
      errors = true;
    } else if (isNaN(quantity) || quantity <= 0) {
      alert("Quantity must be a positive number");
      errors = true;
    }
  
    const priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/; // Regular expression to allow only positive numbers with up to 2 decimal places
    if (!price) {
      alert("Price is required");
      errors = true;
    } else if (!priceRegex.test(price)) {
      alert("Price must be a positive number");
      errors = true;
    }
  
    return !errors; // Returns true if there are no errors
  };
  

  const saveProduct = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("sku", generateKSKU(category));
      formData.append("category", category);
      formData.append("quantity", Number(quantity));
      formData.append("price", price);
      formData.append("description", description);
      formData.append("image",productImage);

      await dispatch(createProduct(formData));

      navigate("/dashboard");
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <h3 className="--mt">Add New Product</h3>
      <ProductForm
        product={product}
        productImage={productImage}
         imagePreview={imagePreview}
        description={description}
        errors={errors} // Pass the errors to the ProductForm component
        setDescription={setDescription}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        saveProduct={saveProduct}
      />
    </div>
  );
};

export default AddProduct;
