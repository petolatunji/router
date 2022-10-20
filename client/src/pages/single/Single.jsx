import './single.css'
import Edit from '../../image/edit.png'
import Delete from '../../image/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../../components/menu/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt=''
          className='cimg'
        />
        <div className='user'>
          <img
            src='https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vdGJhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt=''
            className='simg'
          />
          <div className='info'>
            <span className='username'>Look</span>
            <p className='pd'>Posted 5 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt='' className='edt' />
            </Link>

            <img src={Delete} alt='' className='del' />
          </div>
        </div>
        <h1 className='sTitle'>Lorem ipsum dolor sit amet consectetur.</h1>
        <p className='sPara'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          facere! Dolorum, reiciendis repudiandae! Provident qui ratione beatae
          vero, praesentium, repellat et laborum sapiente reiciendis iste
          perferendis sunt modi repellendus? Corrupti quo labore, pariatur ut,
          iusto quis nisi nihil officia facere nobis fuga quidem, suscipit odit
          amet magni enim animi. Tempora ipsam odio, nobis pariatur libero
          nostrum ad enim fuga necessitatibus quas totam. Provident, suscipit et
          temporibus nulla consectetur harum veniam, laborum velit nisi dolor,
          molestiae consequuntur. Saepe ratione consectetur officia architecto
          expedita cupiditate rem eligendi necessitatibus dicta vitae corrupti
          pariatur voluptas eos iure accusamus porro ut, molestias nisi, itaque
          sapiente? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Optio ipsam hic rerum facere, eos ad saepe est a laudantium cumque,
          maxime quaerat! Porro numquam excepturi ipsa fugit. Eos unde placeat
          molestiae et? Consectetur nostrum quo rem obcaecati ex placeat porro
          voluptatum! Nihil ipsam atque rerum iure amet voluptate suscipit
          earum, voluptas cumque minima voluptatibus quaerat sequi a inventore
          harum nobis praesentium illum quia. Eos voluptatum, nemo esse autem
          dolore quas tenetur aspernatur obcaecati architecto earum provident
          blanditiis quasi est sed nobis assumenda ullam porro consequuntur ipsa
          deleniti similique nostrum magnam cupiditate. Veniam eaque dolore,
          consequuntur molestiae ex necessitatibus saepe incidunt.
        </p>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default Single
