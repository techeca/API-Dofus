import { Resource } from '../models/resource.js';

export async function getResources(req, res){
    const resp = await Resource.find({});
    return res.status(200).send(resp);
};

export async function getResourceById(req, res){
    const resp = await Resource.find({ ankamaId: req.params.id });
  return res.status(200).send(resp);
}
