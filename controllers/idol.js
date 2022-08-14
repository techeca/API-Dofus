import { Idol } from '../models/idol.js';

export async function getIdols(req, res){
    const resp = await Idol.find({});
    return res.status(200).send(resp);
};

export async function getIdolById(req, res){
    const resp = await Idol.find({ ankamaId: req.params.id });
  return res.status(200).send(resp);
}
