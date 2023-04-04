import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { postCreateProduct } from "../../Redux/actions/formActions/actions";
import style from "./CreateProducts.module.css";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const dispatch = useDispatch();

  const [formSubmitted, changeSubmittedForm] = useState(false);

  const [previewSource, setPreviewSource] = useState();
  const [fileInputState, setfileInputState] = useState("");

  const handleInputChange = (event) => {
    const file = event.target.files[0];
    previewFile(file);
  };
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
      setfileInputState();
    };
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          sellingPrice: 0,
          description: "",
          category: "",
          average_rating: 0,
          reviews_count: 0,
          images: Path2D,
        }}
        validate={(values) => {
          let InputErrors = {};

          if (!values.name) {
            InputErrors.name = "name is required";
          }
          if (!values.sellingPrice) {
            InputErrors.sellingPrice = "sellingPrice is required";
          }
          if (!values.description) {
            InputErrors.description = "description is required";
          }
          if (!values.category) {
            InputErrors.category = "category is required";
          }
          if (!values.average_rating) {
            InputErrors.average_rating = "average_rating is required";
          }
          if (!values.reviews_count) {
            InputErrors.reviews_count = "reviews_count is required";
          }
          // if (!values.images) {
          //     InputErrors.images = 'images is required';
          // }
          return InputErrors;
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          dispatch(
            postCreateProduct({
              name: values.name,
              sellingPrice: values.sellingPrice,
              description: values.description,
              category: values.category,
              average_rating: values.average_rating,
              reviews_count: values.reviews_count,
              images: previewSource, //values.images,
            })
          ).then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product created successfully",
              showConfirmButton: false,
              timer: 500,
            });
          });
          console.log(values);
          resetForm();
          console.log("Form submitted");
          changeSubmittedForm(true);
          setTimeout(() => changeSubmittedForm(false), 2000);
        }}
      >
        {({ errors }) => (
          <Form>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
              <div>
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Product Name:
                </label>
                <Field
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter product name"
                />
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className={style.inputError}>{errors.name}</div>
                  )}
                />
              </div>

              <div>
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="sellingPrice"
                >
                  Selling Price:
                </label>
                <Field
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="number"
                  name="sellingPrice"
                  id="sellingPrice"
                  placeholder="Enter selling price"
                />
                <ErrorMessage
                  name="sellingPrice"
                  component={() => (
                    <div className={style.inputError}>
                      {errors.sellingPrice}
                    </div>
                  )}
                />
              </div>

              <div>
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="description"
                >
                  Product Description:
                </label>
                <Field
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter product description"
                />
                <ErrorMessage
                  name="description"
                  component={() => (
                    <div className={style.inputError}>{errors.description}</div>
                  )}
                />
              </div>

              <div>
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="category"
                >
                  Product Category:
                </label>
                <Field
                  className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                  name="category"
                  as="select"
                >
                  <option value="accessories">Accessories</option>
                  <option value="shoes">Shoes</option>
                  <option value="clothing">Clothing</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component={() => (
                    <div className={style.inputError}>{errors.category}</div>
                  )}
                />
              </div>

              <div>
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="average_rating"
                >
                  Product Average Rating:
                </label>
                <Field
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="number"
                  name="average_rating"
                  id="average_rating"
                  placeholder="Enter product average_rating"
                />
                <ErrorMessage
                  name="average_rating"
                  component={() => (
                    <div className={style.inputError}>
                      {errors.average_rating}
                    </div>
                  )}
                />
              </div>

              <div>
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="reviews_count"
                >
                  Product Reviews Count :
                </label>
                <Field
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  type="number"
                  name="reviews_count"
                  id="reviews_count"
                  placeholder="Enter product reviews_count"
                />
                <ErrorMessage
                  name="reviews_count"
                  component={() => (
                    <div className={style.inputError}>
                      {errors.reviews_count}
                    </div>
                  )}
                />
              </div>

              <div>
                <label
                  className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                  htmlFor="images"
                >
                  Image:
                </label>
                <Field
                  className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  value={fileInputState}
                  type="file"
                  name="images"
                  id="images"
                  placeholder="Enter product images"
                  onChange={handleInputChange}
                />
                <ErrorMessage
                  name="images"
                  component={() => (
                    <div className={style.inputError}>{errors.images}</div>
                  )}
                />
              </div>
            </div>
            <button
              className="w-24 bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
              type="submit"
            >
              Send
            </button>
            {formSubmitted && (
              <p className={style.exito}>Form successfully submitted!</p>
            )}
          </Form>
        )}
        {/* {previewSource && (
                    <img src={previewSource} alt="chosen"/>
                )} */}
      </Formik>
    </>
  );
};

export default CreateProduct;
// Revisar estilos de los errores de los inputs.
