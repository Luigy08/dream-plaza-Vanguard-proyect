import './login.html';
import {Meteor} from 'meteor/meteor';

Template.login.events({
    'submit .login-form': async (event) => {
        event.preventDefault();
        const target = event.target;
        const username = target.loginUsername.value;
        const password = target.loginPassword.value;
        Meteor.loginWithPassword({username}, password, (err) => {
            if(err){
                throw err;
            }
            console.log('Logged in succesfully with ID:', Meteor.userId());
            Meteor.logout((err)=>{
                if(err){
                    throw err;
                }
            
            });
        });
    }
});