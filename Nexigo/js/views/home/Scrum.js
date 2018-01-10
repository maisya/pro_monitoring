nexigo.widget({
    name: 'scrum',
    text: 'Scrum Master',
    views: [{
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
                            text: 'Total Manhours',
                            name: 'Total_Manhours',
                            cols: 4,
                            type: 'text',
                            readonly: true,
                            required: 'true',
                            placeholder: '--total manhourse--',
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
                            readonly: true,
                            format: 'DD MMMM YYYY'
                        },
                        {
                            text: 'Ready for BA  testing',
                            type: 'picker',
                            required: 'true',
                            cols: 4,
                            readonly: true,
                            name: 'Ready_for_BA_Testing',
                            format: 'DD MMMM YYYY'
                        },
                        {
                            text: 'UAT ',
                            type: 'picker',
                            required: 'true',
                            cols: 4,
                            name: 'UAT',
                            readonly: true,
                            format: 'DD MMMM YYYY'
                        },
                        {
                            text: 'Live',
                            type: 'picker',
                            required: 'true',
                            cols: 4,
                            readonly: true,
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
                            name: 'Ready_for_BA_Testing',
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
                            text: 'LIVE',
                            type: 'picker',
                            required: 'true',
                            cols: 4,
                            name: 'LIVE1',
                            format: 'DD MMMM YYYY'
                        },]
                    }]
                },

            ]
        }]
    },
    {
        type: 'row',
        panels: [{
            name: 'panel2',
            fields:
            [{
                text: 'Current Progress',
                type: 'panel',
                name: 'inlinePanel',
                inline: true,
                cols: 5,
                fields: [
                    {
                        name: 'Status',
                        text: 'Status',
                        type: 'select',
                        data: [
                            {
                                text: 'WAITING FOR RESOURCE'
                            },
                            {
                                text: 'data dua'
                            }
                        ]
                    },
                    {
                        name: 'Completion',
                        text: 'Completion (%)',
                        type: 'select',
                        data: [{
                            text: '1'
                        },
                            {
                            text: '2'
                            }]
                    },
                    {
                        name: 'Last_Update',
                        text: 'Last update',
                        type: 'picker'
                    },
                    {
                        name: 'Progress_History',
                        text: 'Progress History',
                        type: 'text'
                    }
                ]
            },
            {
                text: 'Assigned Teams',
                type: 'panel',
                cols: 4,
                inline: true,
                fields: [
                    {
                        type: 'content'
                    },
                    {
                        type: 'fieldRow',
                        fields: [{
                            text: 'Assign Team',
                            name: 'teamAssign'

                        },
                        {
                            type: 'button',
                            text: 'Add',
                            name: 'buttonAdd',
                            action: 'update'
                        },
                        {
                            type: 'button',
                            text: 'Reset',
                            name: 'resetAdd'
                        }]
                    }
                ]
            },
            {
                name: 'TableGrid',
                type: 'grid',
                text: 'Grid',
                fields: [
                    {
                        name: 'Teams',
                        text: 'Team Name',
                        type: 'string'
                    }
                ],
                
            },
            {
                text: 'Configuration',
                type: 'panel',
                inline: true,
                fields: [{
                    type: 'content'
                },
                {
                    type: 'fieldRow',
                    fields: [{
                        name: 'Conf_Type',
                        text: 'Configuration Type',
                        type: 'select',
                        cols: 4,
                        placeholder: 'Select a Configuration',
                        data: [{
                            text: 'data satu',
                            value: 'datasatu'
                        },
                        {
                            text: 'data dua',
                            value: 'datadua'
                        }
                        ]
                    },
                    {
                        name: 'additional remarks',
                        cols: 4,
                        placeholder: '--Write Additional Remarks here--'
                    }
                    ]
                },
                {
                    name: 'Conf_Value',
                    text: 'Configuration Value',
                    type: 'textarea',
                    cols: 8,
                    placeholder: '--Write the configuration value here--'
                },
                {
                    name: 'attachment',
                    text: 'Attachment',
                    type: 'file',
                    filter: ["jpg", "pdf"],
                    buttonText: 'Choose file',
                    clearText: 'Delete',
                    maxSizeMessage: 'Ukuran lampiran maksimum ',
                    maxSize: 2,
                    multiple: true,
                    required: true,
                    cols: 5,
                },
                {
                    type: 'upload',
                    style: 'padding-right:100px;',
                    text: 'Add new',
                    cols: 8
                }
                ]
            },
            {
                name: 'TableGrid2',
                type: 'grid',
                cols: 15,
                fields: [
                    {
                        name: 'ConfigurationType',
                        text: 'Configuration Type',
                        type: 'string'
                    },
                    {
                        name: 'ConfigurationValue',
                        text: 'Configuration Value',
                        type: 'string'
                    },
                    {
                        name: 'Attachment',
                        text: 'Attachment',
                        type: 'string'
                    },
                    {
                        name: 'Action',
                        text: 'Action',
                        type: 'string'
                    }
                ],
                data: [{
                    ConfigurationType: 'Project Documentation',
                    ConfigurationValue: 'blueprint',
                    Attachment: '',
                    Action: ''
                }]
            }
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
                    //data: { url: 'api/file/uploadeds' }
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
    }],

    functions: {
        init: function (xg, callback) {
            alert('test');

            xg.ajax({
                url: 'http://localhost:31602/api/Scrum/bacaManager',
                data: {},
                type: 'POST',
                //dataType: 'json',
                contentType: "application/json; charset=utf-8",
                success: function (result) {
                    console.log(result.data[3]);
                    xg.populate({
                        Total_Manhours: result.data[3].Total_Manhours,
                        Ended: result.data[3].Ended,
                        Ready_for_BA_Testing: result.data[3].Ready_for_BA_Testing,
                        UAT: result.data[3].UAT,
                        LIVE: result.data[3].LIVE,
                        ITCM_SR_HPPID: result.data[3].ITCM_SR_HPPID

                    })
                },
                complete: function () {
                    console.log("complete");
                }
            });
            $('[xg-field="save"]').hide();
            callback();
        },
        
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

            console.log('asdfasfds')
            console.log(req)
            xg.ajax({
                url: 'http://localhost:31602/api/Scrum/Create',
                type: 'POST',
                data: req,
                contenttype: "application/json; charset=utf-8",
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

        update: function () {
            var req = xg.serialize();
            //xg.loading.show();
            xg.ajax({
                url: 'http://localhost:31602/api/Scrum/Update',
                type: 'POST',
                data: req,
                contenttype: "application/json; charset=utf-8",
                success: function (data) {
                    console.log(data);
                    xg.loading.hide();
                    xg.grid.refresh('TableGrid');
                },
                complete: function () {
                    console.log("complete");
                }
            });
        }
    }
});
