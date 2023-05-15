import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import './css/feedbackform.css';
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !feedback || !rating) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    if (!name.trim()) {
      setErrorMessage('Please enter your name');
      return;
    }
  
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }
  
    if (!feedback.trim()) {
      setErrorMessage('Please enter your feedback');
      return;
    }
  
    if (rating === 0) {
      setErrorMessage('Please select a rating');
      return;
    }
    try {
      await axios.post('https://apitestregs.onrender.com/feedback', {
        name,
        email,
        feedback,
        rating,
      });
      setName('');
      setEmail('');
      setFeedback('');
      setRating(0);
      setErrorMessage('');
      alert('Feedback submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Error submitting feedback');
    }
  };

  const handleRatingClick = (value) => {
    setRating(value);
  };

  return (
    <Form onSubmit={handleSubmit} className="feedback-form">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicFeedback">
        <Form.Label>Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicRating">
        <Form.Label>Rating</Form.Label>
        <br />
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar
              key={ratingValue}
              size={24}
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              style={{ marginRight: '10px', cursor: 'pointer' }}
              onClick={() => handleRatingClick(ratingValue)}
            />
          );
        })}
      </Form.Group>

      {errorMessage && <div className="text-danger">{errorMessage}</div>}

      <Button variant="primary" type="submit">
        Submit Feedback
      </Button>
    </Form>
  );
};

export default FeedbackForm;
