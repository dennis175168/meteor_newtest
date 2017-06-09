
export function SQL(sql1 , col1, callback){

    var request = new XMLHttpRequest();
    request.open("POST", "http://127.0.0.1/ajax/server.php" );
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//必寫
    var Data = "sql="+sql1;//存資料
    request.send(Data);//整包丟

    request.onreadystatechange = function() {
        // 伺服器請求完成
        if (request.readyState === 4) {
            // 伺服器回應成功
            if (request.status === 200) {
                var type = request.getResponseHeader("Content-Type");   // 取得回應類型

                // 判斷回應類型，這裡使用 JSON
                if (type.indexOf("application/json") === 0) {
                    //var data = JSON.parse(request.responseText);
                    var data = (request.responseText);
                    

                     if (data) {
                            if(col1 == null){
                                var result = JSON.parse(data)[0]["type"];
                                console.log(result);
                                cb(result);
                                if (typeof callback == "function") {
                                    // apply() sets the meaning of "this" in the callback
                                    callback.apply(request);
                                };
                                //return result;

                                
                                //return document.getElementById(label1).innerHTML = result;
                                //return document.getElementById(label1).innerHTML = "no";
                            }
                            //  var result1 = JSON.parse(data)[col1];
                            //  return document.getElementById(label1).innerHTML = result1;

                     }
                     else {
                         //document.getElementById("label").innerHTML = "error";
                         return "error";
                     }
                }
            } else {
                alert("發生錯誤: " + request.status);
            }
        }
    }
     function cb(value){
        console.log(value);
        return value;
     }; 
     
};



