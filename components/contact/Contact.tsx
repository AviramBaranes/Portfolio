import { motion } from 'framer-motion';
import React, { FC, useState } from 'react';

import classes from '../../styles/contact/contact.module.scss';

interface Contact {}

const Contact: FC<Contact> = () => {
  const [error, setError] = useState('');
  const [modalProps, setModalProps] = useState({ content: '', className: '' });
  const [loseFocus, setLoseFocus] = useState({ email: false, message: false });
  const [fields, setFields] = useState({
    email: '',
    message: '',
  });

  function formChangeHandler(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setError('');
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function clearModal(success?: boolean) {
    if (success) setFields({ email: '', message: '' });
    setTimeout(() => {
      setModalProps({ content: '', className: '' });
    }, 3000);
  }

  async function formSubmitHandler(e: React.FormEvent) {
    e.preventDefault();

    if (!fields.message.length) {
      setError('Please provide a message');
      return;
    }

    const bodyRequest = new FormData(e.target as HTMLFormElement);

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_FORM_SPREE_URL as string,
        {
          method: 'POST',
          body: bodyRequest,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (!res.ok) throw new Error();

      setModalProps({
        content: 'Your email had been sent successfully!',
        className: classes.Success,
      });
      clearModal(true);
    } catch (err) {
      console.error(err);

      setModalProps({
        content: 'Something went wrong :( \n Please try again in a few minutes',
        className: classes.Failure,
      });
      clearModal();
    }
  }

  function blurHandler(e: React.FocusEvent) {
    const { name } = e.target as any;
    console.log(name);

    setLoseFocus((prev) => ({ ...prev, [name]: true }));
  }

  const shouldDisplayModal = !!(modalProps.content && modalProps.className);
  return (
    <>
      {shouldDisplayModal && (
        <motion.div
          initial={{ y: '-100%', x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className={`${modalProps.className} ${classes.Modal}`}
        >
          <h3>{modalProps.content}</h3>
        </motion.div>
      )}
      <div className={classes.ContactForm}>
        <p>{error}</p>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.Container}>
            <input
              onBlur={blurHandler}
              onChange={formChangeHandler}
              value={fields.email}
              required
              name='email'
              type='email'
              placeholder='Email'
              autoComplete='off'
            />
            <span
              className={`${classes.Border} ${
                loseFocus.email ? classes.Blur : ''
              }`}
            ></span>
          </div>
          <div className={classes.Container}>
            <textarea
              onBlur={blurHandler}
              onChange={formChangeHandler}
              value={fields.message}
              cols={22}
              name='message'
              rows={5}
              placeholder='Message'
            ></textarea>
            <span
              className={`${classes.Border} ${
                loseFocus.message ? classes.Blur : ''
              }`}
            ></span>
          </div>
          <button className='contact-btn' type='submit'>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
