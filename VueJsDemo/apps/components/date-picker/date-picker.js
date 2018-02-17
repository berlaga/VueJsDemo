
//var bus = new Vue();

Vue.component('date-picker', {

    template: "<input />",

    props: ['dateFormat', 'elId','somedate'],

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

        self.id = this._uid + 1;

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

new Vue({

    el: '#app',

    data: {

        date: null
    },

    methods: {

        updateDate: function (date)
        {
            this.date = date;
        },
        setDate: function (event)
        {
            this.date = new Date("2018-02-11");
            //bus.$emit('date-changed', this.date);
        }
    }
});

