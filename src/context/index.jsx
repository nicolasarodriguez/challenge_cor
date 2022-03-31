const React = require('react')

const { Provider: UserProvider, Consumer: UserConsumer } = React.createContext()

module.exports = { UserProvider, UserConsumer }
