import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'

const ShowBlog = () => {

    const [blog, setBlog] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/blog/blog/${id}`)
            .then((res) => setBlog(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleDelete = () => {
        axios.delete(`http://localhost:4000/blog/${id}`)
            .then((res) => navigate('/'))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <div
                className="container"
            >
                <div
                    className="row justify-content-center align-items-center g-2"
                >
                    <div className="col">
                        <div className="card">
                            <img className="card-img-top" src={ blog.imageUrl } alt="Title" />
                            <div className="card-body">
                                <h4 className="card-title">{ blog.course}</h4>
                                <p className="card-text">{ blog.category }</p>
                                <h6 className="text-muted">Instructor Name : { blog.name }</h6>

                                <NavLink
                                    name=""
                                    id=""
                                    className="btn btn-success me-2"
                                    to="/"
                                    role="button"
                                    
                                >Back to Home</NavLink>
                                <NavLink
                                    name=""
                                    id=""
                                    className="btn btn-warning me-2"
                                    to={ `/edit/${id}` }
                                    role="button"
                                >Edit</NavLink>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={ handleDelete }
                                >
                                    Delete
                                </button>


                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ShowBlog
