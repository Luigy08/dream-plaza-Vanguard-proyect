import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles'
import SimpleSchema from 'simpl-schema';

Meteor.methods({

    async 'user.createUser'(user, isAdmin) {
        new SimpleSchema({
            email: {
                required: true,
                type: String,
                regEx: SimpleSchema.RegEx.Email
            },
            password: {
                required: true,
                type: String,
                min: 5
            },
            username: {
                required: true,
                type: String,
                min: 1
            }
        }).validate({
            email: user.email,
            password: user.password,
            username: user.username
        });
        if(Meteor.isServer){
        console.log('simon')
        
        return Roles.addUsersToRoles(Accounts.createUser(user), isAdmin === true? 'admin' : 'client');
        }
    },

    async 'user.isAdmin'() {
        return await Roles.userIsInRole(Meteor.userId(), 'admin');
    },

    async 'user.findUserByEmail'(email) {
        return await Accounts.findUserByEmail(email);
    }
});