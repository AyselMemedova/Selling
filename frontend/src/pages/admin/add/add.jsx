import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import { Formik } from "formik";
import "./add.css";
import axios from "axios";
const Add = () => {
  const { data, setdata } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <div>
        <h1 className="h1">Add here!</h1>
        <Formik
          initialValues={{ image: "", title: "", description: "", price: "" }}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .post("http://localhost:8080/api/selling", {
                image: values.image,
                title: values.title,
                price: values.price,
                description: values.description,
                count: 1,
                totalPrice: values.price,
              })
              .then((res) => {
                setdata([...data, res.data]);
              });
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="image"
                placeholder="Image"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.image}
              />
              {errors.image && touched.image && errors.image}
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}

              <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}

              <input
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
              {errors.price && touched.price && errors.price}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Add;
