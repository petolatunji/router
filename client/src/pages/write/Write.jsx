import './write.css'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const [value, setValue] = useState('')
  return (
    <div className='writec'>
      <div className='contw'>
        <input className='writeInput' type='text' placeholder='Title' />
        <div className='editorCon'>
          <ReactQuill
            className='editor'
            theme='snow'
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='writeMenu'>
        <div className='itemw'>
          <h1 className='writeTitle'>Publish</h1>
          <span className='writeSpan'>
            <b>Status:</b> Draft
          </span>
          <span className='writeSpan'>
            <b>Visibility:</b> Public
          </span>
          <input style={{ display: 'none' }} type='file' id='file' name='' />
          <label htmlFor='file' className='file'>
            Upload Image
          </label>
          <div className='btns'>
            <button className='bf'>Save as a draft</button>
            <button className='bs'>Update</button>
          </div>
        </div>

        <div className='itemw'>
          <h1 className='writeTitle'>Category</h1>
          <div className='cates'>
            <input type='radio' name='cate' value='art' id='art' />
            <label htmlFor='art'>Art</label>
          </div>
          <div className='cates'>
            <input type='radio' name='cate' value='science' id='science' />
            <label htmlFor='art'>Science</label>
          </div>
          <div className='cates'>
            <input type='radio' name='cate' value='food' id='food' />
            <label htmlFor='art'>Food</label>
          </div>
          <div className='cates'>
            <input type='radio' name='cate' value='design' id='design' />
            <label htmlFor='art'>Design</label>
          </div>
          <div className='cates'>
            <input type='radio' name='cate' value='cinema' id='cinema' />
            <label htmlFor='art'>Cinema</label>
          </div>
          <div className='cates'>
            <input
              type='radio'
              name='cate'
              value='technology'
              id='technology'
            />
            <label htmlFor='art'>Technology</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
