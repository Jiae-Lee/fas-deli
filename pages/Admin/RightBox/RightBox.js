import React, { useState, useEffect, useCallback } from "react";
import MousePosition from "./util/MousePosition";
import Dragging from "./util/Dragging";
import Config from "./util/Config";
import admin from "../../../styles/Admin.module.css";
import DraggingList from "./DraggingList";
import EditBox from "./EditBox";
import { useDispatch, useSelector } from "react-redux";
import {
  historyToStore,
  mergeHistoryToStore,
} from "../../../store/modules/adminAction";

export default function RightBox() {
  const dispatch = useDispatch();
  const walkStepToStore = useSelector((state) => state.adminAction.walkStepToStore);
  const getHistoryToStore = useSelector((state) => state.adminAction.historyToStore);

  const [history, setHistory] = useState([]); //add, edit의 history
  const [editElemNum, setEditElemNum] = useState(null);

  useEffect(() => {
    document.addEventListener("dragend", dropEvent);
  }, [history]);

  useEffect(() => {
    if (getHistoryToStore) {
      setHistory(getHistoryToStore);
    }
  }, [getHistoryToStore]);

  const mergeHistory = (history, step) => {
    function findTaskById(history, id) {
      return history.filter((list) => list.body.id === id)[0];
    }

    let crop = JSON.parse(JSON.stringify(history)).splice(0, step);
    let edits = crop.filter((item) => {
      return item.action === "edit";
    });

    edits.forEach((item) => {
      let pick = findTaskById(crop, item.body.id);

      let value;
      let key = "";
      if (item.body.text !== undefined) {
        key = "text";
        value = item.body.text;
      } else if (item.body.message !== undefined) {
        key = "message";
        value = item.body.message;
      }
      pick.body[key] = value;
    });

    return crop.filter((item) => item.action !== "edit");
  };

  useEffect(() => {
    calculate(history);
  }, [walkStepToStore]);

  let config = {
    id: "",
    component: "",
    props: {},
    value: "",
  };

  const addHistory = (action, body) => {
    let data = [...history, { action, body }];
    setHistory(data);
    dispatch(historyToStore(data));
    calculate(data);
  };

  const dropEvent = useCallback(
    (e)=>{
      let element = e.path[0].id;
      let body = {
        ...config,
        id: "id" + Math.random(),
        component: "Element" + element,
      };
      addHistory("add", body);
      document.removeEventListener("dragend", dropEvent);
    },[addHistory]
  );

  const calculate = (history) => {
    dispatch(mergeHistoryToStore(mergeHistory(history, history.length - walkStepToStore)));
  };

  const mergedHistoy = mergeHistory( history, history.length - walkStepToStore);

  return (
    <div className={admin.rightBoxWrap}>
      <div className={admin.infoContainer}>
        <ul className={admin.infoList}>
          <li>
            Mouse : <MousePosition />
          </li>
          <li>
            Dragging : <Dragging />
          </li>
          <li>Instance : {mergedHistoy?.length}</li>
          <li>
            Config : <Config 
                mergedHistoy={mergedHistoy}
                editElemNum={editElemNum}
            />
          </li>
        </ul>
        <div className={admin.infoDraggingItemList}>
          <DraggingList
            mergedHistoy={mergedHistoy}
            setEditElemNum={setEditElemNum}
          />
        </div>
      </div>
      <div className={admin.editContainer}>
        <EditBox
          mergedHistoy={mergedHistoy}
          addHistory={addHistory}
          editElemNum={editElemNum}
        />
      </div>
    </div>
  );
}
