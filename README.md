ndc_oslo_angularjs
====================
Code for the NDC Oslo AngularJS Workshop

The code supports two server environments: *.NET* or *Node.js*. You can use either technology as the server for the workshop. 

Note: some parts of the course will be using Node.js tools regardless of the server environment you choose to work with.

To Use A .NET Server
====================

Go to `servers/webapi` and open *AtTheMovies.sln* in *Visual Studio 2013*. Build the solution to restore all
NuGet packages.

There are two project inside. *AtTheMovies* is the server for the workshop. We won't make any changes here, but you
do want to make sure the project is set to be the *start project*. Press CTRL+F5 to run, and the server should listen on port 8080.

Use a browser and navigate to [http://localhost:8080](http://localhost:8080) to make sure the server is functioning.

The *clients* project in this solution is the place where we will be editing files and adding code for AngularJS. You never want to launch or execute this project, it is for file editing only.

To Use A Node.js Server
====================
Make sure you have bower and grunt-cli installed globally.
````    
    npm install bower -g
    npm install grunt-cli -g
````

Go to the clients folder and run:
````
    bower install
````

Go to the servers\node folder and run:
````    
    npm install
    grunt
````   

You should now have a server running at [http://localhost:3000](http://localhost:3000), try it in a browser to make sure the server is running properly.
