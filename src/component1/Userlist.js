import React, { useEffect, useState } from 'react';

const Userlist = ({user}) => {



    
    return(
       <div>
           <h4>
            {user.nickname} 
           </h4>
       </div>
    )
}

export default Userlist;