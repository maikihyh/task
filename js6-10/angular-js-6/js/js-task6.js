// window.onload = function() {
//     document.getElementById("box-").onclick = function () {
//         var num = document.getElementById("number").value;
//         var pas = document.getElementById("password").value;
//         var xmlhttp = new XMLHttpRequest();
//         xmlhttp.open("POST", "carrots-admin-ajax/a/login", true);
//         xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//         xmlhttp.send("name=" + num + "&" + "pwd=" + pas);
//         xmlhttp.onreadystatechange = function () {
//             if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//                var code =JSON.parse(xmlhttp.responseText);
//                if(code.code===0){
//                    }else{
//                    document.getElementById("nthe").innerHTML = code.message;
//                }
//                 console.log(xmlhttp.responseText)
//             }
//         }
//     };
// };
// $(document).ready(function() {
//     $("#box-").click(function () {
//         $.ajax({
//             type: "post",
//             url: "carrots-admin-ajax/a/login",
//             data: {//上传参数
//                 name: $("#number").val(),
//                 pwd: $("" + "#password").val()
//             },
//             dataType: "text",//数据格式
//             success: function (data) {
//                 console.log(data);
//                 var josn=JSON.parse(data);
//                 if (josn.code===0) {
//                 }else {
//                     $('#nthe').html(josn.message);
//                 }
//             },
//             error: function (jqObj) {
//                 console.log(jqObj.status)
//             }
//         });
//
//
//     });
//
// });
//


var app = angular.module('myApp', ['ngMessages']) ;
app.controller('siteCtrl', function($scope, $http) {
    $scope.login=function(){
        $http({
            method: "post", //请求发送的方式
            url: "carrots-admin-ajax/a/login",
            params:{
                name:$scope.text1,
                pwd:$scope.text2
            }
        })
            .then(
                function success() {
                    //请求成功时执行的代码
                }, function error() {
                    //请求失败时执行的代码
                }
            );
        // console.log($scope.text1);
        console.log()
    }
});