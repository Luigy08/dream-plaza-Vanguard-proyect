import './login.html';
import {Meteor} from 'meteor/meteor';
import { Router } from 'meteor/iron:router';

Template.login.events({
    'submit .login-form': async (event) => {
        event.preventDefault();
        const target = event.target;
        const username = target.loginUsername.value;
        const password = target.loginPassword.value;
        Meteor.loginWithPassword({username}, password, (err) => {
            if(err){
                throw err;
            }else{
                console.log('Logged in succesfully with ID:', Meteor.userId());
                Router.go('/');
                Meteor.logout((err)=>{
                    if(err){
                        throw err;
                    }
                
                });
            }
        });
    }
});