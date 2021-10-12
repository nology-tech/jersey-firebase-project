import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, getDocs, updateDoc, doc } from "@firebase/firestore";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  // addDoc(collection(db, "todos"), {
  //   title: "anything",
  //   description: "anything",
  //   isCompleted: false,
  // });

  // UPDATE THE FUNCTION TO ADD TO "TODO" COLLECTION
  // CHANGE THE OBJECT
  // TO HAVE TITLE, DESCRIPTION AND IScOMPLETED KEYS
  // TITLE -> ANY STRING
  // DESCRIPTION -> ANY STRING
  // BOOLEAN -> FALSE

  const getTodos = () => {
    getDocs(collection(db, "todos")).then(docs => {
      let userTodos = [];
      // console.log(docs);
      docs.forEach(doc => {
        console.log(doc.id, doc.data());
        const userTodo = { id: doc.id, ...doc.data() };
        userTodos.push(userTodo);
      });
      setTodos(userTodos);
    });
  };
  // CRUD - INTERACT WITH DB
  // c -> create
  const createTodo = event => {
    event.preventDefault();
    console.log(event);

    const todoTitle = event.target[0].value;
    const todoDescription = event.target[1].value;

    addDoc(collection(db, "todos"), {
      title: todoTitle,
      description: todoDescription,
      isCompleted: false,
    });

    getTodos();
  };

  // R -> READ

  useEffect(() => {
    getTodos();
  }, []);

  //   import { doc, updateDoc } from "firebase/firestore";

  // const washingtonRef = doc(db, "cities", "DC");

  // // Set the "capital" field of the city 'DC'
  // await updateDoc(washingtonRef, {
  //   capital: true
  // });

  // U -> UPDATE

  const updateTodo = event => {
    console.log(event);
    const docID = event.target.id;
    const todoRef = doc(db, "todos", docID);
    updateDoc(todoRef, {
      isCompleted: true,
    });
    getTodos();
  };

  const todoJSX = todos.map(todo => {
    const { id, title, description, isCompleted } = todo;
    return (
      <div className={isCompleted && "completed"} key={id}>
        <p>{title}</p>
        <p>{description}</p>
        <button id={id} onClick={updateTodo}>
          Completed
        </button>
      </div>
    );
  });

  return (
    <section>
      <h2>Add Todo...</h2>
      <form onSubmit={createTodo}>
        <label name="title">Title</label>
        <input name="title" type="text" />
        <label name="description">Description</label>
        <textarea name="description" cols="30" rows="5"></textarea>
        <button>Submit</button>
      </form>
      <h2>Todo...</h2>
      {todoJSX}
    </section>
  );
};

export default Todo;
