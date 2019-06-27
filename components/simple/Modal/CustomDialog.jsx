import { primaryColor } from '../../styled/Constants';

class CustomPublicationDialog extends React.Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.escFunction = this.escFunction.bind(this);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.escFunction);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.escFunction);
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.onHide();
        }
    }
    escFunction(event){
        if(event.keyCode === 27) {
            this.props.onHide();
        }
    }
    render() {
        const { show, children } = this.props;
        return (
            <>
                <div className='title' role='dialog'>
                    <div className='overlay' style={{ opacity: show ? 1 : 0, transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}></div>
                    <div className='dialogContainer' style={{ opacity: show ? 1 : 0, transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                        <div className='dialog' ref={this.setWrapperRef}>
                            <div style={{ color: primaryColor }}>
                                <i className='fas fa-times-circle float-right fa-2x mr-2 mt-2' style={{ cursor: 'pointer' }} onClick={() => this.props.onHide()}></i>
                            </div>
                            <div className='dialogBody mt-3'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>{`
                    html {
                        overflow: ${show ? 'hidden' : ''};
                    }
                `}</style>
                <style jsx>{`
                    .title {
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: ${show ? '1000' : '-1'};
                        position: fixed;
                        transition: z-index 226ms;
                    }
                    .overlay {
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: -1;
                        position: fixed;
                        touch-action: none;
                        background-color: rgba(0, 0, 0, 0.5);
                        -webkit-tap-highlight-color: transparent;
                    }
                    .dialogContainer {
                        height: 100%;
                        outline: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .dialog {
                        max-width: 1200px;
                        width: 100%;
                        height: calc(100% - 90px);
                        flex: 0 1 auto;
                        margin: 48px;
                        display: flex;
                        position: relative;
                        overflow-y: auto;
                        flex-direction: column;
                        box-shadow: 0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12);
                        border-radius: 4px;
                        background-color: #fff;
                        transition: width 300ms ease-in-out, height 300ms ease-in-out;
                    }
                    @media (max-width: 768px) {
                        .dialog {
                            width: 100%;
                            margin: 0;
                            height: 100%;
                            max-width: 100%;
                            max-height: none;
                            border-radius: 0;
                        }
                    }
                    .dialogTitle {
                        flex: 0 0 auto;
                        margin: 0;
                        padding: 24px 24px 20px;
                    }
                `}</style>
            </>
        );
    }
}

export default CustomPublicationDialog;