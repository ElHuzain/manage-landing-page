import React from 'react'

const Link = ({name, dark = false, src}) => {

  const Style = `${dark ? "text-secondary-4 hover:text-primary-1": "text-primary-2 hover:opacity-80"} z-0 cursor-pointer w-fit font-[500]`;

  return (
    <a href={src} target="_blank" rel="noreferrer" className={Style}>
      {name}
    </a>
  )
}

export default Link
