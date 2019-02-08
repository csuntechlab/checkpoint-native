const protocol = "http://"
const host = "localhost"
const port = ":8080/"
const url = protocol + host + port + endpoint


const fetchUserLogin = (payload, success, error) => {
    let path = ""
    window.axios.get(url + "login", {
        name: payload.email,
        email: payload.email,
        password
    }).then(
        response => success(response.data),    
    ).catch(
        failure=>{ error(failure.response.data.message)}
    );
};
const fetchUpdatedMajorsByFieldAPI = (payload, success, error) => {
    window.axios.get(`api/major/hegis-codes/${payload.school}/${payload.form.fieldOfStudyId}`).then(
        response => success(response.data),    
    ).catch(
        failure=>{ error(failure.response.data.message)}
    );
};
const fetchUpdatedMajorsByFieldAPI = (payload, success, error) => {
    window.axios.get(`api/major/hegis-codes/${payload.school}/${payload.form.fieldOfStudyId}`).then(
        response => success(response.data),    
    ).catch(
        failure=>{ error(failure.response.data.message)}
    );
};