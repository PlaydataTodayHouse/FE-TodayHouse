import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function WriteModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <button
        style={{
          display: "flex",
          width: "92.31px",
          height: "40px",
          padding: "11px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "6.31px",
          borderRadius: "4px",
          background: "#35C5F0",
          fontSize: "14px",
          color: "white",
          whiteSpace: "nowrap",
        }}
        color="#35C5F0"
        onClick={toggle}
      >
        글쓰기
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#ffffff"
            stroke-linecap="square"
            d="m14 5l-6.5 7L1 5"
          />
        </svg>
      </button>
      <Modal
        isOpen={modal}
        toggle={toggle}
        {...args}
        style={{ width: "308.516", height: "355px", padding: "8px" }}
      >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default WriteModal;
