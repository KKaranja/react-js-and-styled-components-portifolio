import React from "react";
import styled from "styled-components";
import PrimaryButton from "../Components/PrimaryButton";
import Title from "../Components/Title";
import { InnerLayout, MainLayout } from "../styles/Layout";
import ContactItem from "../Components/ContactItem";
import { LocationOn, Email, Phone } from "@material-ui/icons";
const Contact = () => {
  const phone = <Phone />;
  const email = <Email />;
  const location = <LocationOn />;
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className='left-content'>
            <div className='contact-title'>
              <h4>Get In Touch</h4>
            </div>
            <form className='form'>
              <div className='form-field'>
                <label htmlFor='name'>Enter Your Name*</label>
                <input type='text' id='name' />
              </div>
              <div className='form-field'>
                <label htmlFor='email'>Enter Your Email*</label>
                <input type='email' id='email' />
              </div>
              <div className='form-field'>
                <label htmlFor='subject'>Enter Your Subject</label>
                <input type='text' id='subject' />
              </div>
              <div className='form-field'>
                <label htmlFor='text-area'>Enter Your Message</label>
                <textarea
                  name='text-area'
                  id='text-area'
                  cols='30'
                  rows='3'
                ></textarea>
              </div>
              <div className='form-field'>
                <PrimaryButton title={"Send Email"} />
              </div>
            </form>
          </div>
          <div className='right-content'>
            <ContactItem
              title={"Phone"}
              icon={phone}
              contact1={"+254 756 908 766"}
              contact2={"+254 756 908 766"}
            />
            <ContactItem
              title={"Email"}
              icon={email}
              contact1={"isa@gmail.com"}
              contact2={"kimur@gmail.com"}
            />
            <ContactItem
              title={"Adress"}
              icon={location}
              contact1={"Nairob,"}
              contact2={"Kenya"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
};

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .right-content {
      display: flex;
      flex-direction: column;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0.5rem;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
      }
    }
  }
`;

export default Contact;
