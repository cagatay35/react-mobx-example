import React from 'react';
import {observer, inject} from 'mobx-react';



@inject('profileStore')
@observer
class ProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.profileStore.loadInitial();
    }

    render() {

        return (
            <div>
                <p>
                    {this.props.profileStore.name + ' ' + this.props.profileStore.surname}
                </p>
            </div>);
    }

}

export default ProfileComponent;
