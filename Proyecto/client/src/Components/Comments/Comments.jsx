import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserbyId, postComment } from "../../Redux/actions";
import Swal from "sweetalert2";

const Comments = ({ product, setRender, render }) => {
  const user = useSelector((state) => state.user);
  // este user es del usuario logueado, podemos ver su nombre, id, token,etc
  const userId = useSelector((state) => state.userId);
  //este userId nos trae al usuario con el comentario y sus orders
  const [comment, setComment] = useState("");
  //guardamos el comentario para despues enviarlo al back
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validamos que el usuario este logueado
    if (!user.msg) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must be logged in to comment!",
      });
    } else {
      // buscamos el producto en las orders del usuario
      const ordersId = userId?.Orders?.map((order) =>
        order.products?.map((product) => product.id)
      );
      //se fija si el producto coincide con alguno de los productos de las orders del usuario
      if (ordersId?.flat().includes(product.id)) {
        const newComment = {
          comment: comment,
          userId: user.id,
          id: product.id,
        };
        dispatch(postComment(newComment));

        setComment("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your comment has been posted!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setRender(!render);
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You can't comment if you haven't bought this product!",
        });
      }
    }
  };

  useEffect(() => {
    dispatch(getUserbyId(user.id));
  }, [product]);

  return (
    <div className=" mt-4 ">
      <div className="flex flex-col ">
        <form  onSubmit={handleSubmit}>
          <textarea className=" border border-slate-600 rounded hover:border-purple-400 focus:border-purple-500 py-2 mr-[6rem] w-[25rem] textarea textarea-sm w-full max-w-xs text-slate-800 dark-slate-200"
            placeholder="Leave your comment"
            type="text-area"
            value={comment}
            onChange={handleInputChange}
          />
          <button className=" flex transition font-roboto font-regular text-white  px-4 py-2 duration-100 absolute  rounded bg-purple-700 text-lg border border-white hover:border-purple-600 hover:bg-purple-900 focus:bg-purple-100 focus:text-purple-900 place-content-center mt-2 ml-[4.3rem] " type="submit">Send</button>
        </form>
        <h1 className="flex mt-[5rem] ml-[2rem] text-2xl font-roboto dark:text-slate-300">Reviews</h1>
        <div  className="mt-[1rem] font-roboto dark:text-slate-300">
          {product
            ? product.Comments
              ? product.Comments.map((comment, index) => (
                  <div className="ml-6 chat chat-start" key={index}>
                    <span className="chat-header font-bold">{comment.user}:</span>
                    <p className="chat-bubble bg-slate-300 dark:bg-slate-700">{comment.comments.length ? comment.comments : null}</p>
                  </div>
                )).reverse()
              : null
            : null}
        </div>
      </div>
    </div>
  );
};


export default Comments;
