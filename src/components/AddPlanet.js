import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { BsXLg } from 'react-icons/bs';
import { usePlanetContext } from '../contexts/planetContext';

const AddPlanet = (props) => {
    const[image, setImage] = useState("")
    const[name, setName] = useState("")
    const[desc, setDesc] = useState("")
    const[message, setMessage] = useState(false)

    const { planetList, setPlanetList } = usePlanetContext()

    const handleForm = (e) => {
        e.preventDefault()
        if(image === "" || name === ""){
            setMessage(true) 
        }else{
            setMessage(false) 
            setImage("")
            setName("")
            setDesc("")
            setPlanetList([...planetList, {id: planetList.length + 1, name: name, img: image}])
        }
    }

    return (
        <Modal {...props} size="lg" backdrop="static" contentClassName="px-md-4 round">
            <div className="px-3">
                <div className="text-end pt-4">
                    <span className="closeBar fs-4 cursor border-0 text-dark" onClick={props.onHide}>
                        <BsXLg/>
                    </span>
                </div>
                <Modal.Title className="fw-bold display-4">Planet</Modal.Title>
            </div>
            <form className="px-3" onSubmit={handleForm}>
                <label htmlFor="image" className="fw-600 pb-1">Image</label>
                <input className="form-control border-0 form-bg" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                <p className="text-secondary">Paste the URL of a JPG or PNG of max 20 kb</p>

                <label htmlFor="name" className="fw-600 pb-1">Name</label>
                <input className="form-control border-0 form-bg mb-3" type="text"  value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="name" className="fw-600 pb-1">Description</label>
                <textarea className="form-control border-0 form-bg"  value={desc} onChange={(e) => setDesc(e.target.value)} id="" rows="3" style={{resize: "none"}}></textarea>
                <p className="text-danger pt-3">{message? "Bummer! We can’t create this planet right now. Probably a black hole in the way. Try later please." : ""}</p>
                
                <div className="d-flex px-3 align-items-center gap-3 pt-3 pb-5 justify-content-end">
                    <span className="closeBar fw-600 cursor py-2 px-3 border-0 text-dark"  onClick={props.onHide}>CANCEL</span>
                    <button className="text-white btn-bg py-2 px-3 border-0 fw-600" type="submit" onClick={()=> (image === "" || name === "")? console.log('verified'): props.onHide()} >CREATE PLANET</button>
                </div>
            </form>
        </Modal>
  );
    
}

export default AddPlanet
