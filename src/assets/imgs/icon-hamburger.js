import React from 'react'

const Hamburger = (props) => {
  return (
    <svg onClick={props.func} xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path onClick={props.func} d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>
  )
}

export default Hamburger
