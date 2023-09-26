import './NavList.css'

export default function NavList({children}) {
    return (
        <div className='navlist'>
            <ul>
                {children}
            </ul>
        </div>
    )
}