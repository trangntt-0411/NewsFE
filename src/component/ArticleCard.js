import React from 'react';
import { Container } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { Row } from 'react-bootstrap';
import { FaRegBookmark } from 'react-icons/fa';
import { Col } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip';
import PageWithComments from './PageWithComment';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import '../App.css';


function convertdate_format(inputDate) {
    var year = inputDate.substring(0, 4);
    var month = inputDate.substring(5, 7);
    var day = inputDate.substring(8, 10);
    return year + '-' + month + '-' + day;
}

class ArticleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bmark_icon: <FaRegBookmark />, my_article: [] };

    }


    render() {
        var article = this.props.allinfo;
        var title;
        var imageURL;
        var date_art;
        var desc;
        var desc_more;
        var webURL;
        var is_desc_small = false;
        var id;

        return (
            <div>
                <ReactTooltip id="exp_page" effect='solid' className="tooltips" place='top' />
                <IconContext.Provider value={{ color: "#DD303D", size: "1.5em" }}>
                    <div className='expandcard'>
                        <Container fluid>
                            <Row>
                                <Col lg={12} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                    <h2 style={{ fontWeight: '400' }}><i>Title here</i></h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} style={{ fontSize: '1.2rem', textAlign: 'left', paddingRight: '10px', paddingLeft: '10px' }}>
                                    <i>16-12-2020</i>
                                </Col>
                                <Col xs={6} style={{ textAlign: 'right', paddingLeft: '0px' }}>
                                    <span style={{ paddingLeft: '10px' }}>{this.state.bmark_icon}</span>
                                </Col>
                            </Row>
                            <Row style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                                <img src="https://media.guim.co.uk/1d0777b320ede31fe174cf428c6ecce005cd5c91/69_0_5396_3237/master/5396.jpg" className='expandimage' alt="" />
                                <Container fluid>
                                    <Row style={{ textAlign: 'left' }}>
                                        <Col style={{ paddingLeft: '0px', paddingRight: '0px', marginTop: '20px' }}>
                                            At his coronavirus briefing Mark Drakeford, the first minister of Wales, confirmed that further joint advice from the four nations would be published later covering Christmas. He said: In the few short weeks since we made this decision, the situation has changed drastically as coronavirus has gripped. Later today, we will publish further joint advice across the UK, explaining that a smaller Christmas is a safer Christmas. Here in Wales over the Christmas period the clear message from the Welsh government is that only two households should meet. That is how serious it is in Wales. Pressed over whether this was a rule or advice, he said: “The message is the same.” He clarified that a single person household would be able to join two other households. Drakeford denied there was “bickering” at the four nations meeting on the Christmas rules this morning. He said it was a “very sober reflection on the level of challenge we are facing.” Explaining the decision to close non-essential retail businesses after the end of trading on Christmas Eve, Drakeford said: The modelling does demonstrate that if we were to have a position in which large numbers of people come together for. Boxing Day sales, then that’s another form of mixing. But asked why hospitality was not being shut down now given the seriousness of the situation, he said: There’s more than one form of harm from coronavirus. We know that many people who live alone arrange their Christmas by booking a meal on Christmas Day, so that they can be in the company of other people. I wanted to be able to honour that so that those people do not face an even bleaker Christmas, even more alone than they otherwise would be with all the other harms that come from that. Everything we do is a balance between one form of harm and another. Allowing hospitality to continue to 6pm on Christmas Day protects the plans that people have made - particularly those who are lonely and isolated - and allows the industry itself to come to an orderly close.
                                        </Col>
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                    </div>
                    <PageWithComments art_id={0} />
                </IconContext.Provider>
                <ToastContainer autoClose={3000} transition={Zoom} hideProgressBar={true} position="top-center" />
            </div>
        )
    }
}

export default ArticleCard;