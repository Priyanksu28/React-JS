import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const{user} = useContext(UserContext)

    if(!user) {
        return <div>Please Login</div>
    }
    else {
        return <div>Welcome {user.username}
            
        </div>
        // console.log(${user.username});
            
    }
    
    
    
    
 
}

export default Profile
