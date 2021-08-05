import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './LogOut.css'


const LogOut = () => {
    // const [check, setCheck] = useState(false)
    const handleLogOut=()=>{
        localStorage.clear()
        
    }
    return (
        <div className="logout">
            <h1>Click on the button below to disconnect your account</h1>
            <Link to="/">
            <Button variant="secondary" onClick={handleLogOut}>
                Sign Out
            </Button>
            </Link>
        </div>
    )
}

export default LogOut
