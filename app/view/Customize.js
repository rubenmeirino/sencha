Ext.define('Dallas.view.Customize',{
    extend:'Ext.Panel',
    extend: 'Ext.dataview.DataView',
    xtype:'customize',
    config:{
        title:'Customize',
        iconCls:'team',
        styleHtmlCls:'buttons',
        items: [{
        	 	docked: 'top',
                xtype: 'titlebar',
                title: 'Customize Options'
        	},
        	 {
        		xtype: 'button',
        		text: 'Custom Name and Number',
        		ui: 'confirm',
        		//badgeText: '2'
        		style: 'margin:20% 5%;'
    		},
    		{
        		xtype: 'button',
        		text: 'Choose form Team Roster',
        		ui: 'confirm',
        		style: 'margin:20% 5%;'
        		//badgeText: '2'
    		}
        ]
        
        //html:'<img src="resources/icons/dallas.png" style="height:100%; width:100%" />',
        //layout:'fit',
        //scrollable:true,
        //styleHtmlContent:true,
        //styleHtmlCls:'home'

    }
})
