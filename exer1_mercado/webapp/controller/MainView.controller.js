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
            var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            var sMsg = oTextBundle.getText("addButtonMsg");
            this.fnDisplayMsg("Add button pressed");
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
            var oInputFNameValue = this.getView().byId("idInptFName").getValue();
            var oInputLNameValue = this.getView().byId("idInptLName").getValue();
            // Check if first and last name is blank
            if (oInputFNameValue === ""){
            sap.m.MessageToast.show("Required Field is blank"); 
            }
            else if (oInputLNameValue ===""){
            sap.m.MessageToast.show("Required Field is blank");   
            }
        },
            
    });
});

