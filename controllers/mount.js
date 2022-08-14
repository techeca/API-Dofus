import { Mount } from '../models/mount.js';

export async function getMounts(req, res){
    const resp = await Mount.find({});
    return res.status(200).send(resp);
};

export async function getMountById(req, res){
    const resp = await Mount.find({ ankamaId: req.params.id });
  return res.status(200).send(resp);
}
