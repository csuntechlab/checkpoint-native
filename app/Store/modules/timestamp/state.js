//CLOCK STATE

export default{
    user_log: {
        status: false,
        log_id: localStorage.getItem('Log_uuid'),
        time_in: [],
        time_out: [],
        approved_locations:[],
    }
}