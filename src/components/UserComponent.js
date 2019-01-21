import React, {Component} from 'react'
import {connect} from "react-redux";

class UserComponent extends Component {


    render() {
        return (
            <button type="submit" onClick={()=> this.props.fetchUsers()}>Fetch All Users</button>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers : () => {
            dispatch({
                type: 'FETCH_USERS'
            })
        }
    };
};



export default connect(null, mapDispatchToProps) (UserComponent);