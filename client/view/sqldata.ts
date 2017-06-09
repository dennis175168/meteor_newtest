import { Template } from 'meteor/templating';
import './sqldata.html';
import { SQL } from '../../lib/mysql/sql.ts';
import { valueCallBack } from '../../lib/mysql/sql.ts';
import { Meteor } from 'meteor/meteor';



var Items = new Meteor.Collection('items');
var Results = new Meteor.Collection(null); 
var sql = "select * from reports";
Items.insert({_id: "2", result: "888"});
//console.log(Items.find());

//  $.get("http://127.0.0.1/ajax/test.php", {id : id}, function (data) {
//    Items.find().observeChanges({
//     added: function (id) {
//       console.log(data);
//       if (Results.findOne(id))//尋找_id裡面有沒有html傳來的id
//         Results.update(id, {$set: {result: data}});
//       else
//         Results.insert({_id: id, result: data});
//     }
//     });
//   });
Items.find().observeChanges({
  added: function (id) {
    $.get("http://127.0.0.1/ajax/test.php", {id : id}, function (data) {
      console.log(data);
      if (Results.findOne(id)){//尋找_id裡面有沒有html傳來的id
        console.log("1");
        Results.update(id, {$set: {result: data}});
      }
      else{
        console.log("3");
        Results.insert({_id: id, result: data});
      }
        
    });
  }
});



Template.sqldata.itemName = function (id) {
  console.log(id);
  var doc = Results.findOne(id);
  if (doc)
    return doc.result;
  else
    return "fail";
};

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



// Template.sqldata.events({
    
//     'submit .insert'(event){
//           event.preventDefault();
//           //const target = event.target;
//           const text = event.target.t1.value;//sql存入text
//           const label = document.getElementById("l2").id;//要印的label的id存入label
//           const col = "type";
//           //console.log(label);
//           SQL(text,label);
//     },
    
// });









