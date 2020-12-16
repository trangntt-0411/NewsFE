import React from 'react';
import { IconContext } from 'react-icons';
import HomeCard from './component/HomeCard';
import HomeLayout from './component/HomeLayout';
import { Route, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import Home from './component/HomePage';
import Article from './component/Article';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AsyncSelect from 'react-select';
import MediaQuery from 'react-responsive';



class Register extends React.Component {

    inSearchPage = () => {
        if (window.location.href.includes('/search'))
            return true;
        return false;
    }

    handleSearchChange = () => {

    }

    render() {
        return (
            <div>
                <IconContext.Provider value={{ color: "white", size: "1.25em" }}>
                    <Navbar bg="primary" variant="dark" className="mynavbar" expand='lg'>
                        <MediaQuery minWidth={992}>
                            <div style={{ width: '20%' }}>
                                {this.inSearchPage() ?
                                    <AsyncSelect
                                        placeholder='Enter keyword'
                                        onChange={this.handleSearchChange}
                                    /> : <AsyncSelect
                                        placeholder='Enter keyword'
                                        value={''}
                                        onChange={this.handleSearchChange}
                                    />
                                }
                            </div>
                        </MediaQuery>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink to="/" activeClassName={"active"} className="nav-link" exact={true}>Home</NavLink>
                                <NavLink to="/world" activeClassName={"active"} className="nav-link">World</NavLink>
                                <NavLink to="/politics" activeClassName={"active"} className="nav-link">Politics</NavLink>
                                <NavLink to="/business" activeClassName={"active"} className="nav-link">Business</NavLink>
                                <NavLink to="/technology" activeClassName={"active"} className="nav-link">Technology</NavLink>
                                <NavLink to="/sports" activeClassName={"active"} className="nav-link">Sports</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </IconContext.Provider>
                <main>
                    <Switch>
                        <Route exact path='/' render={(props) => <Home></Home>}></Route>
                        <Route exact path='/article' component={Article}></Route>
                    </Switch>
                </main>
            </div>
        )
    }
}

export default withRouter(Register)
