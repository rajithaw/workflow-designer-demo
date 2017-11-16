import 'whatwg-fetch';

class WorkflowQueryService {
    
    constructor() {
        this.baseUrl = 'http://localhost:5001';
    }

    find(query) {

        let apiUrl = `${this.baseUrl}/api/v1/workflows`;
        if (query) {
            apiUrl += `?name=${query.name}&createdAfter=${query.createdAfter}&createdBefore=${query.createdBefore}` 
                + `&pageIndex=${query.pateIndex}&pageSize=${query.pageSize}`;
        }

        return fetch(apiUrl)
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(data => {
                console.log('request succeeded with JSON response', data);
                return data;
            })
            .catch(error => {
                console.log('request failed', error);
                return error;
            });
    }

    findById(id) {
        let apiUrl = `${this.baseUrl}/api/v1/workflows/workflow/${id}`;

        return fetch(apiUrl)
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(data => {
                console.log('request succeeded with JSON response', data);
                return data;
            })
            .catch(error => {
                console.log('request failed', error);
                return error;
            });
    }

    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
      
    parseJSON(response) {
        return response.json();
    }
}

let service = new WorkflowQueryService();
export default service;