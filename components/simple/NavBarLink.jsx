import Link from 'next/link';

const NavBarLink = ({ children, href, activeLink, className }) => {
    return (
        <>
            <Link href={href}>
                <a active={activeLink === href} className={`${className ? className : ''}`}>
                    {children}
                </a>
            </Link>
            <style jsx>{`
                a {
                    color: ${activeLink === href ? 'rgba(0,0,0,.9)' : 'rgba(0,0,0,.5)'};
                    text-decoration: none;
                    background-color: transparent;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

export default NavBarLink;