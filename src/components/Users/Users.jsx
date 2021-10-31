import React from "react";
import axios from 'axios'


const Users = ({users, follow, unfollow, setUsers}) => {
    if(users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => setUsers(res.data.items))
    }
    

    return(
        <div>
            {users.map((u)=>{ return(
                 <div key={u.id}>
                 <span>
                     <div>
                         <img style={{width:'100px'}} src={u.photo}/>
                     </div>
                     <div>
                         {u.followed? <button onClick={()=>{unfollow(u.id)}}> Unfollow </button>:  <button onClick={()=>{follow(u.id)}}> Follow </button>}
                     </div>
                 </span>
                 <span>
                     <span>
                         <div>
                             {u.fullName}
                         </div>
                         <div>
                             {u.status}
                         </div>
                     </span>
                     <span>
                         <div>
                             {u.location.city}
                         </div>
                         <div>
                             {u.location.country}
                         </div>
                     </span>
                 </span>
             </div>
            )
           
            })}
        </div>
    )
}

export default Users;