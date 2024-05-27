import { ChangeEvent, useState } from 'react'
import {ContactMe} from '../../../common/utility/apiCall'
const Contact = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handelRegisterClick = async (e:any) => {
        e.preventDefault()
        try {
          await ContactMe(email, subject,message)
        } catch (err) {
          console.log(err)
        }
      }

    const handelEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)

    }
   const handelSubjectChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setSubject(e.target.value)
   }
   const handelMessageChange = (e: ChangeEvent<HTMLTextAreaElement>)=>{
    setMessage(e.target.value)
   }

    return (
        <form action="" className='flex flex-col items-center'>
            <div className='flex flex-col'>
                <span>Email</span>
                <input type="text"
                 className='input-field' 
                 value={email}
                 onChange={handelEmailChange}
                 />
            </div>
            <div className='flex flex-col'>
                <span>Subject</span>
                <input type="text"
                 className='input-field'
                 value={subject}
                 onChange={handelSubjectChange}
                 />
            </div>
            <div className='flex flex-col'>
                <span>Message</span>
                <textarea 
                className='border-2 border-black w-[400px] h-[200px] resize-none'
                value={message}
                onChange={handelMessageChange}
                 />
            </div>
            <button className='border-2 border-black mt-2 px-4 hover:bg-sidebar hover:text-white' onClick={handelRegisterClick}>Submit</button>
        </form>

    )
}

export default Contact