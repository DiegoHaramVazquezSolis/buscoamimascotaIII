import Link from 'next/link';

const NavBarDropdownLink = ({ href, children }) => {
    return (
        <Link href={href}>
            <a className='dropdown-item'>
                {children}
            </a>
        </Link>
    );
}

export default NavBarDropdownLink;