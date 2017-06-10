import { Meteor } from 'meteor/meteor';
import { Reports } from '../lib/collections';
import { HTTP } from 'meteor/http';

import '../lib/data.ts';

Meteor.startup(() => {
  // code to run on server at startup
  
  const sql = "select * from reports";
    HTTP.post("http://127.0.0.1/ajax/server.php", { params: {sql} }, function(err , data){
          //console.log(data);
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
            // Reports.insert({
            //   id : id,
            //   title :title,
            //   contact_person :contact_person,
            //   contact_number :contact_number,
            //   location :location,
            //   content :content,
            //   img :img,
            //   type :type,
            // });
          }
        });
});
