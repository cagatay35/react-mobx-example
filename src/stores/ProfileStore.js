import {observable, action } from 'mobx';

export class ProfileStore {

    @observable
    name;
    @observable
    surname;

    @action loadInitial() {
        this.name = 'cagatay';
        this.surname = 'gokcel';
    }

    @action update(name ,surname) {
        this.name = name;
        this.surname = surname;
    }
}