import { Template } from 'meteor/templating';
 
import { Data } from '../../lib/data.ts';
 

 
Template.login.helpers({
  data() {
    return Data.find({});
  },
});

Template.login.events({
    'submit .new'(event){

        event.preventDefault();
        const target = event.target;
        const text = target.text.value;
        console.log(text);
        Data.insert({
            text: text,
            createdAt: new Date(), // current time
        });
        target.text.value = '';

     },

     'click .delete'(event){
        Data.remove(this._id);
     },
});