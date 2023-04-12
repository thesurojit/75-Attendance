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
        props.p(present)
        props.t(total)
        let p = total * 0.75
        let a = p - present;
        if (a < 0) {
            setReq(0)
            let y = present - p;
            document.getElementById('nv').hidden = true
            document.getElementById('req').hidden = true
            document.getElementById('bunk').hidden = false
            document.getElementById("nul").hidden = true;
            setBunk(Math.ceil(y));

        }
        else if (a > 0) {
            setReq(Math.ceil(a))
            document.getElementById('nv').hidden = true
            document.getElementById('req').hidden = false
            document.getElementById('bunk').hidden = true
            document.getElementById("nul").hidden = true;
            setBunk(0)
        }
        else if (a === 0) {
            document.getElementById("nul").hidden = false;
            document.getElementById('nv').hidden = true
            document.getElementById('req').hidden = true
            document.getElementById('bunk').hidden = true
        }
        else {
            document.getElementById("nul").hidden = true;
            document.getElementById('nv').hidden = false
            document.getElementById('req').hidden = true
            document.getElementById('bunk').hidden = true
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
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Enter Total Days" onChange={getTotal} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={onSubmitForm}><h3>Submit</h3></button>
                </form>
            </div><br />
            <h4 id='nul' hidden="false">Current attendance <strong>75%</strong> attend next class to bunk 1 more class</h4>
            <strong><h6 id='nv' hidden="false">Proper values please ¯\\_(ツ)_//¯ </h6></strong>
            <h4 className='ans' id='req' hidden="false"> You need to attend <strong>{req}</strong> more classes to attain 75% attendance</h4><br />
            <h4 className='ans' id='bunk' hidden="false"> You can bunk <strong>{bunk}</strong> more classes while maintaining 75% attendance soo chill</h4>
            <div className="footer">
                <h5 align="center">Developer </h5>
                <a href="https://github.com/thesurojit"><h3 align="center"><i className="fa fa-github" ></i></h3></a>
            </div>
        </div>
    )
}
