// custom hooks
import { useCollection } from "../hooks/Collection";
// components
import TodoDetailes from "../components/TodoDetailes";
import FormInput from "../components/FormInput";
import Btn from "../components/Btn";
// react
import { Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
// firebase
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import toast from "react-hot-toast";

// action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  return { title };
};
// context
import { useMyContext } from "../hooks/useMyContext";

function Todo() {
  const {user} = useMyContext()
  const { data } = useCollection('todos', ['uid',  '==', user.uid], ["createdAt"]);
  const dataTodo = useActionData();
  const [showModal, setShowModal] = useState(false);

  const modalContent = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (dataTodo) {
      const newTodo = { ...dataTodo, completed: false, createdAt:serverTimestamp( ), uid:user.uid, };
      addDoc(collection(db, "todos"), newTodo).then(() => {
        toast.success('you added new todo');
        closeModal(); // Close the modal after adding the new todo
      }).catch((error) => {
        toast.error(error.message);
      });
    }
  }, [dataTodo]);

  return (
    <>
      <div className="pb-10">
        <div className="Mycontainer w-2/5 mt-10">
          <div className="bg-secondaryColor myFlex text-white px-6 py-2 rounded-t-xl">
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
              </svg>
            </div>
            <h1 className="text-center w-full font-bold text-[20px] select-none">Todo List</h1>
          </div>
          <TodoDetailes data={data} modalContent={modalContent} />
        </div>
        {showModal && (
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
            <div className="w-[35%] bg-white rounded-xl p-5">
              <Form className="relative" method="post">
                <p className="ml-4 text-textColor">create list</p>
                <FormInput name={'title'} />
                <Btn text={'add'} style={'mt-5'} type={'submit'} />
              </Form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}



export default Todo;
