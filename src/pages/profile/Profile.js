import './profile.css'
import Feed from '../../components/feed/Feed'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className='profile'>
        <Leftbar />
        <div className='profile-right'>
          <div className='profile-right-top'>
            <div className='profile-cover'>
              <img
                className='profile-cover-img'
                src='/assets/post/3.jpeg'
                alt=''
              />
              <img
                className='profile-user-img'
                src='/assets/person/7.jpeg'
                alt=''
              />
            </div>
            <div className='profile-info'>
              <h4 className='profile-info-name'>Loki Jackson</h4>
              <span className='profile-info-desc'>Hello my lovely friends</span>
            </div>
          </div>
          <div className='profile-right-bottom'>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
