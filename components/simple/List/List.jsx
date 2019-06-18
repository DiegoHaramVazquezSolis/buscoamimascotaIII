import PropTypes from 'prop-types';

const List = ({ children }) => {
    return (
        <>
            <div>
                {children}
            </div>
            <style jsx>{`
                div {
                    width: 100%;
                    background-color: #fff;
                    padding-top: 8px;
                    padding-bottom: 8px;
                    background-color: #fff;
                    border-radius: 4px;
                }
            `}</style>
        </>
    );
}

List.propTypes = {
    children: PropTypes.element.isRequired
};

export default List;