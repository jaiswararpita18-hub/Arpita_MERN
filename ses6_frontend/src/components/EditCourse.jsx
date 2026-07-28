import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {

    const [blog, setBlog] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:4000/blog/blog/${id}`)
            .then((res) => setBlog(res.data))
            .catch((err) => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:4000/blog/${id}`, blog)
            .then((res) => navigate(`/${id}`))
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

                            <div className="card-body">
                                <h4 className="card-title">Edit Course</h4>
                                <form onSubmit={ handleSubmit }>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={ blog.course }
                                            onChange={ (e) => setBlog({ ...blog, course: e.target.value }) }
                                        />
                                        <label for="formId1">Course Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={ blog.name }
                                            onChange={ (e) => setBlog({ ...blog, name: e.target.value }) }
                                        />
                                        <label for="formId1">Instructor Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={ blog.imageUrl }
                                            onChange={ (e) => setBlog({ ...blog, imageUrl: e.target.value }) }
                                        />
                                        <label for="formId1">Image Url</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={ blog.category }
                                            onChange={ (e) => setBlog({ ...blog, category: e.target.value }) }
                                        />
                                        <label for="formId1">Category</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={blog.duration}
                                            onChange={(e)=>setBlog({...blog,duration:e.target.value})}
                                        />
                                        <label for="formId1">Duration</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            value={blog.level}
                                            onChange={(e)=>setBlog({...blog,level:e.target.value})}
                                        />
                                        <label for="formId1">Level</label>
                                    </div>
                                    
                                    
                                    <NavLink
                                        name=""
                                        id=""
                                        className="btn btn-primary"
                                        to={ `/${id}` }
                                        role="button"
                                    >Back</NavLink>

                                    <button
                                        type="submit"
                                        className="btn btn-warning"
                                    >
                                        Edit
                                    </button>

                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default EditBlog
