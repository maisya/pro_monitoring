var data = [
    {
        text: 'text1',
        value: 'value1',
    },
    {
        text: 'text2',
        value: 'value2',
    },
    {
        text: 'text3',
        value: 'value3',
    },
]


nexigo.widget({
    text: 'BIODATA',
    toolbars: [

    ],
    views: [
        {
            type: 'row',
            panels: [{
                name: 'panel1',
                text: 'Full Panel with Row',
                fields: [
                    {
                        name: 'Input1',
                        type:'text',
                        text:'Ini input 1',
                        required: true,
                        cols: 6
                        
                    },
                    {
                        name: 'tanggal',
                        type: 'picker',
                        text: 'tanggal',
                        cols: 6
                    },
                    {
                        name: 'email_1_2',
                        type: 'email',
                        text: 'Email (readonly)',
                        cols: 4
                    },
                    {
                        name: 'Dropdown',
                        text: 'Dropdown',
                        type: 'select',
                        cols: 6,
                        /*data: [
                            {
                                text: 'text1',
                                value:'value1',
                            },
                            {
                                text: 'text2',
                                value: 'value2',
                            },
                            {
                                text: 'text3',
                                value: 'value3',
                            }
                        ]*/
                        data: 'http://localhost:31692/Api/makers/getData',
                        onChange: function (value) {
                            alert(value);
                        }
                    },
                    {
                        name: 'radiobutton',
                        type: 'radio',
                        data: data
                    },
                    {
                        type: 'content',
                        content: ''
                    },
                    {
                        type: 'button',
                        name: 'Alert',
                        text: 'alert',
                        action: function () {
                            alert("test");
                        }
                    },
                    {
                        name: 'TableGrid',
                        type: 'grid',
                        text: 'Grid',
                        fields: [
                            {
                                name: 'No',
                                text: 'NO',
                                type: 'string'
                            },
                            {
                                name: 'NIM',
                                text: 'NIM',
                                type: 'string'
                            },
                            {
                                name: 'Nama',
                                text: 'Nama',
                                type: 'string'
                            }
                            ], 
                            data:[
                                {
                                    No: '1',
                                    NIM: '123',
                                    Nama: 'Maisya'
                                },  
                                {
                                    No: '2',
                                    NIM: '124',
                                    Nama: 'Ayu'
                                }         
                             
                            ]
                    }
                ]
            }]
        }
    ],
    functions: {

        //doubleClick: function (row) {
        //    xg.loading.show();
        //    console.log(row);
        //    xg.populate(row);
        //    var data = xg.serialize();
        //    window.ProcessID = row.ProcessID;
        //    xg.loading.hide();
        //},

        //save: function () {
        //    var req = xg.serialize();
        //    xg.ajax({
        //        url: 'http://localhost:31602/api/CRUD/Create',
        //        type: 'POST',
        //        data: JSON.stringify(req),
        //        contentType: "application/json; charset=utf-8",
        //        success: function (data) {
        //            xg.loading.show();
        //            console.log(data);
        //            xg.loading.hide();
        //        },
        //        complete: function () {
        //            console.log("complete");
        //        }
        //    });
        //},


        init: function (xg, callback) {
            //alert('test');

            //xg.ajax({
            //    url: 'http://localhost:31602/api/employee/EmployeeList',
            //    data: {},
            //    type: 'POST',
            //    //dataType: 'json',
            //    contentType: "application/json; charset=utf-8",
            //    success: function (data) {
            //        console.log(data);
            //    },
            //    complete: function () {
            //        console.log("complete");
            //    }
            //});
            $('[xg-field="save"]').hide();
            callback();
        }
    }
});