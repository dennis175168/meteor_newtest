import { Template } from 'meteor/templating';
import './sqldata.html';
import { SQL } from '../../lib/mysql/sql.ts';
import { valueCallBack } from '../../lib/mysql/sql.ts';
import { Meteor } from 'meteor/meteor';
import { Reports } from '../../lib/collections.ts';

Template.sqldata.onCreated(function(){
  this.subscribe('reports');
});




Template.sqldata.events({
    
    'submit .insert'(event){
          event.preventDefault();
          //const target = event.target;
          const text = event.target.t1.value;//sql存入text
          const label = document.getElementById("l2").id;//要印的label的id存入label
          const col = "type";
          //console.log(label);
          SQL(text,label);
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






