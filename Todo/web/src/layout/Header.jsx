import axios from "axios"
import { useEffect } from "react"


export default function Header() {
  useEffect(()=>{
    axios.get("http://localhost:4000/api/me").then((res)=>{
      console.log(res)
    }).catch((e)=>{
      console.log(e.message);
    })
  })
  return (
    <div></div>
  )
}
