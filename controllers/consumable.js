import { Consumable } from '../models/consumable.js';

export async function getConsumables(req, res){
    const resp = await Consumable.find({});
    return res.status(200).send(resp);
};

export async function getConsumableById(req, res){
    const resp = await Consumable.find({ ankamaId: req.params.id });
  return res.status(200).send(resp);
}
