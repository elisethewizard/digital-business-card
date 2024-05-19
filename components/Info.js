import React from 'react'

export default function Info(){
    return (
        <section className='info'>
            <img src='https://via.placeholder.com/317x317' />
            <h1>Elizabeth Smith</h1>
            <h2>Frontend Developer</h2>
            <a href=''>elizabethsmith.website</a>
            <div className='main-socials'>
                <button><i className='bx bxs-envelope' style={{color: '#1E1F26'}}></i>Email</button>
                <button className='blue'><i className='bx bxl-linkedin-square'></i>LinkedIn</button>
            </div>
        </section>
    )
}