import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightbar-wrapper'>
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
      </div>
    </div>
  )
}
