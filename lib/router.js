FlowRouter.route('/', {
    name:'home',
    action: function(params, queryParams) {
        console.log("Yeah! We are on the post:", params.postId);
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/login', {
    name: "login",
    action() { 
        BlazeLayout.render('login');
    }
});

FlowRouter.route('/header', {
    name: "header",
    action() { 
        BlazeLayout.render('header');
    }
});

FlowRouter.route('/sqldata', {
    name: "sqldata",
    action() { 
        BlazeLayout.render('sqldata');
    }
});