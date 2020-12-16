import React from 'react';

class PageWithComments extends React.Component {

    render() {
        return (
            <div className="commentbox" id={this.props.art_id}></div>
        )
    }
}

export default PageWithComments;