import './home.css'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima recusandae natus veniam eveniet? Possimus fugit obcaecati laborum quaerat porro.',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima recusandae natus veniam eveniet? Possimus fugit obcaecati laborum quaerat porro.',
    img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima recusandae natus veniam eveniet? Possimus fugit obcaecati laborum quaerat porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima recusandae natus veniam eveniet? Possimus fugit obcaecati laborum quaerat',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minima recusandae natus veniam eveniet? Possimus fugit obcaecati laborum quaerat porro.',
    img: 'https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
]

const Home = () => {
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className='photo'>
              <img src={post.img} alt='' />
              <div className='alter'></div>
            </div>

            <div className='content'>
              <Link className='link' to={'/post/${post.id}'}>
                <h1>{post.title}</h1>
              </Link>
              <p className='homep'>{post.desc}</p>
              <button className='hbtn'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
