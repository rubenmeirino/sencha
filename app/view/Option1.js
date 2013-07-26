Ext.define('Dallas.view.Option1',{
    extend:'Ext.Panel',
    require : 'Ext.dataview.List',
    xtype:'option1',
    config:{
        title:'Option1',
        iconCls:'list',
        layout:'fit',
        items: [{
        	 	docked: 'top',
                xtype: 'titlebar',
                title: 'Choose From Roster'
        },
        {
                xtype:'list',
                store:'Rosters',

                itemTpl:'{name} -- {number}',
                itemCls:'place-entry'
            }
        ]

    }
}) 