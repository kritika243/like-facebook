import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className='birthday-container'>
          <img className='birthday-img' src='/assets/gift.png' alt='' />
          <span className='birthday-text'>
            <b>Ashley Dextere</b> and <b>3 others</b> have their birthdays
            today.
          </span>
        </div>
        <img src='/assets/ad.png' alt='' className='rightbar-ad' />
        <h4 className='rightbar-title'>Online Friends</h4>
        <ul className='rightbar-friend-list'>
          {Users.map((u) => (
            <Online user={u} key={u.id} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className='rightbar-title'>User Information</h4>
        <div className='rightbar-info'>
          <div className='rightbar-info-item'>
            <span className='rightbar-info-key'>City: </span>
            <span className='rightbar-info-value'>New York</span>
          </div>
          <div className='rightbar-info-item'>
            <span className='rightbar-info-key'>From: </span>
            <span className='rightbar-info-value'>Chicago</span>
          </div>
          <div className='rightbar-info-item'>
            <span className='rightbar-info-key'>Relationship: </span>
            <span className='rightbar-info-value'>Single</span>
          </div>
        </div>
        <h4 className='rightbar-title'>User Friends</h4>
        <div className='rightbar-followings'>
          <div className='rightbar-following'>
            <img
              src='/assets/person/1.jpeg'
              alt=''
              className='rightbar-following-image'
            />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img
              src='/assets/person/2.jpeg'
              alt=''
              className='rightbar-following-image'
            />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img
              src='/assets/person/3.jpeg'
              alt=''
              className='rightbar-following-image'
            />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img
              src='/assets/person/4.jpeg'
              alt=''
              className='rightbar-following-image'
            />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img
              src='/assets/person/5.jpeg'
              alt=''
              className='rightbar-following-image'
            />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
          <div className='rightbar-following'>
            <img
              src='/assets/person/6.jpeg'
              alt=''
              className='rightbar-following-image'
            />
            <span className='rightbar-following-name'>John Doe</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbar-wrapper'>
        <ProfileRightBar />
      </div>
    </div>
  )
}
