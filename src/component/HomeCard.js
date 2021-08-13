import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import Truncate from 'react-truncate';
import { Badge } from 'react-bootstrap';

import '../App.css';

function badgevariant(inputSection) {
    inputSection = inputSection.toLowerCase();
    if (inputSection === 'world')
        return 'badge_world';
    else if (inputSection === 'politics')
        return 'badge_politics';
    else if (inputSection === 'business')
        return 'badge_business';
    else if (inputSection === 'technology')
        return 'badge_technology';
    else if (inputSection === 'sport' || inputSection === 'sports')
        return 'badge_sports';
    else if (inputSection === '')
        return 'bagde_null';
    else
        return 'badge_other';
}

function convertdate_format(inputDate) {
    var year = inputDate.substring(0, 4);
    var month = inputDate.substring(5, 7);
    var day = inputDate.substring(8, 10);
    return year + '-' + month + '-' + day;
}

class HomeCard extends React.Component {
    constructor() {
        super();
        this.state = { displayModal: true };
    }

    displayModal = () => {
        this.setState({
            displayModal: !this.state.displayModal
        });
    }

    handleClick(e) {
        e.preventDefault();
    }

    render() {

        var article = this.props.allinfo;
        var title;
        var imageURL;
        var section;
        var section_map;
        var date_art;
        var desc;
        var id;
        var webURL;

        if (article !== undefined) {
            title = article['webTitle'];
            try {
                var imagelen = article['blocks']['main']['elements']['0']['assets'].length;
                imageURL = article['blocks']['main']['elements']['0']['assets'][imagelen - 1]['file'];
            }
            catch (err) {
                imageURL = 'https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png';
            }
            if (article['sectionId'] !== undefined) {
                section = article['sectionId'];
                section_map = badgevariant(section);
                section = section.toUpperCase();
            }

            if (section === 'SPORT')
                section = 'SPORTS';
            if (article['webPublicationDate'] !== undefined)
                date_art = convertdate_format(article['webPublicationDate']);
            if (article['blocks'] !== undefined) {
                desc = article['blocks']['body']['0']['bodyTextSummary'];
                //if(desc.length > 390)
                //desc = desc.substring(0,390) + "...";
            }
            webURL = article['webUrl'];
            id = '/article?guid=' + article['id'] + '?';
        }

        if (this.state.displayModal) {
            return (
                <div className="hcard">
                    <Link className="hcard_link" to={id}>
                        <Container fluid>
                            <Row>
                                <MediaQuery minWidth={992}>
                                    <Col lg={3} style={{ padding: '5px', paddingRight: '25px' }}>
                                        <img src={imageURL} className="hcard_image" alt="" />
                                    </Col>
                                </MediaQuery>
                                <MediaQuery maxWidth={991}>
                                    <Col lg={3} style={{ padding: '5px' }}>
                                        <img src={imageURL} className='hcard_image' />
                                    </Col>
                                </MediaQuery>
                                <Col lg={9} style={{ padding: '5px' }}>
                                    <h5 style={{ fontWeight: '600' }}><i>{title}</i><span onClick={this.handleClick}></span></h5>
                                    <div style={{ marginRight: '0.25%' }}>
                                        <Truncate lines={3} ellipsis="...">
                                            {desc}
                                        </Truncate>
                                    </div><br /><br />
                                    <Container fluid>
                                        <Row>
                                            <Col xs={6} style={{ textAlign: 'left', padding: '0px', paddingBottom: '10px', fontStyle: 'italic', fontWeight: '550' }}>
                                                {date_art}
                                            </Col>
                                            <Col xs={6} style={{ textAlign: 'right', padding: '0px', paddingBottom: '10px' }}>
                                                <Badge bsPrefix={section_map}>{section}</Badge>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Link>
                </div>
            );
        }
        return (
            <div>
                {this.displayModal}
            </div>
        );
    }
}

export default HomeCard;