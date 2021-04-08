import React from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  //Emailjs Funtionality//
  const serviceID = 'service_ID'
  const templateID = 'template_ID'
  const userID = 'user_rZ7cEjUrOuzI8vQAUjFsk'

  //Form Validation
  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      userID
    )
    r.target.reset()
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          'Thank you! I will respond to your request as soon as possible.'
        )
      })
      .catch((err) => console.error(`Something went wrong ${err}`))
  }

  return (
    <div className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>
          Please fill out the form below and I will contact you as soon as
          possible
        </p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/*Name Input*/}
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                {...register('name', {
                  required: 'Please enter your name',
                  maxLength: {
                    value: 30,
                    message:
                      'Please enter a name with fewer than 30 characters',
                  },
                })}
              />
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/*Email Input*/}
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                {...register('email', {
                  required: 'Please provide an email address',
                  pattern: {
                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                    message: 'Invalid email format',
                  },
                })}
              />
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/*Subject Input*/}
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                {...register('subject', {
                  required: 'Please include a message subject',
                })}
              />
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12 text-center">
              {/*Message*/}
              <textarea
                type="text"
                className="form-control"
                placeholder="Enter your message..."
                name="message"
                {...register('message', {
                  required: 'You need to enter a message!',
                })}
              ></textarea>
              <div>
                <span className="error-message">
                  {errors.message && errors.message.message}
                </span>
              </div>

              <button className="btn-main-offer contact-btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
