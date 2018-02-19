<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="vue_demo.aspx.cs" Inherits="VueJsDemo.vue_demo" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Demo</title>
    
    <link href="Content/bootstrap.css" rel="stylesheet" />
    <link href="Content/Site.css" rel="stylesheet" />
    <link href="Content/themes/base/all.css" rel="stylesheet" />


    <script src="Scripts/jquery-3.3.1.js"></script>
    <script src="Scripts/jquery-ui-1.12.1.js"></script>
    <script src="Scripts/bootstrap.js"></script>

    <script src="Scripts/vue.js"></script>

    <style>
        .ui-datepicker {
            font-size: .7em;
        }
    </style>

</head>
<body>
    <form id="form1" runat="server">
        <div  class="container">

            <div class="row">
                <div class="col-1">
                    test
                </div>
                <div id="app" class="col-3">
                  <date-picker @update-date="updateDate" el-id="abc" v-bind:alldays="checked" v-bind:somedate="date" date-format="yy-mm-dd">
                  </date-picker>
                    <p>{{ date }}</p>    
                    <button type="button" v-on:click="setDate">Set date</button>
                    <input type="checkbox" v-model="checked" value="Other month days" />
                    <p>{{ checked }}</p> 
                    

                        <div >

                          <auto-complete el-id="autoCompleteSt1" service-url="/api/autocomplete/search/?term=" @selection-changed="autocompletedOnSelectionChanged" >
                          </auto-complete>

                            <p>{{ selectedState.from == 'autoCompleteSt1' ? selectedState : '' }}</p> 

                        </div>

                        <div >

                          <auto-complete el-id="autoCompleteSt2" service-url="/api/autocomplete/search/?term=" @selection-changed="autocompletedOnSelectionChanged" >
                          </auto-complete>

                            <p>{{ selectedState.from == 'autoCompleteSt2' ? selectedState : '' }}</p> 

                        </div>


                </div>


            </div>

        </div>
    </form>

</body>

    <script src="apps/components/autocomplete/auto.js"></script>

    <script src="apps/components/date-picker/date-picker.js"></script>

    <script type="text/javascript">

        //vm.setDate(new Date('2018-2-22'));

    </script>

</html>
