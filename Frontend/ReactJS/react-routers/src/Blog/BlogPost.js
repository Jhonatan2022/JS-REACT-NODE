import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./blogData";
import { useAuth } from "../Auth/auth"

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const auth = useAuth();

    const blogpost = blogdata.find((post) => post.slug === slug);

    const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username;

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

            {canDelete && (
                <button>Eliminar</button>
            )}
        </>
    );
}

export { BlogPost };
