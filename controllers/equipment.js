import { Equipment } from '../models/equipment.js';

export async function getEquipments(req, res){
    const resp = await Equipment.find({});
    return res.status(200).send(resp);
};

export async function getEquipmentById(req, res){
    const equipId = req.params.id;
    console.log(equipId)
    const resp = await Equipment.find({ ankamaId: equipId });
    console.log(resp)
  return res.status(200).send(resp);
}
