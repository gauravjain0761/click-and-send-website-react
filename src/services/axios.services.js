import axios from "axios";
export { _fetch as fetch };
function handleError(error, reject) {
    if (!error) {
        //   ("Something went wrong, Please try again");
        setTimeout(() => {
            //  window.localStorage.clear();
            //   window.location.href = "/";
        }, 800);
    }

    if (error) {
        let status = error.status;
        if (error.status === 400) {
            setTimeout(() => {
                //window.localStorage.clear();
                //   window.location.href = "/";
            }, 800);
        }

        if (status === 401) {
            // ("Session expired, you are going to be logout");
            setTimeout(() => {
                window.localStorage.clear();
                window.location.href = "/";
            }, 800);
        }

        if (status === 404) {
            // ("Internal Server Error.");
            setTimeout(() => {
                //  window.localStorage.clear();
                // window.location.href = "/";
            }, 800);
        }

        if (
            error.data.message === "You are not authorised to perform this action."
        ) {
            // return (error.data.message);
        }
    }

    reject(error);
    return;
}

function handleResponse(successs, resolve) {
    resolve(successs);
    return;
}

function setMehod(method, path, body, options, params) {
    let config = {};
    if (options) {
        if (options) {
            config.headers = { ...options };
        }
    }
    params = params ? "?" + new URLSearchParams(params).toString() : "";
    if (method === "get" || method === "delete") {
        return axios[method](`${path}${params}`, config);
    }
    if (method === "post" || method === "put") {
        return axios[method](`${path}`, body, config);
    }
}

function _fetch(method, path, body, options, params) {
    return new Promise((resolve, reject) => {
        return setMehod(method, path, body, options, params)
            .then(function (response) {
                handleResponse(response, resolve);
                return;
            })
            .catch(function (error) {
                handleError(error.response, reject);
                return;
            });
    });
}
