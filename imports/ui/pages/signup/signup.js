import './signup.html';
import {Meteor} from 'meteor/meteor';

Template.signup.onRendered(async () => {
    await Meteor.call('user.findUserByEmail', 'asd@asd.com', (err, user) => {
        if (err){
            throw err;
        }
        console.log(user);
    });
});

Template.signup.events({
    'submit .signup-form': async (event) => {
        event.preventDefault();
        const target = event.target;
        const username = target.signupUsername.value;
        const password = target.signupPassword.value;
        const email = target.signupEmail.value;
        await Meteor.call('user.createUser', { email, username, password}, true, (err, user) => {
            if(err){
                throw err;
            }
            console.log('User created succesfully');
        });
    }
});
