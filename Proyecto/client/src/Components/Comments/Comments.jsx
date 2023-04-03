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
      if (product?.id == ordersId.map((order) => order)) {
        const newComment = {
          comment: comment,
          userId: user.id,
          id: product.id,
        };
        dispatch(postComment(newComment));
        setRender(!render);
        setComment("");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your comment has been posted!",
          showConfirmButton: false,
          timer: 1500,
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
    <div>
      <form onSubmit={handleSubmit}>
        <Button type="submit">Comment</Button>
        <Input
          placeholder="Leave your comment"
          type="text"
          value={comment}
          onChange={handleInputChange}
        />
      </form>
      <div>
        {product
          ? product.Comments
            ? product.Comments.map((comment, index) => (
                <div key={index}>
                  <span>{comment.user}:</span>
                  <p>{comment.comments.length ? comment.comments : null}</p>
                </div>
              )).reverse()
            : null
          : null}
      </div>
    </div>
  );
};

export default Comments;
