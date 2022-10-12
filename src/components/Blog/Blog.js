import React from 'react';
import './Blog.css'

const Blog = () => {
    return (

        <div>
            <h1 className='text-sky-600 text-2xl fw-semibold mx-4 underline text-center'>Interview related common Questions</h1>
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                <div>
                    <h1 className='italic my-4 text-sky-600 text-lg'>What 's the purpose of React Router?</h1>
                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary">Click</span> 
                        <div> <a href="#my-modal-1" className="btn"> Answer</a>
                            {/* <!-- Put this part before </body> tag --> */}
                            <div className="modal" id="my-modal-1">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">What 's the purpose of React Router?</h3>
                                <p className="py-4">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                                <div className="modal-action">
                                <a href="#" className="btn">okay</a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div><h1 className='my-4 italic text-sky-600 text-lg'>How does Context Api works?</h1>
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary">Click</span> 
                    <div><a href="#my-modal-2" className="btn">Answer</a>
                        {/* <!-- Put this part before </body> tag --> */}
                        <div className="modal" id="my-modal-2">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">How does Context Api works?</h3>
                            <p className="py-4">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.</p>
                            <div className="modal-action">
                            <a href="#" className="btn">okay</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div><h1 className='my-4 italic text-sky-600 text-lg'>What is useRef?</h1>
                <div className="indicator">
                    <span className="indicator-item badge badge-secondary">Click</span> 
                    <div><a href="#my-modal-3" className="btn">Answer</a>
                        {/* <!-- Put this part before </body> tag --> */}
                        <div className="modal" id="my-modal-3">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">What is useRef?</h3>
                            <p className="py-4">useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React, React will set its .current property to the corresponding DOM node whenever that node changes. <span className='fw-semibold'>Why we use useRef in React?</span> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
                            <div className="modal-action">
                            <a href="#" className="btn">okay</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div> </div>
        </div>
        </div>
    );
};

export default Blog;