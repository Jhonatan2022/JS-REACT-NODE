import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogData";

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const blogpost = blogdata.find((post) => post.slug === slug);

    const returnBlogPage = () => {
        // navigate(-1); // Vuelve a la página anterior
        navigate("/blog");
    }

    return (
        <>
            <h2>{blogpost.title}</h2>
            <button onClick={returnBlogPage}>Volver</button>
            <p>{blogpost.author}</p>
            <p>{blogpost.content}</p>
        </>
    );
}

export { BlogPost };
