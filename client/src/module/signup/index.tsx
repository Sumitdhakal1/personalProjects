import  { ChangeEvent, useState } from 'react'
import {postSignup} from '../../common/utility/apiCall'
import {useNavigate} from 'react-router-dom'
const index = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [visible, setVisible] = useState(false)
  
  const handelRegisterClick = async (e:any) => {
    e.preventDefault()
    try {
      await postSignup(email, password)
    } catch (err) {
      console.log(err)
    }
  }
  const handelEmailChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
   
  }
  console.log(email)
  const handelPasswordChange = (e:ChangeEvent<HTMLInputElement>) => {
    const passwordData = e.target.value 
    setPassword(passwordData)
  }

  // const navigate = useNavigate()

  // const handelNavigate = () => {
  //   navigate('/login')
  // }
  
  return (
    <>
      <div className="flex items-center flex-col mt-10">
        <div className="mb-10 text-large">create an account</div>
        <form action="" className="p-6 mx-w-sm mx-auto flex flex-col items-center justify-center bg-blue-100 shadow-lg space-x-4 rounded-md">
          <div className="flex items-center flex-col ">
            <span
             id='email'
              className="custom-span-email-password"
             >Email</span>
            <input type="text"
             placeholder='Email'
             value={email}
              className="custom-input-field"
              onChange={handelEmailChange}
               />
            <div
              className="custom-span-email-password mt-4"
              >
             <span className="" >Password</span>
              </div>
            <input type="text"
             placeholder='Password' 
            className="custom-input-field"
            value={password}
            onChange={handelPasswordChange} 
            onClick={() => setVisible(!visible)}
            />
          </div>
          <button className="custom-button" onClick={handelRegisterClick}>Signup</button>
          <span className='mt-2 text-medium'>
            Already have an account?
            <button className='ml-2 hover:text-bg-hover-color'>Login</button>
          </span>
        </form>
      </div>
    </>
  )
}

export default index