import React from 'react'
import PropTypes from 'prop-types'
import s from "./FriendList.module.css"


const FriendList = ({friends, children}) => (
    <>
        {children}
    <ul className={s.friend__list}>
        {friends.map(({avatar,name,isOnline, id}) => (
            <li className={s.item} key={id}>
        <span className={isOnline? s.isOnline: s.isOffline}></span>
        <img className={s.avatar} src={avatar} alt="" width="48" />
        <p className={s.name}>{name}</p>
    </li>             
     ))}
        </ul>
        </>

)


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }) 
    )
}

export default FriendList