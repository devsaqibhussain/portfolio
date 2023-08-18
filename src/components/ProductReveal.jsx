import React , { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const ProductReveal = ({children}) => {

    const refrence = useRef(null);
    const mainControls = useAnimation()
    const inView = useInView( refrence,{once: true})

    useEffect(()=>{
        if(inView){
            mainControls.start("visible")
        }
    },[inView])

  return (
    <div ref={refrence}>
        <motion.div
            variants={{
                hidden: { opacity:0, scale: 0},
                visible: { opacity:1, scale: 1}
            }}
            initial = "hidden"
            animate = {mainControls}
            transition={{ duration: 1}}
        >
            {children}
        </motion.div>
    </div>
  )
}

export default ProductReveal