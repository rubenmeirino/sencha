Ext.define('Dallas.view.Option2',{
    extend:'Ext.Panel',
    extend: 'Ext.dataview.DataView',
    xtype:'option2',
    config:{
        title:'Option2',
        iconCls:'settings',
        items: [{
        	 docked: 'top',
                        xtype: 'titlebar',
                        title: 'Custom Name/Number'
        },
        {
        	
        	
            xtype: 'fieldset',
            title: 'Your Choice',
            instructions: 'Above Name & Number will display on your Jersey',
            items: [
                {
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Name'
                },
                {
                    xtype: 'textfield',
                    name : 'number',
                    label: 'Number'
                }
                               
            ]
        },
        {
        		xtype: 'button',
        		text: 'Next',
        		ui: 'confirm',
        		style: 'margin:10% 25%;'
        		//badgeText: '2'
    		}
    ],
        styleHtmlContent:true,
        styleHtmlCls:'home'

    }
})
