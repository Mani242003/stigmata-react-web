import React, { useState } from "react";
import "./ContactForm.scss";
// import { TextField, Button, Box, Typography } from "@material-ui/core";
// import ReCAPTCHA from "react-google-recaptcha";
import canadaFlag from "../../assets/images/icons/canada.png";
import IndianFlag from "../../assets/images/icons/Indianflag.png";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import usaFlag from "../../assets/images/icons/usa.png";
// import { IoMdRefresh } from "react-icons/io";
import { MdRefresh } from "react-icons/md";
const ContactForm = () => {
  const initalValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  // const [capVal, setcapVal] = useState(null);
  const randomString = Math.random().toString(36).slice(8);
  const [captcha, setCaptcha] = useState(randomString)
  const [text, setText] = useState("")
  const [valid, setValid] = useState(false)
  const refreshing =()=>{
    setCaptcha(Math.random().toString(36).slice(8))
  }

  const matchCaptcha = () => {
    return text === captcha;
  };


  // const validationSchema = Yup.object({
  //   firstName: Yup.string()
  //     .required("Please enter first name")
  //     .min(2, "First name too short"),
  //   lastName: Yup.string().min(1, "Last name too short"),
  //   email: Yup.string().required("Please enter email").email("Invalid email"),
  //   phone: Yup.string()
  //     .required("Please enter phone number")
  //     .matches(/^[0-9]+$/, "Phone number must be only digits")
  //     .min(10, "Phone number should be minimum 10 digits long"),
  //   message: Yup.string()
  //     .required("Please enter message")
  //     .min(5, "Message too short"),
  // });
  // const handleSubmit = (values, { resetForm }) => {
  //   console.log(values);
  //   onSubmit()
    
  //   resetForm();
  // };
  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!matchCaptcha()) {
      setValid(false);
      setResult("Captcha does not match. Please try again.");
      return;
    }
    setValid(true);
    
    const formData = new FormData(event.target);
    console.log(formData,"formmmm");

    formData.append("access_key", "4d175d08-6329-4667-86e6-c73e9febe81c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Form not submitting ! please try again later (or) contact this Number 9790845787");

    }
  };


  return (
    <div className="contactPageForm" id="contactForm">
      <div className="contactPageFormLeft">
        <span className="contactPageFormLeftTitle">Our office locations</span>
        <div className="contact-info">
          <div className="contactinfoHeder">
            <img src={canadaFlag} alt="" />
            <span>Canada</span>
          </div>
          <div className="contact-content">
            <IoLocationOutline />
            <span className="contact-common-text-style">
              <a href=""> 3200, Autoroute Jean-Noël-Lavoie, Laval, H7T 2H6</a>
            </span>
          </div>
          <div className="contact-content">
            <LuPhoneCall />
            <span className="contact-common-text-style">
              <a href="">450-517-2023</a>
            </span>
          </div>
        </div>
        <div className="contact-info USAContact-info">
          <div className="contactinfoHeder">
            <img src={usaFlag} alt="" />
            <span>USA (Head Office)</span>
          </div>
          <div className="contact-content">
            <IoLocationOutline />
            <span className="contact-common-text-style">
              <a href="">
                {/* Stigmata Technology Solutions LLC 11700 Lebanon Road, Apt 1527
                Frisco, TX 75035-75035 */}

               <span> Stigmata Technology Solutions LLC</span> <br/>
11700 Lebanon Road, Apt 1527 Frisco, <br/>
TX 75035-75025
              </a>
            </span>
          </div>
          <div className="contact-content">
            <MdMailOutline />
            <span className="contact-common-text-style">
              <a href="mailto: jeree@stigmatatech.com">
                jeree@stigmatatech.com
              </a>
              {/* <br /> */}
              {/* <a href="">Jerome@stigmata.co.in </a> */}
            </span>
          </div>
          <div className="contact-content">
            <LuPhoneCall />
            <span className="contact-common-text-style">
              <a href="">+1 (480) 852-1881</a>
            </span>
          </div>
        </div>
        <div className="contact-info customContact-info">
          <div className="contactinfoHeder">
            <img src={IndianFlag} alt="" />
            <span>India </span>
          </div>
          <div className="contact-content">
            <SlLocationPin />
            <span className="contact-common-text-style">
              <a href="">
                No.52/1, 2nd Floor, Meenambal Salai, Vivekandhar Nagar,<br/>Near S.K
                Mahal, Chennai, India - 600118.
              </a>
            </span>
          </div>
          <div className="contact-content">
            <MdMailOutline />
            <span className="contact-common-text-style">
              <a href="mailto:jerome@stigmatatech.com">
                Jerome@stigmatatech.com{" "}
              </a>
              <br />
              <a href="">Jerome@stigmata.co.in </a>
            </span>
          </div>
          <div className="contact-content">
            <LuPhoneCall />
            <span className="contact-common-text-style">
              <a href="mailto:jerome@stigmatatech.com">+91 93453 36553 </a>
              <br />
              <a href=""> +91 97908 45787 </a>
            </span>
          </div>
          <div className="contactIframe">
            {" "}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15542.085304221393!2d80.24032538954226!3d13.129482242573486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e00209a4465%3A0x5e274e9203d8b285!2sStigmata%20Techno%20Solutions!5e0!3m2!1sen!2sin!4v1719652371865!5m2!1sen!2sin"
              width="500"
              height="100"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
        {/* <div className="contact-info customContact-info ">
          <div className="contactinfoHeder  ">
            <img src={IndianFlag} alt="" />
            <span >
            Canada 
            </span>
          </div>
          <span className="contact_right_bottom_des">
            Name :{" "}
            <span className="contact_inner_span">Kingston Daniel Raj </span>
            <br />
            Mobile: <span className="contact_inner_span">+91 6374732403</span>
            <br />
          </span>
        </div> */}
      </div>
      <div className="contactPageFormRight">
        {/* <Formik
          initialValues={initalValues}
          validationSchema={validationSchema}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form onSubmit={onSubmit} >
              <div className="contactFormRow1">
                <Field
                  name="firstName"
                  as={TextField}
                  size="small"
                  variant="filled"
                  label="First Name"
                  className="contactInput"
                  fullWidth
                  error={
                    Boolean(errors.firstName) && Boolean(touched.firstName)
                  }
                  helperText={Boolean(touched.firstName) && errors.firstName}
                />
                <Field
                  name="lastName"
                  size="small"
                  as={TextField}
                  variant="filled"
                  label="Last Name"
                  fullWidth
                  className="contactInput"
                  error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                  helperText={Boolean(touched.lastName) && errors.lastName}
                />
              </div>
              <div className="contactFormRow2">
                <Field
                  name="email"
                  size="small"
                  as={TextField}
                  variant="filled"
                  label="Email"
                  className="contactInput"
                  fullWidth
                  error={Boolean(errors.email) && Boolean(touched.email)}
                  helperText={Boolean(touched.email) && errors.email}
                />
                <Field
                  name="phone"
                  size="small"
                  as={TextField}
                  variant="filled"
                  className="contactInput"
                  label="Phone"
                  fullWidth
                  error={Boolean(errors.phone) && Boolean(touched.phone)}
                  helperText={Boolean(touched.phone) && errors.phone}
                />
              </div>
              <div className="conatctTextButtonField">
                <Field
                  name="message"
                  as={TextField}
                  size="small"
                  variant="filled"
                  label="Message"
                  className="contactInput"
                  fullWidth
                  multiline
                  rows={4}
                  error={Boolean(errors.message) && Boolean(touched.message)}
                  helperText={Boolean(touched.message) && errors.message}
                />
                <ReCAPTCHA
                  sitekey="6LfX0PgpAAAAANnJZERY4jy7U5r3wa_E4fqBWmLA"
                  onChange={(val) => setcapVal(val)}
                />

                <Button
                  type="submit"
                  variant="contained"
                  // color="primary"
                  style={{
                    background: "#1A74E9",
                    cursor: "pointer",
                    color: "white",
                  }}
                  size="large"
                  disabled={!isValid || !dirty || !capVal}
                >
                  Sign up
                </Button>
              </div>
            </Form>
          )}
        </Formik> */}
         <form onSubmit={onSubmit }>
       <div className="contactRow">
      <div className="inputItem">
        <label >First Name</label>
      <input type="text" name="First name" placeholder="eg.Jerome" required/>
      </div>
       <div className="inputItem">
        <label >Last Name</label>
        <input type="text" name="Last Name" placeholder="eg.David" required/>

      </div>
       </div>
       <div className="contactRow">
       <div className="inputItem">
        <label >Email</label>
       <input type="email" name="email" placeholder="eg.abc@gmail.com" required/>

      </div>
       <div className="inputItem">
        <label >Phone</label>
       <input type="number" name="phone" placeholder="eg.111-111-1111" required/>


      </div>

       </div>
       <div className="contactRow customInputArea">
       <div className="inputItem">

        <label >How can we help you?</label>
       <textarea className="txinput" rows={10} name="message" required></textarea>
     
       <div className="contactCaptchaContainer">
       <span >{captcha} </span>
       <MdRefresh onClick={()=> refreshing()} />

       </div>
        <input type="text" name="" placeholder="Enter Captcha" value={text} onChange={(e)=> setText(e.target.value)} id="" required  />
        <label className="captcheresult">{result}</label>

       </div>
      

       </div>
       {/* <ReCAPTCHA
                  sitekey="6LfX0PgpAAAAANnJZERY4jy7U5r3wa_E4fqBWmLA"
                  onChange={(val) => setcapVal(val)}
                /> */}
               


         

        <div className="contactRow customButton">
        <button type="submit"  >Submit Form</button>

        </div>

      </form>

    
      </div>
    </div>
   
  );
};

export default ContactForm;
