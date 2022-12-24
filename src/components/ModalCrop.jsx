import { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import { Button, Modal } from "react-bootstrap";

function ModalCrop(props) {
  var editor = "";

  const setEditorRef = (ed) => {
    editor = ed;
  };
  const handleHideModal = () => {
    props.setModalShow(false);
    const coverImage = document.querySelector("#coverimage");
    coverImage.value = "";
    props.setPicture({
      ...props.picture,
      cropperOpen: false,
      croppedImg: null,
      fileImg: null,
    });
  };

  const handleSave = (e) => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();
      //return a promise that resolves with a File instance
      function urltoFile(url, filename, mimeType) {
        return fetch(url)
          .then(function (res) {
            return res.arrayBuffer();
          })
          .then(function (buf) {
            return new File([buf], filename, { type: mimeType });
          });
      }

      //Usage example:
      urltoFile(croppedImg, props.picture.fileImg.name, "image/png").then(
        function (file) {
          const imageProfile = document.querySelector("#cover-img");
          const url = URL.createObjectURL(file);
          imageProfile.src = url;
          props.setPicture({
            ...props.picture,
            img: null,
            cropperOpen: false,
            croppedImg: croppedImg,
            fileImg: file,
          });
        }
      );

      props.setModalShow(false);
    }
  };

  return (
    <Modal
      show={props.show}
      onHide={handleHideModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        {props.picture.cropperOpen && (
          <AvatarEditor
            ref={setEditorRef}
            image={props.picture.img}
            width={500}
            height={200}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            rotate={0}
            scale={props.picture.zoom}
          />
        )}
        <Button onClick={handleSave}>Save</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleHideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCrop;
