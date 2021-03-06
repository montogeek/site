view Card {
  prop title
  prop children
  prop onClick = Flint.noop

  <card tagName="li" onClick={onClick} class={{ hover: onClick != Flint.noop }}>
    <body>
      <SubTitle if={title}>{title}</SubTitle>
      <Text small>{children}</Text>
    </body>
  </card>

  $ = {
    boxShadow: `1px 1px 2px rgba(0,0,0,0.1)`,
    padding: 0,
    margin: 10,
    borderRadius: 4,
    minWidth: '20%',
    display: 'flex',
    transition: 'all ease-in 300ms'
  }

  $body = {
    padding: 10
  }

  $SubTitle = {
    marginTop: 0,
    marginBottom: 0,
    color: 'rgba(0,0,0,0.5)'
  }

  $hover = {
    cursor: 'pointer',

    hover: {
      boxShadow: `1px 6px 7px rgba(0,0,0,0.1)`,
    }
  }
}

view Card.List {
  <Row root spread tagName="ul" yield />

  $ul = {
    padding: 0
  }
}