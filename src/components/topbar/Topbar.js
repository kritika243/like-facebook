import './topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbar-container'>
      <div className='topbar-left'>
        <span className='logo'>Facebook Socials</span>
      </div>
      <div className='topbar-center'>
        <div className='searchbar'>
          <Search className='search-icon' />
          <input
            placeholder='Search for friends, posts, videos'
            className='search-input'
          />
        </div>
      </div>
      <div className='topbar-right'>
        <div className='topbar-links'>
          <span className='topbar-link'>Home Page</span>
          <span className='topbar-link'>Timeline</span>
        </div>
        <div className='topbar-icons'>
          <div className='topbar-icon-item'>
            <Person />
            <span className='topbar-icon-badge'>1</span>
          </div>
          <div className='topbar-icon-item'>
            <Chat />
            <span className='topbar-icon-badge'>2</span>
          </div>
          <div className='topbar-icon-item'>
            <Notifications />
            <span className='topbar-icon-badge'>1</span>
          </div>
        </div>
        <img src='/assets/person/1.jpeg' alt='' className='topbar-img' />
      </div>
    </div>
  )
}
