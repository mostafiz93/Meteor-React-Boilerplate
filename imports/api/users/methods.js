import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const bcrypt = require('bcrypt');

Meteor.methods({
  'user.create':function(data){
       if(data.code != 'army101') throw new Meteor.Error(500, 'Wrong Activation Code', 'Wrong Activation Code');
       return Accounts.createUser({
         name: data.name,
         username: data.userId,
         password: data.password,
       });
  }
});
