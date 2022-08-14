import { Monster } from '../models/monster.js';

export async function getMonsters(req, res){
    const resp = await Monster.find({});
    return res.status(200).send(resp);
};

export async function getMonsterById(req, res){
    const resp = await Monster.find({ ankamaId: req.params.id });
  return res.status(200).send(resp);
}
