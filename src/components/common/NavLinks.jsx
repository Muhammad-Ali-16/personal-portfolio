import { useState } from 'react'

function NavLinks({border}) {

    const [activeSection, setActiveSection] = useState('home');
    const NavLinks = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'What I Do' },
        { id: 'resume', label: 'Resume' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'contact', label: 'Contact' }
    ]

    return (
        <>
            {NavLinks.map((navlink) => (
                <li className={`transition duration-150 hover:text-[var(--text-secondary)] ${border} ${activeSection == navlink.id ? 'text-[var(--text-secondary)]' : "text-[var(--heading-light)]"}`} key={navlink.id}><a href={`#${navlink.id}`} onClick={() => { setActiveSection(navlink.id) }}>{navlink.label} </a></li>
            ))}
        </>
    )
}

export default NavLinks
