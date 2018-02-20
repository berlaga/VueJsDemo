
//var bus = new Vue();

Vue.component('date-picker', {

    template: "<input />",

    props: ['dateFormat', 'elId', 'somedate', 'alldays'],

    data: function() {
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


