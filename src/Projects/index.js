import { useState } from 'react'

import './Projects.css'

function Projects() {

    // const [listProjects, setListProjects] = useState([])
    const [showProject, setShowProject] = useState("1")

    const listProjects = [
        {
            id: "1",
            name: "Online Portfolio",
            time: "05/2023 - Present",
            shortDesc: "An online portfolio helps everybody know more information about me.",
            desc:
                `This is my first personal project using ReactJS to build my website. 
                I have an idea to make it a long ago. 
                This project shows my front-end skill and provides more info about me to others. 
                Maybe it isn't pretty, but this is a stepping stone to improve myself.
                `
            ,

            position: (
                <div className='project__position' >
                    <p>My position:</p>
                    <ul>
                        <li>Front-end Developer: Using ReactJS to make this website.</li>
                        <li>Tool used: Visual Studio Code, Git/GitHub</li>
                    </ul>
                </div >
            ),

            technology: "Technologies: HTML, CSS, JavaScript, ReactJS.",

            link: (
                <a target='_blank' rel="noreferrer" style={{color: "rgb(99, 99, 207)", textDecoration:"underline"}} href='https://github.com/hoanghai912/portfolio'>https://github.com/hoanghai912/portfolio</a>
            )
        }, 

        {
            id: "2",
            name:"Smart Home Control",
            time: "02/2023 - 05/2023",
            shortDesc: "A website application provides a GUI to control devices through the internet.",
            desc:
                `This is my course project at university. 
                I co-op with six people and worked with them during the project's implementation. 
                This application can control home devices, such as light, fan, and door. 
                It also stores and statistics three fields: Temperature, Humidity, and Light Intensity. 
                On this project, I only designed and implemented the front end.
                `
            ,

            position: (
                <div className='project__position'>
                    <p>My position:</p>
                    <ul>
                        <li>Designer: Using Figma to design the website's layout</li>
                        <li>Front-end Developer: Using ReactJS to make this website (Welcome Page, Signin/Signup Page)</li>
                        <li>Tool used: Visual Studio Code, Git/GitHub</li>
                    </ul>
                </div>
            ),

            technology: "Technologies: HTML, CSS, JavaScript, ReactJS.",

            link: (
                <a target='_blank' rel="noreferrer" style={{color: "rgb(99, 99, 207)", textDecoration:"underline"}} href='https://github.com/hoanghai912/DA_TTNT-1'>https://github.com/hoanghai912/DA_TTNT-1</a>
            )
        }
    ]

    const Project = ({ name, time, shortDesc, desc, position, technology, link }) => {
        return (
            <div>
                <h3 className='project__name' style={{ margin: 0 }}>{name}</h3>
                <p className='project__time'>{time}</p>
                <p className='project__shortDesc'>{shortDesc}</p>
                <p className='project__desc' align="justify">{desc}</p>
                {position}
                <p className='project__technology'>{technology}</p>
                <p className='project__link'>GitHub: {link}</p>
            </div>
        )
    }

    const handleClickProject = (id) => {
        setShowProject(id)
    }

    const Navbar = () => {
        return (
            <div className='projects__navbar'>
                {listProjects.map((project, index) => {
                    return (
                        <div 
                            className="projects__navbar__project" 
                            key={index} 
                            onClick={() => handleClickProject(project.id)}
                            style={project.id === showProject ? 
                                {
                                    backgroundColor:"rgb(226, 250, 250)",
                                } 
                                : 
                                {}}
                        >
                            <p style={{fontSize:"2em", margin:0}}>📁</p> 
                            <p style={{margin:0, textAlign:"center"}}>{project.name}</p>
                        </div>
                        
                    )
                })}
            </div>
        )
    }

    return (
        <div className='projects background-all'>

            <div className='projects__wrapper'>

                <div className='projects__wrapper__group'>
                    <h2>PROJECTS</h2>
                    <Navbar/>
                </div>

                <div className='projects__wrapper__project'>
                    {listProjects.map((project, index) => {
                        return (
                            showProject === project.id && 
                            <Project 
                                key = {index}
                                {...project}
                            />
                        )
                    }
                    )}
                </div>

            </div>
        </div>
    )
}

export default Projects