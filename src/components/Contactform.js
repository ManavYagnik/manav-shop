import React from 'react'
import { useState } from 'react'


const Contactform = () => {


    const [addNewUser, setaddNewUser] = useState({
        id: 1,
        firstname: "",
        lastname: "",
        email: "",
        city: "",
        subject: ""

    });


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setaddNewUser({ ...addNewUser, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { ...addNewUser };
        console.log("Form Submited", newUser);

        const res = fetch(`https://my-mongo-db-api.onrender.com/api/contacts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...addNewUser })

        })
    }



    return (
        <div>
            <div class="form-title"></div>

            <div class="form-main-container">
                <div class="contact-map-container">
                    <iframe title="myFrame" class="iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14677.676578990895!2d72.55596305!3d23.118349849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83d2a71b3863%3A0x81402b331b61ac9c!2sCarmel%20Godrej%20Garden%20City!5e0!3m2!1sen!2sin!4v1689743681535!5m2!1sen!2sin"
                        width="100%" height="435" frameborder="0" allowfullscreen="" ></iframe>


{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14677.676578990895!2d72.55596305!3d23.118349849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83d2a71b3863%3A0x81402b331b61ac9c!2sCarmel%20Godrej%20Garden%20City!5e0!3m2!1sen!2sin!4v1689743681535!5m2!1sen!2sin" width="100%" height="435" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                </div>




                <div class="container">
                    <form action='' onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-25">
                                <label for="fname"></label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="firstname" name="firstname" placeholder="Your Name.."
                                    value={addNewUser.firstname}
                                    onChange={handleInput}

                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="lname"></label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="lastname" name="lastname" placeholder="Your Last Name.."

                                    value={addNewUser.lastname}
                                    onChange={handleInput}


                                />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="fname"></label>
                            </div>
                            <div class="col-75">
                                <input type="text" id="email" name="email" placeholder="email.."

                                    value={addNewUser.email}
                                    onChange={handleInput}

                                />
                            </div>
                        </div>






                        <div class="row">
                            <div class="col-25">
                                <label for="city"></label>
                            </div>
                            <div class="col-75">
                                <select id="city" name="city" value={addNewUser.city} onChange={handleInput}>

                                    <option value="Ahmedabad">Ahmedabad</option>
                                    <option value="Vadodra">Vadodra</option>
                                    <option value="Surat">Surat</option>
                                    <option value="Rajkot">Rajkot</option>
                                    <option value="Jamnagar">Jamnagar</option>
                                    <option value="Mehsana">Mehsana</option>
                                    <option value="Anand">Anand</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-25">
                                <label for="subject"></label>
                            </div>
                            {/* <div class="col-75">
                    <input id="subject" name="subject" placeholder="Write Something.."
                        type='text' onChange={handleInput} value={addNewUser.subject}></input>
                </div> */}

                            <div class="col-75">
                                <textarea id="subject" name="subject" placeholder="Write something.."
                                    style={{ height: '200px' }} onChange={handleInput} value={addNewUser.subject}></textarea>
                            </div>






                        </div>
                        <br />
                        <div class="s-row" >

                            <input type="submit" value="Submit" />
                        </div>

                    </form>
                </div>





            </div>
        </div>
    )
}

export default Contactform
