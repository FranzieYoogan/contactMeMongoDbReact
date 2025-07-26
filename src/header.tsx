
import '../src/assets/css/header.css'
import contact from  '../src/assets/images/contact.png'
function Header() {

    return (

        <>
        

<nav className="navbarStyle bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={contact} className="h-8" alt="Contact" />
        <span className="titleHeaderStyle self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Contact Me</span>
    </a>
    
  </div>
</nav>

        </>

    )

}

export default Header