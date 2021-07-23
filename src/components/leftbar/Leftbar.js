import './leftbar.css'
import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
} from '@material-ui/icons'

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='leftbar-wrapper'>
        <ul className='leftbar-list'>
          <li className='leftbar-list-item'>
            <RssFeed className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Feed</span>
          </li>
          <li className='leftbar-list-item'>
            <Chat className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Chats</span>
          </li>
          <li className='leftbar-list-item'>
            <PlayCircleFilledOutlined className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Videos</span>
          </li>
          <li className='leftbar-list-item'>
            <Group className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Groups</span>
          </li>
          <li className='leftbar-list-item'>
            <Bookmark className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Bookmarks</span>
          </li>
          <li className='leftbar-list-item'>
            <HelpOutline className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Questions</span>
          </li>
          <li className='leftbar-list-item'>
            <WorkOutline className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Jobs</span>
          </li>
          <li className='leftbar-list-item'>
            <Event className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Events</span>
          </li>
          <li className='leftbar-list-item'>
            <School className='leftbar-icon' />
            <span className='leftbar-list-item-text'>Courses</span>
          </li>
        </ul>
        <button className='leftbar-button'>Show More</button>
        <hr className='leftbar-hr' />
        <ul className='leftbar-friend-list'>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
          <li className='leftbar-friend'>
            <img
              className='leftbar-friend-img'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='leftbar-friend-name'>Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
