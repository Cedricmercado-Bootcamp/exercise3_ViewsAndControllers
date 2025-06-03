sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], 
    (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.training.exer1mercado.controller.MainView", {
        onInit() {
        },

        onAddItem: function(){
            // Comment this code for now
            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg("Add button pressed");
            
            // Instantiate the fragment
            
            // create dialog lazily
            
            if (!this.oDialog) {
            // By using loadFragment, we are adding the fragment as a dependent to the View
            // By doing so, we can use the functions inside the view's controller
            this.oDialog = this.loadFragment({
              name: "com.training.exer1mercado.fragment.ProductDialog"
            });
            } 
            this.oDialog.then(function(oDialog) {
            oDialog.open();
            });
           },
           onCloseDialog: function (){
            this.getView().byId("idProductDialog").close();
            },

        fnDisplayMsg: function(sMsg) {
            MessageToast.show(sMsg);
        },

        onChangeMOP: function (oEvent) {
            var sSelectedKey  = oEvent.getParameter("selectedItem").getProperty("key");
            var oSelectedItem = oEvent.getParameter("selectedItem");
            var sSelectedText = oSelectedItem.getText();

            MessageToast.show("Selected Mode of Payment: " + sSelectedText);

            // 2 MOP
            var oMobileLabel = this.getView().byId("idLblPhone");
            var oMobileInput = this.getView().byId("idInputPhone");
            var oCreditLabel = this.getView().byId("idLblCC");
            var oCreditInput = this.getView().byId("idInputCC");
            // Hide and display additional field
            if (sSelectedKey === "GCASH") {
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                oCreditLabel.setVisible(false);
                oCreditInput.setVisible(false);
            } else if (sSelectedKey === "CC") {
                oCreditLabel.setVisible(true);
                oCreditInput.setVisible(true);
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
            }
            else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCreditLabel.setVisible(false);
                oCreditInput.setVisible(false);
            }
        },

        onPressCheckout: function (){
            var oInputFName = this.getView().byId("idInptFName");
            var oInputLName = this.getView().byId("idInptLName");
            var oInputFNameValue = oInputFName.getValue();
            var oInputLNameValue = oInputLName.getValue();
            var oRouter = this.getOwnerComponent().getRouter();
              // Check if first name and last name is blank
            if (oInputFNameValue === "" || oInputLNameValue === ""){
              // set value state to Error
            oInputFName.setValueState("Error");
            oInputLName.setValueState("Error");
            } else {
            oInputFName.setValueState("None");
            oInputLName.setValueState("None");
              //Navigate to review page passing first
            oRouter.navTo("RouteReviewPage", {
              firstName: oInputFNameValue
            });

            }
            
            },
            
    });
});
