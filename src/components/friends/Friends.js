import './friends.css'

export default function Friends({ user }) {
  return (
    <div>
      <li className='leftbar-friend'>
        <img className='leftbar-friend-img' src={user.profilePicture} alt='' />
        <span className='leftbar-friend-name'>{user.username}</span>
      </li>
    </div>
  )
}
