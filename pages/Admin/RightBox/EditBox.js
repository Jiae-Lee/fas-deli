import React, { useState, useEffect } from "react";
import admin from "../../../styles/Admin.module.css";

function EditBox({
    mergedHistoy,
    editElemNum,
    addHistory
}) {
  const [editElement, setEditElement] = useState();
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  useEffect(() => {
    let editElem = mergedHistoy[editElemNum];
    if (editElem) {
      setEditElement(editElem);
    }
  }, [editElemNum, mergedHistoy]);

  useEffect(() => {
    function getValue(key) {
        if(!editElement || !editElement.body){
            return ''
        }
        if(editElement.body[key] === undefined){
            return ''
        }
        return editElement.body[key];
    }

    let text = getValue("text");
    let message = getValue("message");
    setInputValue(text);
    setInputValue2(message);
  }, [editElement]);

  const onBlurHandler = (e) => {
    function findTaskById(history, id) {
      return history.filter((list) => list.body.id === id)[0];
    }
    let element = findTaskById(mergedHistoy, editElement.body.id);
    if (element.body[e.currentTarget.name] !== e.currentTarget.value) {
      addHistory("edit", {
        [e.currentTarget.name]: e.currentTarget.value,
        id: editElement.body.id,
      });
    }
  };

  switch (editElement?.body?.component) {
    case "ElementParagraph":
      return (
        <div className={admin.editList}>
          <label htmlFor="paragraphText">Paragraph Text</label>
          <input
            id="paragraphText"
            name="text"
            onChange={(e) => {
              setInputValue(e.currentTarget.value);
            }}
            onBlur={onBlurHandler}
            value={inputValue}
          ></input>
        </div>
      );
    case "ElementButton":
      return (
        <div className={admin.editList}>
          <label htmlFor="buttonText">Button Text</label>
          <input
            id="buttonText"
            name="text"
            onChange={(e) => {
              setInputValue(e.currentTarget.value);
            }}
            onBlur={onBlurHandler}
            value={inputValue}
          ></input>
          <label htmlFor="buttonMessage">Alert Message</label>
          <input
            id="buttonMessage"
            name="message"
            onChange={(e) => {
              setInputValue2(e.currentTarget.value);
            }}
            onBlur={onBlurHandler}
            value={inputValue2}
          ></input>
        </div>
      );
    default:
      return null;
  }
}

export default EditBox;
