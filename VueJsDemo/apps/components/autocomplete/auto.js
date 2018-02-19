

Vue.component('auto-complete', {

    template: "<input />",

    props: ['elId', 'serviceUrl','selectedItem'],

    data: function()
    {
        return {
            url: null
        }
    }, 


    mounted: function ()
    {
        var self = this;
        this.$el.id = this.elId;
        self.url = this.serviceUrl;

        //$(this.$el).datepicker({

        //    dateFormat: this.dateFormat,
        //    onSelect: function (date)
        //    {
        //        self.$emit('update-date', date);
        //    }
        //});

        $(this.$el).autocomplete({
            source: function (request, response)
            {
                $.ajax({
                    url: this.serviceUrl + request.term,
                    type: 'GET',
                    cache: false,
                    data: request,
                    dataType: 'json',
                    success: function (data)
                    {
                        response($.map(data, function (item) {
                            return { value: item.value, label: item.label };
                        }));
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown)
                    {
                        console.log('error', textStatus, errorThrown);
                    }
                });
            },
            minLength: 2,
            autoFocus: false,
            delay: 500,
            focus: function (event, ui)
            {
                event.preventDefault();

                $(this).val(ui.item.label);

                //save selected user
                //notificationsModel.selectedUser(ui.item);

            },
            select: function (event, ui)
            {

                event.preventDefault();
                $(this).val(ui.item.label);

                self.$emit('selection-changed', { text: ui.item.label, value: 1, from: self.elId } );

                //save selected user
                //notificationsModel.selectedUser(ui.item);
            }

        });


        var au = $(this.$el).autocomplete("instance");
        au.serviceUrl = this.serviceUrl;
    }
});
