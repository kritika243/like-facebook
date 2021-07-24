import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed-wrapper'>
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
