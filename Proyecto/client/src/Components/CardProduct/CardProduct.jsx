import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { ShoppingBagContext } from "../../Contexts/ShoppingBagContext";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";
import Details from "../../Views/Details/Details";
import Image from "./Background.png";
import Rating from "../Rating/Rating";

const CardProduct = ( props ) => {

	const { id, name, images, sellingPrice, average_rating, category, description, size, selectedSize, setSelectedSize } = props;

	const [shoppingBag, setShoppingBag] = useContext(ShoppingBagContext);
	console.log("Estado shoppingBag desde CardProduct", shoppingBag);

	const addToCart = () => {
		setShoppingBag((currItems) => {
			const isItemsFound = currItems.find((item) => item.id === id);
			if (isItemsFound) {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1, size: selectedSize };
					} else {
						return item;
					}
				});
			} else {
				return [
					...currItems,
					{
						id,
						title: name,
						quantity: 1,
						unit_price: sellingPrice,
						description: "description ",
						picture_url: images[0],
						currency_id: "ARS",
						size: selectedSize
					},
				];
			}
		});
	};

	const removeItem = (id) => {
		setShoppingBag((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const getQuantityById = (id) => {
		return shoppingBag.find((item) => item.id === id)?.quantity || 0;
	};

	const quantityPerItem = getQuantityById(id);

	return (
		<div>
			<div className=" transition  m-4 w-[18rem] h-[28rem] rounded  shadow-lg border-slate-300 dark:border-slate-700 border rounded-md text-left font-roboto hover:border-purple-700 dark:hover:border-purple-500 hover:border hover:translate-y-[-1rem] contrast-[.92] hover:contrast-[1.20] text-current hover:text-purple-700 dark:text-slate-300 dark:hover:text-purple-400 bg-neutral-100 dark:bg-zinc-900">
				{/* <div className=" transition  m-4 max-w-sm max-h-[32rem] rounded  shadow-lg border-slate-300 border rounded-md text-left font-roboto hover:border-purple-700 hover:border "> */}

				<Link to={`/products/${id}`}>
					<div>
						<img
							className="  h-full "
							src={images[0]}
							alt="No se encontro la imagen"
							onError={(e) => {
								e.target.src = Image;
							}}
						/>
					</div>
				</Link>
				<div className="card-body mb-8 relative">
					<Link to={`/products/${id}`}>
						<h2 className="card-title text-[12pt] leading-[20px] ">
							{name}
							{/* <div className="badge badge-secondary">NEW</div> */}
						</h2>
					</Link>
					<div>
						<h3 className="inline-block text-[10pt]">${sellingPrice}</h3>
						{/* <h4>{props.average_rating}</h4> */}
						<div className="absolute bottom-0.5 left-[30px]">
							<Rating rating={average_rating} />
						</div>
						<div className="absolute bottom-0.5 right-[150px]">
							<div>{average_rating}</div>
						</div>
						<div className="inline-block card-actions justify-end  px-3 py-1">
							<h4 className="badge font-light text-[8pt]">{category}</h4>
						</div>
						<div className="absolute bottom-[2rem] left-[11rem]">
							<h4 className="ml-4 badge p-0 font-light text-[8pt] mt-[px]  text-white bg-slate-600">
								{quantityPerItem === 0 ? (
									<button
										className="badge border-none font-light hover:bg-purple-800 "
										onClick={() => addToCart()}
									>
										<AiOutlinePlus />
									</button>
								) : (
									<button
										className=" badge border-none px-[2px]  font-light hover:bg-purple-800"
										onClick={() => addToCart()}
									>
										<AiOutlinePlus />
									</button>
								)}
								{quantityPerItem > 0 && (
									<div className="item-quantity ml-4">{quantityPerItem}</div>
								)}
								{quantityPerItem > 0 && (
									<button
										className="badge border-none px-[2px] hover:bg-purple-800  ml-4 font-light"
										onClick={() => removeItem(id)}
									>
										<AiOutlineLine />
									</button>
								)}
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

// "badge font-light"

export default CardProduct;
