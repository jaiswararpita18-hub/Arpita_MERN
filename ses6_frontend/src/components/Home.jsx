import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/blog')
            .then((res) => setBlogs(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="container mt-4">
            <div className="row">
                {
                    blogs.map((blog) => (
                        <div className="col-md-4 mb-4" key={blog._id}>
                            <div className="card h-100">
                                <img
                                    src={blog.imageUrl}
                                    className="card-img-top"
                                    alt={blog.course}
                                    style={{ height: "220px", objectFit: "cover" }}
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{blog.course}</h5>
                                    <p className="card-text">
                                        {blog.name.substring(0, 100)}...
                                    </p>

                                    <NavLink
                                        className="btn btn-primary"
                                        to={`/${blog._id}`}
                                    >
                                        Read More
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Home