nexigo.widget({
    name: 'scrum',
    text: 'Developer',
    views:
    [{
        type: 'row',
        panels: [{
            name: 'panel1',
            fields:
            [{
                text: 'Development Issue',
                type: 'panel',
                name: 'inlinePanel',
                inline: true,
                cols: 7,
                fields: [
                    {
                        text: 'IT CM/SR/HP PID',
                        name: 'ITCM_SR_HPPID',
                        type: 'text',
                        cols: 3,
                        readonly: true,
                        required: true
                    },
                    {
                        name: 'Issue',
                        text: 'Issue',
                        type: 'textarea',
                        placeholder: '--Write the issue here--'
                    },
                    {
                        name: 'Raise Date',
                        text: 'Raise Date',
                        type: 'picker'
                    },
                    {
                        name: 'Attachment',
                        text: 'Attachment',
                        type: 'file',
                        buttonText: 'Choose File',
                        clearText: 'Delete'
                    },
                    {
                        name: 'Solution',
                        text: 'Solution',
                        type: 'textarea',
                        placeholder: '--Write the solution here--'
                    },
                    {
                        name: 'status',
                        text: 'Status',
                        type: 'radio',                      
                        data: [{
                            text: 'Issued',
                            value: 'issued'
                        },
                        {
                            text: 'Closed',
                            value: 'closed'
                        }
                        ]
                    }
                ]
            },
            {
                name: 'TableGrid',
                type: 'grid',
                text: 'Grid',
                fields: [
                    {
                        name: 'issue',
                        text: 'Issue',
                        type: 'string'
                    },
                    {
                        name: 'raisedate',
                        text: 'Raise Date',
                        type: 'string'
                    },
                    {
                        name: 'attachment',
                        text: 'Attachment',
                        type: 'string'
                    },
                    {
                        name: 'solution',
                        text: 'Solution',
                        type: 'string'
                    },
                    {
                        name: 'status',
                        text: 'Status',
                        type: 'string'
                    },
                    {
                        name: 'action',
                        text: 'Action',
                        type: 'string'
                    }
                ],
                data: [{
                    issue: '',
                    raisedate: '',
                    attachment: '',
                    solution: '',
                    status: '',
                    action: ''
                },
                {
                    issue: '',
                    raisedate: '',
                    attachment: '',
                    solution: '',
                    status: '',
                    action: ''
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
                                comment: 'hgf',

                            },
                            {
                                commentdata: 'dua',
                                commentby: '123',
                                current: '456',
                                comment: 'hgf',

                            },
                            {
                                commentdata: 'tiga',
                                commentby: 'fsddfs',
                                current: '45dsfsd6',
                                comment: 'hsdfsgf',

                            },
                            {
                                commentdata: 'emoat',
                                commentby: '123',
                                current: '456',
                                comment: 'hgf',

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
                name: 'panel1',
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
                url: 'http://localhost:31602/api/Developer/Create',
                type: 'POST',
                data: JSON.stringify(req),
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    xg.loading.show();
                    console.log(data);
                    xg.loading.hide();
                },
                complete: function () {
                    console.log("complete");
                }
            });
        },


        init: function (xg, callback) {
            alert('test');

            xg.ajax({
                url: 'http://localhost:31602/api/employee/EmployeeList',
                data: {},
                type: 'POST',
                //dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    console.log(result.data[3]);
                    xg.populate{(
                        ITCM_SR_HPPID: result.data[3].ITCM_SR_HPPID)}
                },
                complete: function () {
                    console.log("complete");
                }
            });
            $('[xg-field="save"]').hide();
            callback();
        }
    }
});