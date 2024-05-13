import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#007bff')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post('/contact', formData);
            alert('Message sent successfully');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message');
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormContainer>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="message">Message:</Label>
                    <TextArea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </FormGroup>
                <Button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</Button>
            </form>
        </FormContainer>
    );
};

export default Contact;
