import React from "react";
import {observer, inject} from 'mobx-react';

@inject('profileStore')
@observer
class UpdateProfileComponent extends React.Component {

    constructor(props) {
        super(props);
        const {profileStore} = this.props;
        profileStore.loadInitial();
    }

    render() {
        const {name,surname} = this.props.profileStore;

        return (
            <div>
                <p>
                    <button onClick={() => {this.updateProfile();}} value={'BAM'}/>
                </p>
            </div>);
    }


    updateProfile() {
        alert('GO')
        this.props.profileStore.update('osman','ebidik');
    }
}

export default UpdateProfileComponent;