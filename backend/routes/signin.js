const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { login, signout } = require('../controllers/users');

router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}), login);
router.get('/signout', signout);
module.exports = router;
