import { Set } from '../models/set.js';

export async function getSets(req, res){
    const resp = await Set.find({});
    return res.status(200).send(resp);
};

export async function getSetById(req, res){
    const resp = await Set.find({ ankamaId: req.params.id });
  return res.status(200).send(resp);
}
