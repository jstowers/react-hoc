# React Higher-Order Components (HOCs)
Sunday, December 16, 2018

## HOC Steps ##
1.  Write the logic you want to reuse in a component
2.  Create a HOC file and add the HOC scaffold (see below)
3.  Move the reusable logic into the HOC
4.  Pass props/config/behavior through to the child component

## HOC Scaffold ##
```javascript
    import React, { Component } from 'react';

    export default (ChildComponent) => {
        class ComposedComponent extends Component {
            render() {
                return (
                    <ChildComponent />
                )
            }
        }
        return ComposedComponent;
    }
```

### Reference

