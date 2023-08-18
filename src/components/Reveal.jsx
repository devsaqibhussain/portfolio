import React, {useRef, useEffect} from 'react'
import { motion, useInView, useAnimation, easeIn } from 'framer-motion'



const Reveal = ({children}) => {
    const ref = useRef(null);
    const inView = useInView( ref, {once: true});
    const mainControls = useAnimation();
    const slideControls = useAnimation();             

    useEffect(()=>{
        if (inView) {
            mainControls.start("visible")
            slideControls.start("visible")
        }
    },[inView])

  return (
    <div ref={ref} className=' overflow-hidden w-fit relative'>
        <motion.div
            variants={{
                hidden:{ opacity: 0, y: 75},
                visible:{ opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25}}
        >
            {children}
        </motion.div>
        <motion.div
            variants={{
                hidden:{ left: 0},
                visible:{ left: "100%"}
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration:0.5, ease: easeIn}}
            className=' absolute bg-green-400 z-20 top-0 right-0 bottom-0 left-0'
        />
    </div>
  )
}

export default Reveal