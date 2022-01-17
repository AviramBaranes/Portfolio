import React, { FC, useState } from 'react';

interface Contact {}

const Contact: FC<Contact> = () => {
  const [error, setError] = useState('');
  const [fields, setFields] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const { email, subject, message } = fields;

  function formChangeHandler(e: React.ChangeEvent<HTMLFormElement>) {
    const { name, value } = e.target;
    setError('');
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function formSubmitHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!message.length) {
      setError('Please provide a message');
      return;
    }

    const bodyRequest = JSON.stringify({
      email,
      subject,
      message,
    });

    try {
      const res = await fetch(`${process.env.BASE_URL}/api/contact`, {
        method: 'POST',
        body: bodyRequest,
      });

      //success modal
    } catch (err) {
      //error modal
    }
  }

  return (
    <div>
      <p>{error}</p>
      <form onChange={formChangeHandler} onSubmit={formSubmitHandler}>
        <div className='input-container'>
          <input required name='email' type='email' id='email' />
          <label htmlFor='email'>Email</label>
        </div>
        <div className='input-container'>
          <input type='text' name='subject' id='subject' />
          <label htmlFor='subject'>Subject</label>
        </div>
        <div className='input-container'>
          <textarea id='message' cols={30} name='message' rows={10}></textarea>
          <label htmlFor='message'>Message</label>
        </div>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default Contact;
