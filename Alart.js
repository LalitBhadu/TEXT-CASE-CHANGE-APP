import React from 'react'

export default function Alart(props) {
  return (
    <div class="alert alert-warning alert-dismissible fade show my-2" role="alert">
    <strong>{props.Alart}Use Text Case for your Text change case</strong>
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
  )
}
//  setInterval(() => {
   
//  }, 3000);