# Worked examples from the Webpack guide / tutorial https://webpack.js.org/guides
Each branch represents the result of following the guide and the branch name corresponds roughly to the section in the guide:

So when following the guide, you can use git checkout <branch name> to switch to the relevant section and follow along with the example.  
This saves losing your work as you go, as the tutorial often asks you to delete files used in previous examples.



    - codesplitting
    - development
    - dynamic_imports
    - dynamicimportbabel
    - manage_output
    - setup
    - typescript
    - testing
    - \* loader

The current branch which was added to illustrate adding a simple loader with an accompanying test.  This is from the section of the guide on creating loaders. Whereas the guide example uses jest, this uses mocha with chai and typescript for consistency.

https://webpack.js.org/contribute/writing-a-loader/#testing

support for testing with mocha, babel and typescript.

Much learning was gained from Robin Wieruch's blog article https://www.robinwieruch.de/react-testing-mocha-chai-enzyme-sinon

Exploring asynchronous testing was also greatly helped by this article https://staxmanade.com/2015/11/testing-asyncronous-code-with-mochajs-and-es7-async-await/. 

The testing suite makes copious use of both blog articles and so far does not attempt to test the application itself, but this may follow in a future commit.


To run the tests npm run test-typed
