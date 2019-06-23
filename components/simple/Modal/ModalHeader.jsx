import H4Styled from "../../styled/Headline/H4Styled";

const ModalHeader = ({ children }) => {
    return (
        <H4Styled className='mt-2 ml-3'>{children}</H4Styled>
    )
}

export default ModalHeader;