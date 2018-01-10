xg.widget({
    text: 'Login',
    toolbars: [
         
    ],
    views: [
        {
            type: 'fieldRow',
            cols: 4,
            offset: 5,
            fields: [{
                name: 'Name',
                text: 'Name'
            }, {
                type: 'password',
                name: 'Password',
                text: 'Password'
            }]
        },
        {

            type: 'fieldRow',
            cols: 4,
            offset: 7,
            fields: [{
                type: 'button',
                text: 'Login',
                offset: 2,
                stretch: true,
                cols: 4,
                action: 'login'
            }]
        }
    ],

    functions: {
        doubleClick: function (row) {
            xg.loading.show();
            console.log(row);
            xg.populate(row);
            var data = xg.serialize();
            window.ProcessName = row.ProcessName;
            xg.loading.hide();
        },
        login: function () {
            var tempString = "";
            var req = xg.serialize();
            window.Name = req.Name;
            xg.ajax({
                url: 'http://localhost:31602/api/Login/Log',
                type: 'POST',
                data: JSON.stringify(req),
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    alert('Silahkan Klik Ok')
                    if (result.Job_Title === 'Manager') {
                        xg.navigate('home/Manager');
                    }
                    else if (result.Job_Title === 'Scrum Master') {
                        xg.navigate('home/Scrum');
                    }
                    else if (result.Job_Title === 'Developer') {
                        xg.navigate('home/Developer');
                    }
                    else{
                        xg.navigate('home/Log In');
                    }
                },

               /*complete: function () {

                    if (tempString === "Ga ada di database") {
                        alert("Tidak bisa Log In");
                    }
                    else {
                        xg.navigate('home/Blank');
                        console.log("complete Login");
                    }

                }*/
            });

        },

       logout: function () {
         window.loginId = '';
       }
       // init: function (xg, callback) {
         //   $('[xg-field="save"]').hide();
           // callback();
        //}
    }
})
