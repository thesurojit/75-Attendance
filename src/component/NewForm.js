import React, { useState } from 'react'

export default function NewForm(props) {
    const [present, setPresent] = useState(0);
    const [total, setTotal] = useState(0);
    const [req, setReq] = useState(0);
    const [bunk, setBunk] = useState(0);

    function getTotal(val) {
        setTotal(val.target.value)
    }

    function getPresent(val) {
        setPresent(val.target.value)
    }

    const onSubmitForm = async (e) => {
        setReq(0)
        setBunk(0)
        props.p(present)
        props.t(total)
        if (props.p(present) === 0) {
            setReq("Proper values please ¯\\_(ツ)_/¯")
        }
        let x = 75 - present;
        let a = (x / total) * 100;
        if (a < 0) {
            setReq(0)
            let y = total - present;
            setBunk(y);
        }
        else {
            setReq(Math.ceil(a))
            setBunk(0)
        }



    }
    return (
        <div>
            <div className="Form">
                <form >
                    <div class="form-group">
                        <h3>Present Days</h3> <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Present Days" onChange={getPresent} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1"><h3>Total Days</h3></label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Total Days" onChange={getTotal} />
                    </div>
                    <button type="button" class="btn btn-primary" onClick={onSubmitForm}><h3>Submit</h3></button>
                </form>
            </div><br />
            <h4 className='ans'> You need to attend {req} more classes to attain 75% attendance</h4><br />
            <h4 className='ans'> You can bunk {bunk} more classes while maintaining 75% attendance soo chill</h4>
            <div className="footer">
                <h5 align="center">Developer </h5>
                <a href="https://github.com/thesurojit"><h1 align="center"><i className="fa fa-github" ></i></h1></a>
            </div>
        </div>
    )
}
