import * as Yup from 'yup';
import Registration from '../models/Plan';

class RegistrationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const planExists = await Registration.findOne({
      where: { title: req.body.title },
    });

    if (planExists) {
      return res.status(400).json({ error: 'Plan already exists' });
    }

    const plan = await Registration.create(req.body);

    return res.json(plan);
  }

  async index(req, res) {
    const plans = await Registration.findAll({
      order: ['price'],
      attributes: ['id', 'title', 'duration', 'price'],
    });

    return res.json(plans);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const plan = await Registration.findByPk(req.params.id);

    const { title } = req.body;

    if (title) {
      if (title !== plan.title) {
        const planExists = await Registration.findOne({ where: { title } });

        if (planExists) {
          return res.status(400).json({ error: 'Plan already exists' });
        }
      }
    }

    const { title: _title, duration, price } = await plan.update(req.body);

    return res.json({ title: _title, duration, price });
  }

  async delete(req, res) {
    const plan = await Registration.findByPk(req.params.id);

    await plan.destroy();

    return res.json();
  }
}

export default new RegistrationController();
