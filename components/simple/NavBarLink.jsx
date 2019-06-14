import Link from 'next/link';

const NavBarLink = ({ children, href, activeLink, className }) => {
    return (
        <>
            <Link href={href}>
                <a className={`${className ? className : ''} ${activeLink === href ? 'active' : ''}`}>
                    {children}
                </a>
            </Link>
            <style jsx>{`
                a {
                    color: rgba(0,0,0,.5);
                    text-decoration: none;
                    background-color: transparent;
                    cursor: pointer;
                }
                .active {
                    color: rgba(0,0,0,.9);
                }
            `}</style>
        </>
    );
}

export default NavBarLink;