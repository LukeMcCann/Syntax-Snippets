          (
            React.Children.toArray(
              Object.entries(customerNotes).map((customerNote) => (
                <ExpandableNote
                  customerNote={customerNote}
                />
              )),
            )
          )
          
          
          // This method of mapping items to an array can be used to convert an Array
          // of models to a common array. This allows us to use array functions on the array
          // of models, and is useful when we want to have a loop to create multiple of the same elment.

          // When using this method React will handle the key={} prop automatically, meaning you also
          // no longer need to pass a unique ID as the key. 
