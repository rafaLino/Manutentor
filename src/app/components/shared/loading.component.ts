import { Component } from "@angular/core";


@Component({
    selector: 'loading',
    template: `<div class="loader"></div>`,
    styles: [ `
    .loader {
        border: 12px solid #f3f3f3; /* Light grey */
        border-top: 12px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 2s linear infinite;
        
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