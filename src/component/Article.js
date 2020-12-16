import React from 'react'
import MediaQuery from 'react-responsive'
import { BounceLoader } from 'react-spinners';
import ArticleCard from './ArticleCard';

class Article extends React.Component {
    constructor() {
        super();
        // khi nào call api thì sửa lại chỗ loading mặc định là true
        this.state = { results: [], loading: false }
        this.fetch_one_article = this.fetch_one_article.bind(this);
    }

    fetch_one_article() {
        //fetch one article from api here

    }

    componentDidMount() {
        this.fetch_one_article();
    }

    render() {
        return (
            <div>
                <MediaQuery minWidth={992}>
                    {this.state.loading ?
                        <>
                            <div className='myLoader'>
                                <BounceLoader
                                    size={50}
                                    color={"#123abc"}
                                    loading={this.state.loading}
                                />
                                <h5 style={{ textAlign: 'center' }}>Loading</h5>
                            </div>
                        </> : <>
                            <ArticleCard allinfo={this.state.results}></ArticleCard>
                        </>
                    }
                </MediaQuery>
            </div>
        )
    }
}
export default Article;