import React from 'react';
import HomeLayout from './HomeLayout';


class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeLayout newstype={'home'}></HomeLayout>
            </div>
        )
    }
}
export default Home;