import './online.css'

export default function Online({ user }) {
  return (
    <div>
      <li className='rightbar-friend'>
        <div className='rightbar-img-container'>
          <img
            className='rightbar-profile-img'
            src={user.profilePicture}
            alt=''
          />
          <span className='rightbar-online'></span>
        </div>
        <span className='rightbar-user-name'>{user.username}</span>
      </li>
    </div>
  )
}
