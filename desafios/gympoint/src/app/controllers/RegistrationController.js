import * as Yup from 'yup';
import { addMonths, parseISO } from 'date-fns';
import Registration from '../models/Registration';
import Plan from '../models/Plan';

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

    const { student_id, plan_id, start_date } = req.body;

    /**
     * Check if registration exists
     */

    const registrationExists = await Registration.findOne({
      where: { student_id },
    });

    if (registrationExists) {
      return res
        .status(400)
        .json({ error: 'Student already has a registration' });
    }

    /**
     * Find Plan relative to registration
     */

    const plan = await Plan.findByPk(plan_id);

    const end_date = addMonths(parseISO(start_date), plan.duration);

    const price = plan.price * plan.duration;

    const registration = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    return res.json(registration);
  }

  async index(req, res) {
    const registrations = await Registration.findAll();

    return res.json(registrations);
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
