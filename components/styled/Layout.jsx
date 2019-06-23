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
                .text-button {
                    padding-right: 16px;
                    padding-left: 16px;
                    background: transparent;
                    border-radius: 4px;
                    box-shadow: none !important;
                    color: ${primaryColor};
                    transition: background 300ms ease-in-out;
                }
                .text-button:hover {
                    background: rgba(${primaryColorRGB}, 0.1);
                    box-shadow: none !important;
                    color: ${primaryColor};
                }
                .text-button:active {
                    background: rgba(${primaryColorRGB}, 0.2);
                    box-shadow: none !important;
                }
                .text-button:focus {
                    box-shadow: none;
                    box-shadow: none !important;
                }
                .text-button.disabled {
                    background: none;
                    cursor: pointer;
                    color: rgba(0, 0, 0, 0.4);
                }
                .card {
                    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12);
                }
            `}</style>
        </div>
    )
}

export default Layout;