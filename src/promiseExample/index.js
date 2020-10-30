const somethingWillHappen = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Correct');
        }else{
            reject('F');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));