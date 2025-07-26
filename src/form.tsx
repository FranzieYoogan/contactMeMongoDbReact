import { useState } from 'react'
import '../src/assets/css/form.css'
import axios from 'axios'
function Form() {

    const [firstName,setFirstName] = useState<string>('')
    const [lastName,setLastName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [message,setMessage] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault(); 

        const data = {

            firstName,
            lastName,
            email,
            message
        }

        await axios.post('http://localhost:3000/contacts',data);
        window.location.reload();

    }

    return (

        <>

        <div
  className="formLocation mx-auto block max-w-md rounded-lg bg-white p-6 shadow-4 dark:bg-surface-dark">
  <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-2 gap-4">
      
      <div className="relative mb-6" data-twe-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput123"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          aria-describedby="emailHelp123"
          placeholder="First name" required/>
       
      </div>

      
      <div className="relative mb-6" data-twe-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleInput124"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          aria-describedby="emailHelp124"
          placeholder="Last name" required/>
      
      </div>
    </div>

    
    <div className="relative mb-6" data-twe-input-wrapper-init>
      <input
        type="email"
        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput125"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address" required />
        
    
    </div>

    <div>

        <textarea name="message" id="message" placeholder='message' className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        
        >

        </textarea>

    </div>

    
    <button
      type="submit"
      className="buttonStyle inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Submit
    </button>
  </form>
</div>
        
        </>

    )

}

export default Form