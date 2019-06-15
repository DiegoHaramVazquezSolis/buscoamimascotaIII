import PropTypes from 'prop-types';
import TextForButtons from '../styled/TextForButtons';

const FacebookLoginButton = ({ className, onClick }) => {
    return (
        <>
            <button className={`btn fb-button pt-2 pb-2 ${className ? className : ''}`} onClick={onClick}>
                <TextForButtons>
                    <>
                        <i className='fab fa-facebook-f fa-lg mr-2'></i> Iniciar sesión con facebook
                    </>
                </TextForButtons>
            </button>
            <style jsx>{`
                .fb-button {
                    padding-right: 16px;
                    padding-left: 16px;
                    box-shadow: 0px 2px 4px rgba(76, 105, 186, 0.25);
                    border-radius: 4px;
                    color: #fff;
                    transition: box-shadow 300ms ease-in-out, background 300ms ease-in-out;
                    background-color: #4C69BA;
                }
                .fb-button:hover {
                    box-shadow: 0px 4px 4px rgba(76, 105, 186, 0.30);
                    background: rgba(76, 105, 186, 0.9);
                }
                .fb-button:active {
                    background: rgba(76, 105, 186, 0.8);
                    box-shadow: 0px 8px 4px rgba(76, 105, 186, 0.25);
                }
            `}</style>
        </>
    );
}

FacebookLoginButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default FacebookLoginButton;
