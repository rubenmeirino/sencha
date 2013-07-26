Ext.define('Dallas.view.Choosesize',{
    extend:'Ext.Panel',
    extend: 'Ext.dataview.DataView',
    xtype:'choosesize',
    config:{
        title:'Choose Size',
        iconCls:'info',
        
       html: [
            ' <div id="iphone">',
'<div class="block">',	
    '<div id="container">',
    	'<div class="size-container">',
        	'<div class="size-hdr">Adult Sizes</div>',
            '<a href="#" class="size-btn size-btn-first">Small</a>',
            '<a href="#" class="size-btn ">Medium</a>',
            '<a href="#" class="size-btn ">Large</a>',
            '<a href="#" class="size-btn size-btn-second">X Large</a>',
            '<a href="#" class="size-btn size-btn-second-2">XX Large</a>',
        '</div>',
        '<div class="size-container">',
        	'<div class="size-hdr">Youth Sizes</div>',
            '<a href="#" class="size-btn size-btn-first">Small</a>',
            '<a href="#" class="size-btn ">Medium</a>',
            '<a href="#" class="size-btn ">Large</a>',
            '<a href="#" class="size-btn size-btn-second">X Large</a>',
            '<a href="#" class="size-btn size-btn-second-2">XX Large</a>',
        '</div>',
        
    '</div>',
'</div>',
'</div> '
        ].join(''), 
        
        
        
       items: [{
        	 	docked: 'top',
                xtype: 'titlebar',
                title: 'Choose Size'
        		}
        ]

    }
})
