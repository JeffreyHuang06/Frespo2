import React, {useState} from 'react'

import postFeed from '../getpost/postFeed'

const FormFeed = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        switch (field) {
            case 'title':
                setTitle(e.target.value);
                break;
            
            case 'content':
                setContent(e.target.value);
                break;
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // lol i need some form validation
        postFeed(title, content);
    }
    
    return (
        <form className='FormFeed' onSubmit={handleSubmit}>
            Title: <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={e => {handleChange(e, 'title')}}
                    required/>

            Content:    <input
                        type="text"
                        name="content"
                        value={content}
                        onChange={e => {handleChange(e, 'content')}}
                        required/>

            <button type="submit">Submit</button>
        </form>
    )
}

export default FormFeed;