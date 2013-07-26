Ext.define('Dallas.view.Checkout1',{
    extend:'Ext.Panel',
    extend: 'Ext.dataview.DataView',
    xtype:'checkout1',
    config:{
        title:'Checkout1',
        iconCls:'action',
        items: [{
        	 docked: 'top',
                        xtype: 'titlebar',
                        title: 'Checkout'
        },
        {
        	
        	
            xtype: 'fieldset',
           // title: 'About You',
           // instructions: 'Tell us all about yourself',
            items: [
                {
                    xtype: 'textfield',
                    name : 'firstName',
                    label: 'First Name'
                },
                {
                    xtype: 'textfield',
                    name : 'lastName',
                    label: 'Last Name'
                },
                {
                    xtype: 'textfield',
                    name : 'address',
                    label: 'Address'
                },
                {
                    xtype: 'textfield',
                    name : 'city',
                    label: 'City'
                },
                {
                    xtype: 'textfield',
                    name : 'state',
                    label: 'State'
                },
                {
                    xtype: 'textfield',
                    name : 'zip',
                    label: 'Zip Code'
                }
                
            ]
        },
        {
        		xtype: 'button',
        		text: 'Next',
        		ui: 'confirm',
        		style: 'margin:10% 25%;'
        		
    		}
    ],
        styleHtmlContent:true,
        styleHtmlCls:'home'

    }
})
