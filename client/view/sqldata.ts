import { Template } from 'meteor/templating';
import './sqldata.html';
import { SQL } from '../../lib/mysql/sql.ts';
import { valueCallBack } from '../../lib/mysql/sql.ts';
import { Meteor } from 'meteor/meteor';
import { Reports } from '../../lib/collections.ts';

Template.sqldata.onCreated(function(){
  Meteor.call('load');
  this.subscribe('reports');
  
});




Template.sqldata.events({
    
     'submit .insert'(event){
           event.preventDefault();
           //const target = event.target;
           const text = event.target.t1.value;//sql存入text
    //       Meteor.call('insert',text);
     },

    'click .delete'(event){
      const _id = this._id;
      const id = Reports.findOne(this._id).id;
      Meteor.call('delete' , _id , id);
     },
    
});

Template.sqldata.helpers({
  repo(){
    return Reports.find();
  }

});


// var sql = "select * from reports";
//  $.post("http://127.0.0.1/ajax/server.php", {sql : sql}, function(data, status){
//         //console.log(data);
//         Template.sqldata.helpers({
//           data1(){
//             var a = "data[0]";
//             console.log(a);
//             return data; 
//           },
//         })
//     });






