import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import backgroundImage from '../data/images/menubg.png'; // Import the background image


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-image: url(${backgroundImage}); /* Background image */
    background-size: cover; /* Cover the entire section */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 40px;
  background-color: #FFFFFF45;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid ${props => props.error ? 'red' : '#ccc'};
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  border: 1px solid ${props => props.error ? 'red' : '#ccc'};
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0056b3')};
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: -15px;
  margin-bottom: 15px;
`;

const SuccessMessage = styled.div`
  color: green;
  margin-top: 20px;
`;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (formData.email && !validateEmail(formData.email)) errors.email = 'Invalid email address';
        if (!formData.message) errors.message = 'Message is required';
        return errors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess(false);
        
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            await axios.post('/contact', formData);
            setSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <GlobalStyle />
            <FormContainer>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="name">Name:</Label>
                        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">Email:</Label>
                        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} error={errors.email} required />
                        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="message">Message:</Label>
                        <TextArea id="message" name="message" value={formData.message} onChange={handleChange} error={errors.message} required />
                        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                    </FormGroup>
                    <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</Button>
                    {success && <SuccessMessage>Message sent successfully!</SuccessMessage>}
                </form>
            </FormContainer>
        </>
    );
};

export default Contact;
