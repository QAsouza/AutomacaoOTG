///<reference types="cypress" />

import Preenchimento from '../support/Pages/PreenchendoForm';

describe('Preenchimento Formulario', () => {
    before(()=> {
        Preenchimento.acessandoPag() ;
    })

    it('Page. Enter Vehicle data', () => {
        Preenchimento.Formulario1();
    })
    it('Page. Enter insirant data', () => {
        Preenchimento.Formulario2();
    }) 

    it('Page. Enter product data', () => {
        Preenchimento.Formulario3();    
    })
    it('Page. Select Price Options', () => {
        Preenchimento.Formulario4();
    })

    it('Page. Send Quote', () => {
        Preenchimento.Formulario5();

})
                                   
        
})