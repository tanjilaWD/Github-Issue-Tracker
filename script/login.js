document.getElementById('SignIn-btn').addEventListener('click', function(){
    const userName = document.getElementById('userName');
    const user = userName.value ;
    console.log(user);

    const userPass = document.getElementById('user_pass');
    const password = userPass.value;
    console.log(password);

    document.getElementById('userName').value = '';
    document.getElementById('user_pass').value = '';

    if(user == 'admin' && password =='admin123'){
        window.location.assign('../main.html');
    }
    else{
        alert('Try Failed');
        return;
    }
    
});