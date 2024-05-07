import React, { useEffect, useState } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'


const Singin = () => {
  const [value,setvalue] = useState("")
  const handlecick = () =>{
    signInWithPopup(auth,provider).then((data) =>{
setvalue(data.user.email)
localStorage.setItem('email',data.user.email)
    })
  }

useEffect(() =>{
setvalue(localStorage.getItem('email'))
},[])

  return (
    <div>
      {value?<Home/>:
    <button onClick={handlecick} >goggle </button>
  }
    </div>
  )
}

export default Singin