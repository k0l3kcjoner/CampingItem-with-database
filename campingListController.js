({
	
    init: function(component, event, helper) {
      var action = component.get("c.getItems");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(component.isValid() && state === 'SUCCESS') {
              component.set("v.newItem", response.getReturnValue());
              
            }
            else {
                console.log("Something gone wrong. Here is the state: " + state);
            }
        });
        //Now the action has to be executed by salesforce
        $A.enqueueAction(action);
    },
    
    clickCreateCamp : function(component, event, helper) {
		
        if(helper.validateCamp(component)) {
            //create it
           var newCamp = component.get("v.newCamp");
            console.log("co wciskamy: " + JSON.stringify(newCamp));
            helper.createCamp(component, newCamp);
           
        }
        
        
	}
})