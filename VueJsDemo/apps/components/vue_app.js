
var vm = new Vue({

    el: '#app',

    data: {

        date: null,
        checked: false,
        selectedState: "",
        dialogOpened: false
    },

    methods: {

        onDialogClosed: function () {

            this.dialogOpened = false;

        },
        openDialog: function () {
            this.dialogOpened = true;
        },
        updateDate: function (date) {
            this.date = date;
        },
        autocompletedOnSelectionChanged: function (selection) {
            console.log(selection);
            this.selectedState = selection;
        },
        setDate: function (event) {
            if (!event.type)
                this.date = new Date(event);
            else
                this.date = new Date("2018-2-1");

            //bus.$emit('date-changed', this.date);
        }

    }
});
