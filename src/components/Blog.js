import React from "react";

class Blog extends React.Component {
    constructor(){
        super();
        this.state = {
            preview: null
        };
    }

    componentDidMount(){
        Promise.resolve(this.props.converter.makeHtml(this.props.data.content)).then((preview)=>{
            this.setState((prev) => {
                prev.preview = preview;
                return prev;
            });
        })
    }

    render(){
        let content = this.state.preview
            ? <div style={{maxHeight: 500, overflow: "auto"}} dangerouslySetInnerHTML={{ __html: this.state.preview || "<p>&nbsp;</p>" }} />
            : <div>Loading</div>;
        return (
            <div className="content">
                <br />
                {content}
            </div>
        );
    }
}

export default Blog;
