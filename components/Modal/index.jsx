import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    modal,
    footer,
    toggle,
    title,
    content,
    size,
  } = props;

  return (
    <div>
      <Modal size={size} isOpen={modal} toggle={toggle} className={className}>
        {title ? <ModalHeader toggle={toggle}>{title}</ModalHeader> : ""}
        <ModalBody>{content}</ModalBody>
        {footer ? (
          <ModalFooter>
            {/* <div className="button-wrapper">
              <a className="btn-solid-reg page-scroll isDisabled">Essayer</a>
            </div>
            <div className="button-wrapper">
              <a className="btn-solid-cancel page-scroll isDisabled">Cancel</a>
            </div> */}
            {footer}
          </ModalFooter>
        ) : (
          ""
        )}
      </Modal>
    </div>
  );
};

export default ModalExample;
