exports.sendUserInfo = (req, res, next) => {
  const { user } = res.locals;
  res.json({ result: 'ok', data: { user }});
};
