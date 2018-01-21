const fetch = require('node-fetch');
const RX = require('rxjs/Rx');
module.exports = {
    getUsers: function (req, res) {

        let myPromise = fetch('http://jsonplaceholder.typicode.com/users/');
        let jsonPromise = myPromise.then(x => {
            return x.json();
        });

        jsonPromise.then(function (json) {

            res.render('./index.ejs', {users: json});
        });


// using observable
        RX.Observable.fromPromise(myPromise).flatMap(x => {
            return x.json()
        })
            .subscribe(function (data) {
                res.render('./index.ejs', {users: data});
            }, function (e) {
                console.log(e)
            });


// using async and await
        async function showUsers() {

            try {
                let result = await jsonPromise;

                res.render('./index.ejs', {users: result});
            }
            catch (err) {
                console.log(err);
            }
        }

        showUsers();

    }

}