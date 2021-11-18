import React, { useState, useContext } from 'react'
import { Modal } from 'react-bootstrap';
import { BsXLg, BsChevronDown} from 'react-icons/bs';
import { CharacterContext } from '../contexts/characterContext'

const AddCharacter = (props) => {
    const{ charList, setCharList } = useContext(CharacterContext)

    const[image, setImage] = useState("")
    const[name, setName] = useState("")
    const[desc, setDesc] = useState("")
    
    const[message, setMessage] = useState(false)

    const handleForm = (e) => {
        e.preventDefault()
        if(image === "" || name === ""){
            setMessage(true) 
        }else{
            setMessage(false) 
            setImage("")
            setName("")
            setDesc("")
            setCharList([...charList, {id: charList.length + 1, img: image, name: name}])
        }
    }

    return (
        <Modal {...props} size="lg" backdrop="static" contentClassName="px-md-4 round">
            <div className="px-3">
                <div className="text-end pt-4">
                    <span onClick={props.onHide} className="closeBar fs-4 cursor border-0 text-dark"  >
                        <BsXLg/>
                    </span>
                </div>
                <Modal.Title className="fw-bold display-4">Character</Modal.Title>
            </div>
            <form className="px-3" onSubmit={handleForm}>
                <label htmlFor="image" className="fw-600 pb-1">Image</label>
                <input className="form-control border-0 form-bg" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                <p className="text-secondary">Paste the URL of a JPG or PNG of max 20 kb</p>

                <label htmlFor="name" className="fw-600 pb-1">Name</label>
                <input className="form-control border-0 form-bg mb-3" type="text"  value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="name" className="fw-600 pb-1">Description</label>
                <textarea className="form-control border-0 form-bg"  value={desc} onChange={(e) => setDesc(e.target.value)} id="" rows="3" style={{resize: "none"}}></textarea>
               
                <label htmlFor="name" className="fw-600 pb-1 mt-3">Friends</label>
                <div className="form-control d-flex justify-content-between border-0 form-bg mb-3" type="text" >
                    <div className="d-flex add-friend rounded align-items-center gap-2">
                        <img className="round-sm rounded" src={ require('../images/characters/character-2.png')} width="28px" height="28px" alt="profile pic" />
                        <p className="mb-0">Jane Cooper</p>
                        <p className="mb-0 text-secondary ms-2 cursor">{<BsXLg/>}</p>
                    </div>
                    <p className="mb-0 text-dark fs-5 cursor">{<BsChevronDown/>}</p>
                </div>
                <p className="text-danger pt-3">{message? " later please." : ""}</p>
                
                <div className="d-flex px-3 align-items-center gap-3 pt-3 pb-5 justify-content-end">
                    <span className="closeBar fw-600 cursor py-2 px-3 border-0 text-dark"  onClick={props.onHide}>CANCEL</span>
                    <button className="text-white py-2 px-3 btn-bg border-0 fw-600" type="submit" onClick={() => (image === "" || name === "")? console.log('verified'): props.onHide()} >CREATE CHARACTER</button>
                </div>
            </form>
        </Modal>
  );
    
}

export default AddCharacter
