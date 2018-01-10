nexigo.widget({
    text: 'PROJECT MONITORING',
    toolbars: [

    ],
    views: [
        {
            type: 'row',
            panels: [{
                name: 'panel1',
                text: 'Header',
                fields: [
                    {
                        text: 'IT CM/SR/HP PID',
                        name: 'ITCM_SR_HPPID',
                        type: 'text',
                        cols: 3,
                        required: true
                    },
                    {
                        text: 'Project Title',
                        name: 'ProjectTitle',
                        type: 'text',
                        cols: 4,
                        required: true
                    },
                    {
                        text: 'Business Analyst/Technical Analyst',
                        name: 'Business_Analyst',
                        type: 'select',
                        cols: 4,
                        placeholder: '--Choose your specialist--',

                        data: [
                            {
                                text: 'Business Analyst',
                                value: 'Business Analyst'
                            },
                            {
                                text: 'Technical Analyst',
                                value: 'Technical Analyst'
                            }
                        ]
                    },
                    {
                        name: 'Web_Project_Identity',
                        text: 'Web Project Identity',
                        type: 'select',
                        cols: 4,
                        placeholder: '--Choose project identities--',

                        data: [
                            {
                                text: 'zzz',
                                value: 'zzz'
                            },
                            {
                                text: 'test',
                                value: 'test'
                            },
                            {
                                text: 'xxx',
                                value: 'xxx'
                            }
                        ]
                    },
                    {
                        name: 'Project_Controller',
                        text: 'Project Controller',
                        type: 'select',
                        cols: 4,
                        placeholder: '--Choose project Controller--',

                        data: [
                            {
                                text: 'html',
                                value: 'html'
                            },
                            {
                                text: 'css',
                                value: 'css'
                            },
                            {
                                text: 'js',
                                value: 'js'
                            }
                        ]
                    },
                    {
                        name: 'Department',
                        text: 'Department ',
                        type: 'select',
                        cols: 4,
                        placeholder: '--Choose Department--',

                        data: [
                            {
                                text: 'html',
                                value: 'html'
                            },
                            {
                                text: 'css',
                                value: 'css'
                            },
                            {
                                text: 'js',
                                value: 'js'
                            }
                        ]
                    },
                    {
                        name: 'Project_Type',
                        text: 'Project Type',
                        type: 'select',
                        cols: 4,
                        placeholder: '--choose project Type--',

                        data: [
                            {
                                text: 'aaa',
                                value: 'aaa'
                            },
                            {
                                text: 'bbb',
                                value: 'bbb'
                            },
                            {
                                text: 'ccc',
                                value: 'ccc'
                            }
                        ]
                    },
                    {
                        name: 'Key_User',
                        text: 'Key User',
                        cols: 3,
                        type: 'text',
                        required: 'true'
                    },

                ]
            }]
        },

        {
            type: 'row',
            panels: [{
                name: 'panel1',
                text: 'Detail',
                fields: [
                    {
                        text: 'Start Date',
                        type: 'picker',
                        required: 'true',
                        cols: 3,
                        name: 'Star_Date',
                        format: 'DD MMMM YYYY'
                    },
                    {
                        name: 'Priority_Type',
                        text: 'Priority Type',
                        type: 'select',
                        cols: 4,
                        placeholder: '--Choose  Priority Type--',

                        data: [
                            {
                                text: 'html',
                                value: 'html'
                            },
                            {
                                text: 'css',
                                value: 'css'
                            },
                            {
                                text: 'js',
                                value: 'js'
                            }
                        ]
                    },
                    {
                        name: 'Usage',
                        text: 'Usage',
                        cols: 4,
                        type: 'textarea',
                        required: 'true'
                    },
                    {
                        name: 'Note',
                        text: 'Note',
                        cols: 4,
                        type: 'textarea',
                        required: 'true'
                    },

                ]
            }]

        },
        {
            type: 'row',
            panels: [{
                name: 'panel1',
                text: 'Development & Implementation',
                fields: [
                    {
                        type: 'row',
                        panels: [{
                            name: 'leftPanel',
                            text: 'Project Plan',
                            cols: 6,
                            fields: [{
                                text: 'Total Manhours',
                                name: 'Total_Manhours',
                                cols: 4,
                                type: 'select',
                                required: 'true',
                                placeholder: '--Total Manhourse--',
                                data: [
                                    {
                                        text: '1',
                                        value: '1'
                                    },
                                    {
                                        text: '2',
                                        value: '2'
                                    },
                                    {
                                        text: '3',
                                        value: '3'
                                    }
                                ]
                            },
                            {
                                text: 'End Date',
                                type: 'picker',
                                required: 'true',
                                cols: 4,
                                name: 'Ended',
                                format: 'DD MMMM YYYY'
                            },
                            {
                                text: 'Ready for BA  testing',
                                type: 'picker',
                                required: 'true',
                                cols: 4,
                                name: 'Ready_for_BA_Testing',
                                format: 'DD MMMM YYYY'
                            },
                            {
                                name: 'UAT',
                                text: 'UAT ',
                                type: 'picker',
                                required: 'true',
                                cols: 4,
                                format: 'DD MMMM YYYY'
                            },
                            {
                                text: 'Live',
                                type: 'picker',
                                required: 'true',
                                cols: 4,
                                name: 'LIVE',
                                format: 'DD MMMM YYYY'
                            },]
                        }, {
                            name: 'rightPanel',
                            text: 'Actual',
                            cols: 6,
                            fields: [{
                                text: 'Total Manhours',
                                name: 'Total_Manhours1',
                                cols: 4,
                                type: 'select',
                                required: 'true',
                                placeholder: '--Total Manhourse--',
                                data: [
                                    {
                                        text: '1',
                                        value: '1'
                                    },
                                    {
                                        text: '2',
                                        value: '2'
                                    },
                                    {
                                        text: '3',
                                        value: '3'
                                    }
                                ]
                            },
                            {
                                text: 'End Date',
                                type: 'picker',
                                required: 'true',
                                cols: 4,
                                name: 'Ended1',
                                format: 'DD MMMM YYYY'
                            },
                            {
                                text: 'Ready for BA  testing',
                                type: 'picker',
                                required: 'true',
                                cols: 4,
                                name: 'Ready_for_BA_Testing1',
                                format: 'DD MMMM YYYY'
                            },
                            {
                                text: 'UAT ',
                                type: 'picker',
                                required: 'true',
                                cols: 4,
                                name: 'UAT1',
                                format: 'DD MMMM YYYY'
                            },
                            {
                                text: 'Live',
                                type: 'picker',
                                required: 'true',
                                cols: 4,
                                name: 'LIVE1',
                                format: 'DD MMMM YYYY'
                            }]
                        }]
                    },

                ]
            }]
        },
        {
            type: 'row',
            panels: [{
                name: 'panel1',
                text: 'Comments History',
                fields: [
                    {
                        name: 'Tambelkomen',
                        type: 'grid',
                        text: 'Comment Data',
                        fields:
                        [
                            {
                                name: 'commentdata',
                                text: 'Comment Data',
                                type: ' string'
                            },
                            {
                                name: 'commentby',
                                text: 'Comment By',
                                type: 'string'
                            },
                            {
                                name: 'current',
                                text: 'Current Status',
                                type: ' string'
                            },
                            {
                                name: 'comment',
                                text: 'Comment ',
                                type: ' string'
                            },
                        ],
                        data: [
                            {

                                commentdata: 'satu',
                                commentby: '123',
                                current: '456',
                                comment: 'hgf'

                            },
                            {
                                commentdata: 'dua',
                                commentby: '123',
                                current: '456',
                                comment: 'hgf'

                            },
                            {
                                commentdata: 'tiga',
                                commentby: 'fsddfs',
                                current: '45dsfsd6',
                                comment: 'hsdfsgf'

                            },
                            {
                                commentdata: 'emoat',
                                commentby: '123',
                                current: '456',
                                comment: 'hgf'

                            },
                        ]

                    },
                ]

            }]

        },
        {
            type: 'row',
            inline: true,
            panels: [{
                name: 'history',
                text: 'Write your Comments',
                fields: [
                    {
                        type: 'textarea',
                        cols: 8

                    },

                    {
                        type: 'upload',
                        name: 'uploader1',
                        icon: 'fa-upload',
                        cols: 4,
                        data: { url: 'api/file/uploadeds' }
                        //uploadUrl: 'http://localhost:53390/api/material/attachment/upload'
                    }
                ]
            }]
        },
        {
            type: 'row',
            inline: true,
            panels: [{
                type: 'buttons',
                buttons: [
                    { name: 'save', text: 'Submit', icon: 'fa-save', cssClass: 'xg-btn-info', action: 'save' },
                    { name: 'update', text: 'Save As Draft', icon: 'fa-save', cssClass: 'xg-btn-success', action: 'update' },
                    { name: 'cancle', text: 'Cancel', icon: 'fa-undo', cssClass: 'xg-btn-warning' },
                ]
            }]
        },
        {

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

        save: function () {
            var req = xg.serialize();
            xg.ajax({
                url: 'http://localhost:31602/api/Manager/Create',
                type: 'POST', 
                data: JSON.stringify(req),
                contentType: "application/json; charset=utf-8",
                success: function(data) {
                    xg.loading.show();
                    console.log(data);
                    xg.loading.hide();
                   
                },
                error: function () {
                    alert('error')
                },
                complete: function () {
                    console.log("complete");
                }
            //    type: 'POST',
            });
        },


        init: function (xg, callback) {
            //alert('test');

            //xg.ajax({
            //    url: 'http://localhost:31602/api/employee/EmployeeList',
            //    data: {},
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