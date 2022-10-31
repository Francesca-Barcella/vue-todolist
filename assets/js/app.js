/* 
Descrizione:

Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/


/* Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no */

const { createApp } = Vue

createApp({
    data() {

        return {

            newTask: {
                text: '',
                done: false
            },

            error: false,
            tasks: [
                {
                    text: 'learn HTML',
                    done: false
                },
                {
                    text: 'learn CSS',
                    done: true
                },
                {
                    text: 'learn JS',
                    done: true
                },
                {
                    text: 'learn VUE JS',
                    done: false
                },
                {
                    text: 'learn PHP',
                    done: true
                }
            ]
        }
    },

    methods: {
        addTask() {
            console.log('ho cliccato su add task');
            //console.log('valore input = ' + this.newTask);

            //devono inserire almeno 5 caratteri
            if (this.newTask.length < 5) {
                this.error = true
            } else {
                //questi due prima erano fuori e li portiamo dentro l'if-else per risolvere il bug dell'input vuoto
                this.tasks.unshift(this.newTask)
                this.newTask = ''
                this.error = false
            }
        },

        done(index) {
            //fruits.splice(2,1) - toglie dalla posizione 2 un elemento dell'array
            console.log('ho cliccato sul task con indice N° = ' + index)
            //tolgo dall'elemento l'elemento attivo che si pesca con il parametro index rilevato al click sullìicona con v-on - 1 indica che tolgie 1 elemento 8se metto due toglie anche l'<li></li> successivo
            this.tasks.splice(index, 1)
        },

        /* 
        2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
        */


        // IMPOSTAZIONE IF ELSE
        // ORA CAPIRE DOVE E COME APPLICARLO AL DOM
        // IL TESTO STA DENTRO LI QUINDI DIREI ONCKLIC SU LI

        changeStatusDone() {
            //console.log('hai cliccato sul testo di li');
            if (this.tasks.done === false) {
                this.tasks.done = true
            } else {
                this.tasks.done = false
            }
            console.log(this.tasks.done + ' prova log');
        }
    }

}).mount('#app');