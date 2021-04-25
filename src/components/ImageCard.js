import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { span: 0 }
        this.imageRef = React.createRef();
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan = () => {
        const span = Math.ceil(this.imageRef.current.clientHeight/10);
        this.setState({ span });
    }
    render() {
        const { description, urls } = this.props.image;
        return <img alt={description} src={urls.regular} ref={this.imageRef} style={{ gridRowEnd: `span ${this.state.span}` }} />
    }
}

export default ImageCard;