import React from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

const Todo = () => {
  
  addDoc(collection(db, "users"), {
    firstName: "Alessandro",
    lastName: "thedev",
  });

  return <p>Todo works</p>;
};

export default Todo;
