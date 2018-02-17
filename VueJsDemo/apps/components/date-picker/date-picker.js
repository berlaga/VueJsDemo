
//var bus = new Vue();

Vue.component('date-picker', {

    template: "<input />",

    props: ['dateFormat', 'elId', 'somedate','alldays'],

    data()
    {
        return {
            id: null
        }
    }, 
    watch:
    {
        somedate: function (newVal, oldVal)
        {
            console.log(oldVal);
            console.log(newVal);

            $(this.$el).datepicker("setDate", newVal);
        },

        alldays: function (newVal, oldVal)
        {
            console.log(oldVal);
            console.log(newVal);

            $(this.$el).datepicker("option", "showOtherMonths", newVal);
        }


    },
    mounted: function ()
    {
        var self = this;
        this.$el.id = this.elId;

        $(this.$el).datepicker({

            dateFormat: this.dateFormat,
            onSelect: function (date)
            {
                self.$emit('update-date', date);
            }
        });

        //bus.$on('date-changed', function (date)
        //{
        //    console.log(date);
        //    $("#dp1").datepicker("setDate", date);
        //    var currentDate = $("#dp1").datepicker("getDate");
        //})


    },
    beforeDestroy: function ()
    {
        $(this.$el).datepicker('hide').datepicker('destroy');
    }
});

var vm = new Vue({

    el: '#app',

    data: {

        date: null,
        checked: false
    },

    methods: {

        updateDate: function (date)
        {
            this.date = date;
        },
        setDate: function (event)
        {
            if (!event.type)
                this.date = new Date(event);
            else
                this.date = new Date("2018-2-1");

            //bus.$emit('date-changed', this.date);
        }

    }
});

