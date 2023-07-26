import React from "react";

export default function About(props) {
  let mystyle={
    color:props.mode==='light' ? "black" : 'white' ,
    backgroundColor:props.mode==='dark'? 'rgb(3, 10, 56)' :'white'
  }
    
  return (
    <div className="container my-3">
    <div className="accordion " id="accordionExample">
      <div className="accordion-item ">
        <h2 className="accordion-header ">
          <button
            className={`accordion-button collapsed ${props.mode ==='dark' ? " bg-secondary": ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            key features
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={mystyle}>
            <ul>
                <li>Text Formatting: Easily convert text to uppercase, lowercase, title case, and more.</li>
                <li>Character Count: Get an instant character and word count for any text.</li>
                <li>You can hear your text or copy your text</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed ${props.mode ==='dark' ? " bg-secondary": ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
           Mission
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={mystyle}>
          At TextUtils, our mission is to empower users with innovative tools that simplify the way they interact with text. We understand that working with text can often be time-consuming and challenging, and that's why we created this app to streamline your text-related tasks.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button collapsed ${props.mode ==='dark' ? " bg-secondary": ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Contact Information
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body " style={mystyle}>
            <ul type='disc'>
            <li>Email: xyz@gmail.com</li>
            <li>Contact: 987654320</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
