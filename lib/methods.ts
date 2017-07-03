import { Meteor } from 'meteor/meteor';
import { Reports } from '../lib/collections';
import { HTTP } from 'meteor/http';

Meteor.methods({
    'insert'(id_name,title){
        // Reports.insert({
        //     id: id_name,
        //     title: title,
        //     createdAt: new Date(), // current time
        // });
        const sql = "insert into ";
        HTTP.post("http://127.0.0.1/ajax/server.php", { params: {sql} }, function(err){});
        //console.log(id_name);
    },
    'delete'(_ID , ID){
        //const id = Reports.findOne(this._id).id;
        console.log(ID+"/"+_ID);
        Reports.remove(_ID);
        const sql = "DELETE FROM reports WHERE id="+ID;
        HTTP.post("http://127.0.0.1/ajax/server.php", { params: {sql} }, function(err){});
    },
    'load'(){
        const sql = "select * from reports";
        HTTP.post("http://127.0.0.1/ajax/server.php", { params: {sql} }, function(err , data){
          Reports.remove({});
          console.log(data);
          const info = JSON.parse(data.content);
          console.log(info.length);
          //console.log(info[0].id);
          for(var i=0;i<=info.length;i++){
            const id = info[i].id;
            const title = info[i].title;
            const contact_person= info[i].contact_person;
            const contact_number = info[i].contact_number;
            const location = info[i].location;
            const content = info[i].content;
            const img = info[i].img;
            const type = info[i].type; 
            Reports.insert({
              id : id,
              title :title,
              contact_person :contact_person,
              contact_number :contact_number,
              location :location,
              content :content,
              img :img,
              type :type,
            });
          }
        });
    }
});