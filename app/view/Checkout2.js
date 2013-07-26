Ext.define('Dallas.view.Checkout2',{
    extend:'Ext.Panel',
    extend: 'Ext.dataview.DataView',
    xtype:'checkout2',
    config:{
        title:'Checkout2',
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
                    xtype: 'selectfield',
                    name : 'card',
                    label: 'Card',
                    
                    options : [
                    
                    	{
                    		text:'Master',
                    		value: 'master'
                   		},
                   		{
                    		text:'Visa',
                    		value: 'visa'
                   		},
                   		{
                    		text:'American Express',
                    		value: 'american express'
                   		}
                    
                    
                    ]
                },
                {
                    xtype: 'textfield',
                    name : 'cardnum',
                    label: 'Card Number'
                },
                {
                    xtype: 'datepickerfield',
                    name : 'expire',
                    label: 'Expiration'
                },
                {
                    xtype: 'textfield',
                    name : 'csv',
                    label: 'CSV Code'
                }
                
               
            ]
        },
        {
        		xtype: 'button',
        		text: 'Submit Order',
        		ui: 'confirm',
        		style: 'margin:10% 20%;'
        		//badgeText: '2'
    		}
    ],
        styleHtmlContent:true,
        styleHtmlCls:'home'

    }
})
