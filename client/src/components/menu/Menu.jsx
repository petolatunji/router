import './menu.css'

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

const Menu = () => {
  return (
    <div className='mmenu'>
      <h1 className='mh'>Other posts you may like</h1>
      {posts.map((post) => (
        <div className='menupost' key={post.id}>
          <img src={post.img} alt='' className='mimg' />
          <h2>{post.title}</h2>
          <button className='mbtn'>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
