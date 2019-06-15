import { primaryColor, primaryColorRGB } from "./Constants";

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
                .raised-button {
                    color: #FFF;
                    background: ${primaryColor};
                    box-shadow: 0px 2px 4px rgba(${primaryColorRGB}, 0.35);
                }
                .raised-button:hover {
                    color: #FFF;
                    background: rgba(${primaryColorRGB}, 0.9);
                    box-shadow: 0px 4px 4px rgba(${primaryColorRGB}, 0.35);
                }
                .raised-button:active {
                    color: #FFF;
                    background: ${primaryColor};
                    box-shadow: 0px 2px 4px rgba(${primaryColorRGB}, 0.35);
                }
                .raised-button:focus {
                    box-shadow: 0px 2px 4px rgba(${primaryColorRGB}, 0.35);
                }
                .outlined-button {
                    background: transparent;
                    color: ${primaryColor};
                    border: 2px solid ${primaryColor};
                }
                .outlined-button:hover {
                    background: rgba(${primaryColorRGB}, 0.1);
                    border: 2px solid rgba(${primaryColorRGB}, 0.8);
                    color: ${primaryColor};
                    box-shadow: none;
                }
                .outlined-button:active {
                    background: rgba(${primaryColorRGB}, 0.3) !important;
                    border: 2px solid ${primaryColor} !important;
                    color: ${primaryColor} !important;
                    box-shadow: none;
                }
                .outlined-button:focus {
                    box-shadow: none;
                }
            `}</style>
        </div>
    )
}

export default Layout;