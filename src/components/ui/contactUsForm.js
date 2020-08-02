import React, { useState } from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import axios from 'axios';
import Swal from 'sweetalert2'

const query = graphql`
  {
    file(relativePath: { eq: "plant.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ContactUsForm = () => {

  const [user,setUser] = useState({
    fname:'',
    sname:'',
    email:'',
    contact:'',
    message:''
  })
  const {fname, sname, email, contact, message} = user;

  //function to fill the state with any input change
  const onChange = e => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  //function to send an email
  const sendemail = async user =>{
    Swal.fire({
      title: 'Thank Yoy',
      text: 'We will contact you ASP',
      icon: 'success',
      confirmButtonText: 'Ok'
    });

    //call axios
    await axios.post('http://emails.ariza.ml/api/contact-email',user);

    //clean user
    setUser({
      fname:'',
      sname:'',
      email:'',
      contact:'',
      message:''
    });
  } 

  //function to submit the form
  const formSubmit = e => {
    e.preventDefault();

    //call axios function
    sendemail(user);
  }

  //plant image in the background
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <>
      <div className="contactForm-container">
        <Image fluid={fluid} className="contactForm-img"/>
        <div className="contactForm-outside">
          <div className="contactForm-inside">
            <form 
              className="contact-form"              
              onSubmit={formSubmit}
            >
              <label className="contact-form__label">
                <h4>First Name</h4>
              </label>
              <input
                name="fname"
                type="text"
                value={fname}
                onChange={onChange}
                placeholder="first name"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <h4>Surname</h4>
              </label>
              <input
                name="sname"
                type="text"
                value={sname}
                onChange={onChange}
                placeholder="surname"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <h4>Email</h4>
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={onChange}
                placeholder="email address"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <h4>Contact</h4>
              </label>
              <input
                name="contact"
                type="number"
                value={contact}
                onChange={onChange}
                placeholder="contact number"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <label className="contact-form__label">
                <h4>Message</h4>
              </label>
              <textarea
                name="message"
                type="text"
                value={message}
                onChange={onChange}
                placeholder="message"
                rows="5"
                className="contact-form__textarea contact-form__control"
                required
              ></textarea>
              <label className="contact-form__label__generator">
                <h4>
                  Random Number: {Math.floor(Math.random() * 9999) + 1000}
                </h4>
              </label>
              <input
                name="rnumber"
                type="text"
                placeholder="random number"
                className="contact-form__input contact-form__control"
                required
              ></input>
              <button 
                className="contact-form__btn btn" 
                type="submit"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm
