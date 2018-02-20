

Vue.component('ui-dialog', {

    template: "<div>\
                    <div class='row'> \
                        <div class='col'> \
                          <date-picker @update-date='updateStartDate' el-id='dp1' v-bind:alldays='checked' v-bind:somedate='startDate' date-format='yy-mm-dd'> \
                          </date-picker >\
                        </div> \
                        <div class='col'> \
                          <date-picker @update-date='updateEndDate' el-id='dp2' v-bind:alldays='checked' v-bind:somedate='endDate' date-format='yy-mm-dd'> \
                          </date-picker >\
                        </div> \
                    </div>            \
                </div>",

    props: ['elId', 'open'],

    data: function () {
        return {
            url: null,
            startDate: null,
            endDate: null,
            checked: false,
            errors: []
        }
    },

    watch:
    {
        open: function (newVal, oldVal) {

            if (newVal === true)
                $(this.$el).dialog("open");

        }



    },

    mounted: function () {
        var self = this;
        this.$el.id = this.elId;

        //var d = _m('2018-2-12');

        //$(this.$el).datepicker({

        //    dateFormat: this.dateFormat,
        //    onSelect: function (date)
        //    {
        //        self.$emit('update-date', date);
        //    }
        //});

        $(this.$el).dialog({

            autoOpen: false,
            title: 'My dialog',
            width: 500,
            close: function (event, ui) {

                self.$emit('dialog-closed', null);
            }

        });

    },

    methods: {

        updateStartDate: function (date) {
            this.startDate = date;
        },

        updateEndDate: function (date) {
            this.endDate = date;
        }


    }
});
