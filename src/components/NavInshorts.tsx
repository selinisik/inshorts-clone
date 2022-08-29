import './NavInshorts.css'
import HamburgerDrawer from './HamburgerDrawer'
type propType = {
  setCategory: (category:string) => void
}

const NavInshorts = (props:propType) => {
  return (
    <div className='nav'>
      <div className='icon'>
          <HamburgerDrawer setCategory={props.setCategory}/>
      </div>
      <img 
      style={{cursor:'pointer'}}
      src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' 
      height='79%'
      alt='logo'/>
    </div>
  )
}

export default NavInshorts