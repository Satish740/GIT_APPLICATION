import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function UserItem({user:{login ,avatar_url} }) {
  return (
    <div className='card shadow-md compact side bg-base-100'> 
    <div className='flex-row items-center space-x-4 card-body'>
        <div>
        <div className='avatar'>    
        <div className='rounded-full shadow w-14 h-14'>
            <img src={avatar_url} alt={login}/>
        </div>
        </div>
        </div>
    <div>
    <h2 className='card-title text-white'>{login}</h2>
    <Link to={`/user/${login}`} className='btn  hover:bg-blue-500 hover:text-white text-grey btn-xs ' >Visit Profile</Link>
    </div>
    </div>
    </div>
  )
}

UserItem.propTypes={
user:PropTypes.object.isRequired
}



export default UserItem
