import 'whatwg-fetch';

class WorkflowService {
    
    constructor() {
        this.baseUrl = 'http://localhost:5001';
    }

    create(workflow) {
        let apiUrl = `${this.baseUrl}/api/v1/workflows/workflow`;

        return fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(workflow)
            })
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

    update(workflow) {
        let apiUrl = `${this.baseUrl}/api/v1/workflow/${workflow.id}`;

        return fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(workflow)
            })
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

    delete(id) {
        let apiUrl = `${this.baseUrl}/api/v1/workflow/${id}`;

        return fetch(apiUrl, {
                method: 'DELETE'
            })
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

let service = new WorkflowService();
export default service;