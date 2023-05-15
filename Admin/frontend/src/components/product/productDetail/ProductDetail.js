import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProduct } from "../../../redux/features/product/productSlice";
import Card from "../../card/Card";
import { SpinnerImg } from "../../loader/Loader";
import "./ProductDetail.scss";
import DOMPurify from "dompurify";
import jsPDF from 'jspdf';


const ProductDetail = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const { id } = useParams();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  const stockStatus = (quantity) => {
    if (quantity > 0) {
      return <span className="--color-success">In Stock</span>;
    }
    return <span className="--color-danger">Out Of Stock</span>;
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const handleDownload = () => {
    // Create a new PDF document
    const doc = new jsPDF();
    
    const title = 'SCRAPHUB: PRODUCT DETAIL REPORT';
    const xPos = 10; // X position of the text
    const yPos = 20; // Y position of the text
    const maxWidth = doc.internal.pageSize.width - xPos * 2; // Maximum width of the text
      
    doc.text(title, xPos, yPos, { maxWidth });
    
    // Set the logo
    const logoUrl = 'https://i.postimg.cc/NGJykchj/shopee-logo-31405.png';
    doc.addImage(logoUrl, 'PNG', 150, 25, 25, 25);
    
    // Set the margin manually using setFontSize method
    doc.setFontSize(12);
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 35;
    const x = margin;
    let y = 70;
    
    // Add content to the document
    doc.text(`Product Name: ${product.name}`, x, y);
    y += 10;
    doc.text(`SKU: ${product.sku}`, x, y);
    y += 10;
    doc.text(`Category: ${product.category}`, x, y);
    y += 10;
    doc.text(`Price: ${product.price}`, x, y);
    y += 10;
    doc.text(`Quantity in stock: ${product.quantity}`, x, y);
    y += 10;
    doc.text(`Total Value in stock : ${product.price * product.quantity}`, x, y);
    
    // Add signature and date
    const adminSignature = "scraphubadmin";
    const currentDate = new Date().toLocaleDateString();
    y = pageHeight - margin;
    doc.text(`Signature: ${adminSignature}`, x, y - 5);
    doc.text(`Date: ${currentDate}`, pageWidth - margin - 50, y - 5);
    
    // Download the PDF document
    doc.save('product_detail_report.pdf');
  };
  
  return (
    <div className="product-detail">
      <h3 className="--mt">Product Detail</h3>
      <Card cardClass="card">
        {isLoading && <SpinnerImg />}
        {product && (
          <div className="detail">
            <Card cardClass="group">
              {product?.image ? (
                <img
                  src={product.image.filePath}
                  alt={product.image.fileName}
                />
              ) : (
                <p>No image set for this product</p>
              )}
            </Card>
            <h4>Product Availability: {stockStatus(product.quantity)}</h4>
            <hr />
            <h4>
              <span className="badge">Name: </span> &nbsp; {product.name}
            </h4>
            <p>
              <b>&rarr; SKU : </b> {product.sku}
            </p>
            <p>
              <b>&rarr; Category : </b> {product.category}
            </p>
            <p>
              <b>&rarr; Price : </b> {"$"}
              {product.price}
            </p>
            <p>
              <b>&rarr; Quantity in stock : </b> {product.quantity}
            </p>
            <p>
              <b>&rarr; Total Value in stock : </b> {"$"}
              {product.price * product.quantity}
            </p>
            <hr />
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description),
              }}
            ></div>
            <hr />
            <code className="--color-dark">
              Created on: {product.createdAt.toLocaleString("en-US")}
            </code>
            <br />
            <code className="--color-dark">
              Last Updated: {product.updatedAt.toLocaleString("en-US")}
            </code>
        
            <button onClick={handleDownload}>Download Report</button>

         
          </div>
         )}
      </Card>
    </div>
  );
};

export default ProductDetail;
