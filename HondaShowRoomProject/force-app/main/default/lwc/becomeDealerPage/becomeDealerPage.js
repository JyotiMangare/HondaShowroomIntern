import { LightningElement } from 'lwc';
import MyResource from '@salesforce/resourceUrl/DealerImage';
export default class BecomeDealerPage extends LightningElement {
    DImage= MyResource;
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
}
}