import React from "react";

function Config({mergedHistoy, editElemNum}) {
  const configStringify = () => {
    return JSON.stringify(
      (() => {
        let data = mergedHistoy[editElemNum];
        if (data) {
          data = JSON.parse(JSON.stringify(data.body));
          delete data.value;
          if (data.text) {
            data.props.text = data.text;
          }
          if (data.message) {
            data.props.message = data.message;
          }
          delete data.text;
          delete data.message;
          return data;
        }
      })()
    );
  };

  return <>{configStringify()}</>;
}

export default Config;
