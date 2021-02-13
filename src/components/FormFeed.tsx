import React, {useState, useEffect} from 'react'

import {useSetRecoilState} from 'recoil'
import BodyTextAtom, {BodyTextTypes} from '../state/bodyTextAtom'

import postFeed from '../getpost/postFeed'

const FormFeed = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const setBodyText = useSetRecoilState<BodyTextTypes>(BodyTextAtom);

    useEffect(() => {
        setBodyText({
            bannerText: "Post",
            headerText: "Make a Post"
        });
    }, []);

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

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // lol i need some form validation
        /*const res = await*/ postFeed(title, content);
    }

    return (
        <>
            <div className="body">
                <form className='FormFeed' onSubmit={handleSubmit}>
                    <p className="titleinput">Title:</p>
                    <input
                        type='text'
                        name='title'
                        value={title}
                        onChange={e => {handleChange(e, 'title')}}
                        autoComplete='off'
                        required
                    />

                    <p className="titleinput">Content:</p>
                    <input
                        type="text"
                        name="content"
                        value={content}
                        onChange={e => {handleChange(e, 'content')}}
                        autoComplete='off'
                        placeholder="Optional"
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>

        </>
    )
}

export default FormFeed;