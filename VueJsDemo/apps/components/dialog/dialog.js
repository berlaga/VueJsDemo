

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
                    </div>      \
                    <div style='color: red; margin-top:10px;' class='row'> \
                        <div class='col'> \
                            <span >{{ errors.length > 0 ? errors[0] : ''  }} </span> \
                        </div> \
                    </div> \
                    <div style='margin-top:10px;' class='row'> \
                        <div class='col'> \
                          <label for='ac1'>Select state</label>\
                          <auto-complete el-id='ac1' service-url='/api/autocomplete/searchState/?term=' @selection-changed='autocompletedOnSelectionChanged' > \
                          </auto-complete > \
                        </div> \
                    </div> \
                </div>",

    props: ['elId', 'open'],

    data: function () {
        return {
            url: null,
            startDate: null,
            endDate: null,
            checked: false,
            selectedState: "",
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
            modal: true,
            title: 'My dialog',
            width: 500,
            close: function (event, ui) {

                self.$emit('dialog-closed', null);
            }

        });

    },

    methods: {

        autocompletedOnSelectionChanged: function (selection) {
            console.log(selection);
            this.selectedState = selection;
        },

        updateStartDate: function (date) {
            this.startDate = date;

            this.compareDates();

        },

        updateEndDate: function (date) {
            this.endDate = date;

            this.compareDates();

        },

        compareDates() {

            var sd = moment(this.startDate);
            var ed = moment(this.endDate);

            if (ed < sd) {

                this.errors.push("Start date should be less than end date");
            }
            else {

                this.errors.pop();

            }
        }


    }
});
