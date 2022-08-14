import { Weapon } from '../models/weapon.js';

export async function getWeapons(req, res){
    const resp = await Weapon.find({});
    return res.status(200).send(resp);
};

export async function getWeaponById(req, res){
    const resp = await Weapon.find({ ankamaId: req.params.id });
  return res.status(200).send(resp);
}
