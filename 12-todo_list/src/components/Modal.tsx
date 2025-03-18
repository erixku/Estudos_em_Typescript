import React, {useRef, useState} from 'react'
import styles from './Modal.module.css'

type Props = {
    children: React.ReactNode
}

const Modal = ({children}: Props) => {
    const [isOpen, setIsOpen] = useState(true);
    const modalRef = useRef<HTMLDivElement>(null);

    const closeModal = (e: React.MouseEvent):void => {
        if (modalRef.current) {
            modalRef.current.classList.add("hide");
            setIsOpen(false);
        }
    }

  return (
        <>
            {isOpen && (<div id="modal" className='hide'>
                            <div className={styles.fade} ref={modalRef} onClick={closeModal}></div>
                            <div className={styles.modal}>
                                <h2>Texto Modal</h2>
                                {children}
                            </div>
                        </div>
                    )}
        </>
    
  )
}

export default Modal