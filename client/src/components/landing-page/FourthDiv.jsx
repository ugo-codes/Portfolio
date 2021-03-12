import React, {
  useState
} from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function FourthDiv() {

  // This gets the current year so as to use it in the copywright text at the bottom of the FourthDiv
  // It's wrapped around useEffect() soas to run when the app is mounted
  let currentYear = "";

  function getCurrentYear() {
    currentYear = new Date().getFullYear();
  }

  getCurrentYear();

  // This is what enables the modal to show when show = true
  const [show, setShow] = useState(false);

  // We set what willshow as contact whci will be determined based on the icon clicked
  const [modal, setContact] = useState({
    modalTitle: "",
    modalBody: ""
  });

  // this method set the show to false then the modal dissapears
  function handleClose() {
    setShow(false);
  }

  // this method set the show to true then the modal appears
  function handleShow(event) {

    // Identifies which of the contact me icon got clicked
    let nameOfButton = event.target.attributes.getNamedItem("name").value;

    // This identifies the button clicked then determines what will be shown in the modal
    switch (nameOfButton) {
      case "whatsapp":
        setContact({
          modalTitle: "You can reach me on WhatsApp",
          modalBody: "my WhatsApp number is +2349021864537"
        });
        break;

      case "twitter":
        setContact({
          modalTitle: "You can also message me on Twitter",
          modalBody: "my twitter handle is @_kingchild"
        });
        break;

      case "email":
        setContact({
          modalTitle: "You can send me an email",
          modalBody: "You can send an email to kingchild160@gmail.com"
        });
        break;

      case "telegram":
        setContact({
          modalTitle: "You can send me a message on Telegram",
          modalBody: "my Telegram number is +2349021864537"
        });
        break;

      default:
        setContact({
          modalTitle: "",
          modalBody: ""
        });
        break;

    }

    setShow(true);
  }

  return ( <
      div className = "container-fluid first-div blue-background-color center white-text-color"
      id = "contact" >
      <
      h3 > Contact Me < /h3>

      <
      i variant = "light"
      name = "whatsapp"
      className = "fab fa-whatsapp fa-2x"
      onClick = {
        handleShow
      } > < /i> <
      i variant = "light"
      name = "twitter"
      className = "fab fa-twitter fa-2x"
      onClick = {
        handleShow
      } > < /i> <
      i variant = "light"
      name = "telegram"
      className = "fab fa-telegram-plane fa-2x"
      onClick = {
        handleShow
      } > < /i> <
      i variant = "light"
      name = "email"
      className = "fas fa-envelope fa-2x"
      onClick = {
        handleShow
      } > < /i>

      <
      Modal show = {
        show
      }
      onHide = {
        handleClose
      }
      centered >
      <
      Modal.Header closeButton >
      <
      Modal.Title > {
        modal.modalTitle
      } < /Modal.Title> <
      /Modal.Header> <
      Modal.Body > {
        modal.modalBody
      } < /Modal.Body> <
      Modal.Footer >
      <
      Button variant = "secondary"
      onClick = {
        handleClose
      } >
      Close <
      /Button> <
      /Modal.Footer> <
      /Modal>

      <
      br / >

      <
      small > copywright & #169; {currentYear}</small>

    </div>
  );
}

export default FourthDiv;
