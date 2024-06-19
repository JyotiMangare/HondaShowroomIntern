import { LightningElement,wire } from 'lwc';
import MyResource from '@salesforce/resourceUrl/DealerImage';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Dealer__c_OBJECT from '@salesforce/schema/Dealer__c';
import STATE_FIELD from '@salesforce/schema/Dealer__c.state__c';
import CITY_FIELD from '@salesforce/schema/Dealer__c.City__c';
export default class DealerNetworkPage extends LightningElement {
    DImage= MyResource;
    StatePicklistValues =[];
    statePicklist;
    CityPicklistValues =[];
    cityPicklist;
 
   @wire(getObjectInfo, { objectApiName: Dealer__c_OBJECT })
   objectInfo;
 
   @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId', fieldApiName: STATE_FIELD})
   
   
   StateData({error, data}){
       if(data){
           this.StatePicklistValues= data.values.map((picklist)=>({
               label:picklist.label,
               value:picklist.value,
           }));
           this.error = undefined;
       } else if(error){
           this.error = error;
           this.StatePicklistValues = undefined;
         }
     }
 
 @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId',fieldApiName:CITY_FIELD})
 CityData({error, data}){
     if(data){
         this.CityPicklistValues= data.values.map((picklist)=>({
             label:picklist.label,
             valueOne:picklist.value,
         }));
         this.error = undefined;
     } else if(error){
         this.error = error;
         this.CityPicklistValues = undefined;
         }
     }
 
   handleChange(event) {
       this.statePicklist = event.target.value;
   }
   handleChange1(event) {
     this.cityPicklist = event.target.value;
 }
 clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
}
 }
