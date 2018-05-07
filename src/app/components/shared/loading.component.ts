import { Component } from "@angular/core";


@Component({
    selector: 'loading',
    template: `<div class="loader"></div>`,
    styles: [ `
    .loader {
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 130px;
        height: 130px;
        animation: spin 2s linear infinite;
        margin: 20% 40%;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    `
]
})
export class loadingComponent {

}