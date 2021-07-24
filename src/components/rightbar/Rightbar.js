import './rightbar.css'

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
          <li className='rightbar-friend'>
            <div className='rightbar-img-container'>
              <img
                className='rightbar-profile-img'
                src='/assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbar-online'></span>
            </div>
            <span className='rightbar-user-name'>Norma Eadse</span>
          </li>
          <li className='rightbar-friend'>
            <div className='rightbar-img-container'>
              <img
                className='rightbar-profile-img'
                src='/assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbar-online'></span>
            </div>
            <span className='rightbar-user-name'>Norma Eadse</span>
          </li>
          <li className='rightbar-friend'>
            <div className='rightbar-img-container'>
              <img
                className='rightbar-profile-img'
                src='/assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbar-online'></span>
            </div>
            <span className='rightbar-user-name'>Norma Eadse</span>
          </li>
          <li className='rightbar-friend'>
            <div className='rightbar-img-container'>
              <img
                className='rightbar-profile-img'
                src='/assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbar-online'></span>
            </div>
            <span className='rightbar-user-name'>Norma Eadse</span>
          </li>
          <li className='rightbar-friend'>
            <div className='rightbar-img-container'>
              <img
                className='rightbar-profile-img'
                src='/assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbar-online'></span>
            </div>
            <span className='rightbar-user-name'>Norma Eadse</span>
          </li>
          <li className='rightbar-friend'>
            <div className='rightbar-img-container'>
              <img
                className='rightbar-profile-img'
                src='/assets/person/3.jpeg'
                alt=''
              />
              <span className='rightbar-online'></span>
            </div>
            <span className='rightbar-user-name'>Norma Eadse</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
