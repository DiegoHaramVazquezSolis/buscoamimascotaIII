import PropTypes from 'prop-types';

const ListItem = ({ children }) => {
    return (
        <>
            <div className={`listItem`}>
                {children}
            </div>
            <style jsx>{`
                .listItem {
                    padding-left: 8px;
                    padding-right: 8px;
                    padding-top: 8px;
                    padding-bottom: 8px;
                    width: 100%;
                    display: flex;
                    position: relative;
                    box-sizing: border-box;
                    text-align: left;
                    align-items: center;
                    justify-content: flex-start;
                    text-decoration: none;
                    border: 0;
                    margin: 0;
                    background-color: transparent;
                }
            `}</style>
        </>
    );
}

ListItem.propTypes = {
    children: PropTypes.element.isRequired
};

export default ListItem;
