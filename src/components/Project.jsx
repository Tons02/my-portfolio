import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import Modal from "./Modal"
import { useState } from "react"


const Project = () => {
  const [openModals, setOpenModals] = useState(Array(PROJECTS.length).fill(false))

  const handleOpen = (index) => {
    const newModalsState = [...openModals]
    newModalsState[index] = true
    setOpenModals(newModalsState)
  }

  const handleClose = (index) => {
    const newModalsState = [...openModals]
    newModalsState[index] = false
    setOpenModals(newModalsState)
  }

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100}}
      transition={{  duration: 0.5}}
      className="my-20 text-center text-4xl">Projects</motion.h1>
      <div>
      {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.img 
                style={{ cursor: 'pointer' }}
                onClick={() => handleOpen(index)} 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                src={project.image[0]} 
                width={275} 
                height={300} 
                alt={project.title} 
                className="pr-4 pb-2"
              />
              <Modal 
                open={openModals[index]} 
                setOpen={() => handleClose(index)} 
                images={project.image || []} 
                title={project.title} 
                link={project.link}
              />
                </div>
                <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100}}
                transition={{  duration: 0.5}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <span className="text-sm text-purple-400">Development Period: {project.year}</span>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    <div className="flex flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="mr-2 pb-2">
                        <span className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Project
