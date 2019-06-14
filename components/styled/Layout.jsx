const Layout = ({ children }) => {
    return (
        <div>
            {children}
            <style jsx global>{`
                .family-open-sans {
                    font-family: 'Open sans', sans-serif
                }
                .family-montserrat {
                    font-family: 'Montserrat', sans-serif
                }
            `}</style>
        </div>
    )
}

export default Layout;