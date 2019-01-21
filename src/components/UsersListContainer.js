import React, {Component} from 'react'
import {connect} from 'react-redux'

class UsersListContainer extends Component {


    render() {

        let userList = <React.Fragment>No Users!</React.Fragment>;
        if (this.props.users) {
            const users = this.props.users.map((user, index) => (
                <li >
                    <div >
                        {user.name} | {user.age}
                    </div>
                </li>
            ));
            userList = <div>Loaded {this.props.users.length} users <ul>{users}</ul></div>
        }
        return (
            <div>{userList}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userActions.userList
    };
};

export default connect(mapStateToProps)(UsersListContainer);