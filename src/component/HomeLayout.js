import React from 'react';
import MediaQuery from 'react-responsive';
import BounceLoader from 'react-spinners/BounceLoader';
import HomeCard from './HomeCard';


var response;

class HomeLayout extends React.Component {
    constructor() {
        super();
        this.state = { results: [], loading: true };
        this.fetch_news = this.fetch_news.bind(this);

    }

    fetch_news() {
        var url = 'http://jmparekhhw8.us-east-1.elasticbeanstalk.com/guardian/' + this.props.newstype;
        const that = this;

        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('lỗi');
                        return;
                    } else {
                        console.log('thành công');
                    }

                    response.json().then(data => {
                        that.setState({ results: data.response.results, loading: false })
                    })
                }
            );



    }

    componentDidMount() {
        this.fetch_news();
    }

    render() {
        let rows = [];
        for (let i = 0; i < this.state.results.length && i < 10; i++) {
            rows.push(<HomeCard allinfo={this.state.results[i]} key={i} />)
        }
        return (
            <div>
                <MediaQuery minWidth={992}>
                    {this.state.loading ?
                        <>
                            <div className="myLoader">
                                <BounceLoader
                                    size={50}
                                    color={'blue'}
                                    loading={this.state.loading}
                                />
                                <h5 style={{ textAlign: 'center' }}>Loading</h5>
                            </div>
                        </> : <>
                            {rows}
                        </>
                    }
                </MediaQuery>
                <MediaQuery maxWidth={991}>
                    {this.state.loading ?
                        null : <>
                            {rows}
                        </>
                    }
                </MediaQuery>
            </div>
        );
    }
}

export default HomeLayout;