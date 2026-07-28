import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {

    const [blog, setBlog] = useState({ course: '', name: '', imageUrl: '', category: '',duration: '',level:''  },)
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/blog/add',blog)
            .then((res) => navigate('/'))
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div
                class="container"
            >
                <div
                    class="row justify-content-center align-items-center g-2"
                >
                    <div class="col">
                        <div class="card">

                            <div class="card-body">
                                <h4 class="card-title">Add Course</h4>
                                <form onSubmit={ handleSubmit }>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={ (e) => setBlog({ ...blog, course: e.target.value }) }
                                        />
                                        <label for="formId1">Course Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={ (e) => setBlog({ ...blog, name: e.target.value }) }
                                        />
                                        <label for="formId1">Instructor Name</label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={ (e) => setBlog({ ...blog, imageUrl: e.target.value }) }
                                        />
                                        <label for="formId1">Course Thumbnail </label>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="formId1"
                                            id="formId1"
                                            placeholder=""
                                            onChange={ (e) => setBlog({ ...blog, category: e.target.value }) }
                                        />
                                        <label for="formId1">Category</label></div>
                                        <div class="form-floating mb-3">
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="formId1"
                                                id="formId1"
                                                placeholder=""
                                                onChange={ (e) => setBlog({ ...blog, duration: e.target.value }) }
                                            />
                                            <label for="formId1">Duration</label></div>
                                            <div class="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="formId1"
                                                    id="formId1"
                                                    placeholder=""
                                                    onChange={ (e) => setBlog({ ...blog, level: e.target.value }) }
                                                />
                                                <label for="formId1">Level</label>
                                            </div>
                                            
                                        
                                        
                                    
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Add
                                    </button>

                                </form>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default AddBlog
