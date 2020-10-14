
import React from 'react'
import ApiExample from './components/ApiExample'


export default function Intents() {


  return (
    <div>
      <h2>Intents</h2>
      {/* findIntent */}
      <ApiExample
        apiName="findIntent"
        title="findIntent"
        description="Find out more information about a particular intent by passing its name, and optionally its context."
        codeAction={intent => fdc3.findIntent(intent)}
        snippet={(intent) => `fdc3.findIntent("${intent}")`}
        inputLabel="Intent:"
      />

      {/* findIntentsByContext */}
      <ApiExample
        apiName="findIntentsByContext"
        title="findIntentsByContext"
        description="Find all available intents by context type."
        codeAction={context => fdc3.findIntentsByContext(context)}
        snippet={(context) => `fdc3.findIntentsByContext("${context}")`}
        inputLabel="Context:"
      />

      {/* raiseIntent */}
      <ApiExample
        apiName="raiseIntent"
        title="raiseIntent"
        description="Raise an Intent."
        codeAction={intent => fdc3.raiseIntent(intent)}
        snippet={(intent) => `fdc3.raiseIntent("${intent}")`}
        inputLabel="Intent:"
      />
      {/* addIntentListener */}
      <ApiExample
        apiName="addIntentListener"
        title="addIntentListener"
        description="Adds a listener for incoming Intents from the Agent."
        codeAction={listener => fdc3.addIntentListener(listener, console.log)}
        snippet={(listener) => `fdc3.addIntentListener("${listener},(context)=>{//do something with the context}")`}
        inputLabel="addIntentListener:"
      />

    </div>
  )
}
