
const el = require('./Elementos').Elementos;

class Preenchendo {
    acessandoPag(){
            cy.visit('http://sampleapp.tricentis.com/101/app.php');
        }

    Formulario1() {
        cy.get(el.Marca)
            .should('contain', 'BMW')
            .select('BMW')

        cy.get(el.Modelo)
            .select('Motorcycle')
            .should('have.value', 'Motorcycle')

        cy.get(el.Cilindro)
            .type('42')
           .should('have.value', '42')

        cy.get(el.Desempenho)
            .type('9')
            .should('have.value', '9')

        cy.get(el.DataLançamento)
            .type('08/18/2022')

        cy.get(el.Assentos)
            .select('2')
            .should('have.value', '2')

        cy.get(el.Condução)
            .click()

        cy.get(el.NSelecionado)
            .should('not.be.checked')

        cy.get(el.Assentos2)
            .select('2')
            .should('have.value', '2')
                                    
        cy.get(el.ModeloMotor)
            .select('Electric Power')
            .should('have.value', 'Electric Power')

        cy.get(el.CargaUtil)
            .type('90')
            .should('have.value', '90') 
                                            
        cy.get(el.PesoTotal)
            .type('230')
            .should('have.value', '230')

        cy.get(el.ValorTabela)
            .type('75000')
            .should('have.value', '75000')

        cy.get(el.NumeroPlaca)
            .type('1234')
            .should('have.value', '1234')

        cy.get(el.KmAtual)
            .type('100')
            .should('have.value', '100')

        cy.get(el.Enter1).click()
    }
    
    Formulario2() {
        cy.get(el.PrimeiroNome)
            .type('Antonio')
            .should('have.value', 'Antonio')

        cy.get(el.Sobrenome)
            .type('Nunes')
            .should('have.value', 'Nunes')

        cy.get(el.Nascimento)
            .type('12/12/2002', {delay: 100})
            .should('have.value', '12/12/2002')

        cy.get(el.Genero)
            .click()

        cy.get(el.Nselecionado1) 
            .should('not.be.checked')

         cy.get(el.Endereço)
            .type('Rua Paulo VI')
            .should('have.value', 'Rua Paulo VI')

         cy.get(el.Pais)
            .select('Brazil')
            .should('have.value', 'Brazil')

         cy.get(el.Cep)
             .type('55297350')
            .should('have.value', '55297350')

        cy.get(el.Cidade)
            .type('Garanhuns')
            .should('have.value', 'Garanhuns')

        cy.get(el.Ocupação)
            .select('Selfemployed')
            .should('have.value', 'Selfemployed')

        cy.get(el.HVelocidade).click()
        cy.get(el.HOutros).click()
        cy.get(el.Hobbies)
            .should('have.length', 5)

        cy.get(el.Site)
            .type('http://sampleapp.tricentis.com/101/app.php')
            .should('have.value', 'http://sampleapp.tricentis.com/101/app.php')

         cy.get(el.Enter2).click()
                                               
    }

    Formulario3() {
        cy.get(el.DataInicio)
            .type('12/05/2022', {dely: 100})
            .should('have.value', '12/05/2022')

        cy.get(el.SegLimite)
            .select('3.000.000,00')
            .should('have.value', '3000000')

        cy.get(el.Bonus)
            .select('Bonus 1')
            .should('have.value', 'Bonus 1')

        cy.get(el.Seguro1)
            .select('Full Coverage')
            .should('have.value', 'Full Coverage')

        cy.get(el.Opcional).click()
        cy.get(el.Nselecionado2).should('not.be.checked')

        cy.get(el.CarroSeguro)
            .select('Yes')
            .should('have.value', 'Yes')

        cy.get(el.Enter3).click()
    }
    
    Formulario4() {
        cy.get(el.Plano)
            .click()

        cy.get(el.Enter4)
            .click()
    }

    Formulario5() {
        cy.get(el.Email)
            .type('AntonioNunes@teste.com')
            .should('have.value', 'AntonioNunes@teste.com')

        cy.get(el.Telefone)
            .type('40028922')
            .should('have.value','40028922')

        cy.get(el.Nome)
            .type('AntonioNunes')
            .should('have.value','AntonioNunes')

        cy.get(el.Senha)
            .type('A1b2c3d4e5')
            .should('have.value', 'A1b2c3d4e5')

        cy.get(el.ConfSenha)
            .type('A1b2c3d4e5')
            .should('have.value', 'A1b2c3d4e5')

        cy.get(el.Comentario)
            .type('Tecnica Select all', {delay: 150})
            .clear()
            .type('Sujo{selectall}Limpo', {delay: 100})
            .should('have.value', 'Limpo')

        cy.get(el.Enter5).click()
        Cypress.on('uncaught:exception', (err, runnable) =>{
            return false
        })

        cy.wait(10000)
        cy.get(el.Sucesso).should('have.text', 'Sending e-mail success!')

        cy.get(el.Enter6).click()
    }
}
export default new Preenchendo();