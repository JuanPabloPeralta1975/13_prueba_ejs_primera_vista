const controller = {
    index: (req,res) =>{
    return res.render('index')
    },
    
    register: (req,res) =>{
        return res.send('Registro')
    },

    
    login: (req,res) =>{
        return res.send('Login')
    }
}


module.exports = controller;

