<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said ...
                        </p>
                        <p>
                            {{ status.created_at | ago | capitalize }}
                        </p> 
                    </div> 

                    <div class="message-body" v-text="status.body"></div>
                </div>
                <add-to-stream @completed="addStatus"></add-to-stream>
            </div> 
        </div>  
    </div>
</template>   

<script>
    import moment from 'moment';
    import Status from '../models/Status'; 
    import AddToStream from '../components/AddToStream.vue';  

    export default {
        components: { 
            AddToStream 
        },
        data() {
            return {
                statuses: []
            }
        },
        filters: {
            ago(data) {
                return moment(data).fromNow();
            },
            capitalize(value) {
                return value.toUpperCase();
            }
        },
        created() {
            ////axios.get('/statuses')
            //Status.all()
            //    //.then(response => this.statuses = response.data);
            //    .then( ({data}) => this.statuses = data);

            Status.all( statuses => this.statuses = statuses);
        },

        methods: {
            addStatus(status) {
                this.statuses.unshift(status);

                window.scrollTo(0,0);
            }
        }
    }
</script>
