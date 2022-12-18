document .body .innerHTML = marked .parse (
  document .body .innerHTML .trim() . split ('\n') .slice (0, -2) .join ('\n')
)
  